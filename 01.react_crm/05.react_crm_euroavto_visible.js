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
    cy.setCookie('guid-1', '{2DFA0721-8FE7-6884-E7FB-E9DF09738CFF}')
    cy.server();
    cy.route('GET', 'https://crm.api.apgrup.ru/v1/*')
      .as('ww');
  });

  it('visit apgrup', function () {
    cy.visit("https://apgrup.ru/");

    cy.get(login)
      .click()
      .clear()
      .type('ra-nt-office@yandex.ru');
    cy.get(password)
      .click()
      .clear()
      .type('654321');
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
    cy.get(':nth-child(3) > .form__label') // взять селектор слова "Источник" и некстом взять его поле
      .next()
      .click();
    cy.get('.app__content') // выбрать на станице "Другое" и кликнуть
      .contains('Другое')
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
      .contains('Audi')
      .should('be.visible')
      .click();
    cy.get('.modal-body')
      .contains('A8')
      .should('be.visible')
      .click();
    cy.get('.modal-body')
      .contains('A8 [D4] 2010 - 2017')
      .should('be.visible')
      .click();
    cy.get('[style="margin-bottom: 20px"] > :nth-child(1) > .row > :nth-child(2) > [field="field"] > .form-control') // поле наименование
      .click({ force: true });
    cy.get('.modal-body')
      .contains('Система охлаждения')
      .click({ force: true });
    cy.get('.modal-body')
      .contains('Патрубок')
      .click({ force: true });
    cy.get('.pull-right > .btn-success') // кнопка применить во всплывающем поиске
      .click({ force: true });
    cy.wait(2000);
    cy.get('.partsQuickSearch__content')
      .contains('Добавить')
      .click({ force: true });
    cy.get('.draggableWindow__close')
      .click({ force: true });
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Патрубок')
      .should('be.visible');
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
      .contains('Подтвердить')
      .click();
    cy.get('.modal-footer')
      .contains('Отменить')
      .click();
    cy.get('.app__content')
      .contains('Закрыт')
      .should('be.visible');
  });
});
