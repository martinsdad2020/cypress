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
    cy.setCookie('guid-191', '{9470534C-70C9-5366-B92F-AFE2007F0B1A}')
    cy.server();
    cy.route('GET', 'https://crm.api.apgrup.ru/v1/*')
      .as('ww');
  });

  it('visit apgrup', function () {
    cy.visit("https://react.apgrup.ru/");

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
    cy.wait(3000);
  });

  it('preorder', function () {
    cy.get('._2Hrbd')
      .contains('Добавить предзаказ')
      .click({ force: true });
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
    cy.get('.app__content') // выбрать на станице "Другое" и кликнуть
      .contains('Другое')
      .should('not.be.visible')
    cy.get('.app__content')
      .contains('Колл-центр')
      .should('not.be.visible')
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
    cy.get('.modal-body') // список марок в поле поиска
      .contains('BMW')
      .should('be.visible')
      .click();
    cy.get('.modal-body')
      .contains('2 Active Tourer')
      .should('be.visible')
      .click();
    cy.get('.modal-body')
      .contains('Выбрать')
      .click();
    cy.get('[style="margin-bottom: 20px"] > :nth-child(1) > .row > :nth-child(2) > [field="field"] > .form-control') // поле наименование
      .click({ force: true });
    cy.get('.modal-body')
      .contains('Двигатель')
      .click({ force: true });
    cy.get('.modal-body')
      .contains('Башмак')
      .click({ force: true });
    cy.get('.pull-right > .btn-success') // кнопка применить во всплывающем поиске
      .click({ force: true });
    cy.wait(2000);
    cy.get('.partsQuickSearch__content')
      .contains('Добавить')
      .click({ force: true });
    cy.get('.modal-body > .panel > .panel-body')
      .contains('Добавить')
      .click();
    cy.get('.draggableWindow__close')
      .click({ force: true });
    cy.get('.app__content')
      .contains('BMW')
      .should('be.visible');
    cy.get('.messengerUpload')
      .contains('Создать заказ')
      .click();
    cy.get('.modal-footer')
      .contains('Создать')
      .click();
    cy.wait(4000);
    cy.get('.app__content')
      .contains('работе')
      .should('be.visible');
    cy.get('.app__content')
      .contains('Отказ')
      .click();
    cy.get(':nth-child(1) > .form__label')
      .next()
      .click();
    cy.get('[name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup')
      .contains('Дорого')
      .click();
    cy.get('.popup__inner')
      .contains('Сохранить')
      .click();
    cy.get('.app__content')
      .contains('Предварительно отменен')
      .should('be.visible');
  });
});
