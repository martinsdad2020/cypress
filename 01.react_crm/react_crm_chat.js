let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let name = '#form-name'
let phone = '#form-phoneNumber'
let para = ':nth-child(15) > :nth-child(2) > a'

describe('Create an order', function () {
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
      .contains('АльфаДетали')
      .click();
    cy.get('._2Hrbd')
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('РУССКАЯ')
      .click();
    cy.wait(1000);
  });

  it('tow work', function () {
    cy.get('.btn-info')
      .contains('Мои задачи')
      .click();
    cy.get('.modal-body')
      .contains('работу')
      .click();
    cy.wait(1000);
    cy.get('.messengerUpload')
      .contains('Нет прав')
      .should('not.be.visible');
    cy.get('.messengerUpload')
      .contains('Взять в работу')
      .click();
    cy.get('.modal-footer')
      .contains('Взять в работу')
      .click(); 
    cy.wait(1000);
    cy.get('.messengerUpload')
      .contains('Нет прав')
      .should('not.be.visible');
    cy.get('.messengerUpload')
      .contains('Сохранить')
      .should('be.visible');
    cy.get('.messengerUpload')
      .contains('Отменить')
      .should('be.visible');
    cy.get('.messengerUpload')
      .contains('Сменить')
      .should('be.visible');
    cy.get('.msg-11Abv')
      .type('Комментарий');
    cy.get('.messengerUpload')
      .contains('Отправить')
      .click();
    cy.get('.messenger__chat')
      .contains('Комментарий')
      .should('be.visible');
    // cy.get('._2Hrbd')
    //   .contains('Добавить предзаказ')
    //   .click();
    // cy.wait(1000);
    // cy.get('.app__content')
    //   .contains('Создать')
    //   .click();
    // cy.get('.row') // уведомление под полем ввода имя
    //   .contains('Поле обязательно для')
    //   .should('be.visible');
    // cy.get(name) // поле имя
    //   .type('Roman')
    //   .should('value', 'Roman');
    // cy.get(phone) // поле телефон
    //   .type('79992070525')
    //   .should('value', '+79992070525');
    // cy.get('.has-error > .form__label') // взять селектор слова "Источник" и некстом взять его поле
    //   .next()
    //   .click();
    // cy.get('.app__content') // выбрать на станице "Другое" и кликнуть
    //   .contains('Другое')
    //   .should('not.be.visible')
    // cy.get('.app__content')
    //   .contains('Колл-центр')
    //   .should('not.be.visible')
    // cy.get('.app__content')
    //   .contains('Прямая продажа')
    //   .click();
    // cy.get('.app__content')
    //   .contains('Создать')
    //   .click();
    // cy.wait(2000);
    // cy.get('.messengerUpload')
    //   .contains('Предзаказ №')
    //   .should('be.visible');
    // cy.get('.messengerUpload')
    //   .contains('Roman')
    //   .should('be.visible');
    // cy.get('#form-description') // поле сообщение*
    //   .click()
    //   .type('test');
  });
});