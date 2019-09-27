let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let name = '#form-name'
let phone = '#form-phoneNumber'
let para = ':nth-child(15) > :nth-child(2) > a'

 describe('orders', function(){
  beforeEach('cookie', function () {
    cy.setCookie('guid-191', '{5BA16FE0-DB4C-B041-4D74-7B3CDD9BC1CF}')
    cy.server();
    cy.route('GET', 'https://crm.api.apgrup.ru/v1/*')
      .as('ww');
  });
  it('visit apgrup', function () {
    cy.visit("https://apgrup.ru/");

    cy.get(login)
      .click()
      .clear()
      .type('jinda.project@gmail.com');
    cy.get(password)
      .click()
      .clear()
      .type('123456');
    cy.get(enter)
      .click();
    cy.wait('@ww');
  });

  it('pick ruusian village', function () {
    cy.get('._2Hrbd')
      .contains('Компания')
      .next()
      .click();
    cy.get(companies) // выпадающий список со складами
      .contains('БитАвто')
      .click();
    cy.get('._2Hrbd')
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('Склад')
      .click();
    cy.wait(3000);
  });

  it('preorder', function () {
    cy.get('._2Hrbd')
      .contains('Добавить предзаказ')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Создать')
      .click();
    cy.get('.row') // уведомление под полем ввода имя
      .contains('Поле обязательно для')
      .should('be.visible');
    cy.get(name) // поле имя
      .type('Roman')
      .should('value', 'Roman');
    cy.get(phone) // поле телефон
      .type('79992070525')
      .should('value', '+79992070525');
    cy.get('.has-error > .form__label') // взять селектор слова "Источник" и некстом взять его поле
      .next()
      .click();
    cy.get('.app__content')
      .contains('Прямая продажа')
      .click();
    cy.get('.app__content')
      .contains('Создать')
      .click();
    cy.wait(2000);
    cy.get('.messengerUpload')
      .contains('Предзаказ №')
      .should('be.visible');
    cy.get('.messengerUpload')
      .contains('Roman')
      .should('be.visible');
    cy.get('#form-description') // поле сообщение*
      .click()
      .type('test');
  });

  it('Search and add detail', function () {
    cy.get('#quickSearch')
      .click();
    cy.get('.partsQuickSearch__content')
      .contains('Свернуть')
      .should('be.visible');
    cy.get(':nth-child(1) > .row > :nth-child(1) > [field="field"] > .form-control') //поле машина
      .click();
    cy.wait(2000);
    cy.get('.modal-body') // список марок в поле поиска
      .contains('Genesis')
      .click();
    cy.get('.modal-body')
      .contains('Выбрать')
      .click();
    cy.wait(1000);
    cy.get('#filter-used')
      .select('Нет')
    cy.get('.pull-right > .btn-success') // кнопка применить во всплывающем поиске
      .click();
    cy.wait(1000);
    cy.get('.partsQuickSearch__content')
      .contains('Добавить')
      .click({ force: true });
    cy.get('.modal-body > .panel > .panel-body')
      .contains('Добавить')
      .click();
    cy.get('.draggableWindow__close')
      .click({ force: true });
    cy.get('.messengerUpload')
      .contains('Создать заказ')
      .click();
    cy.get('.modal-footer')
      .contains('Создать')
      .click();
    cy.wait(2000);
    cy.get('.app__content')
      .contains('работе')
      .should('be.visible');
  });
});