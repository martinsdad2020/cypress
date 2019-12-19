let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let name = '.active > .panel > .panel-body > form > :nth-child(1) > ._3uesc > .form-control'
let phone = '.active > .panel > .panel-body > form > :nth-child(2) > ._3uesc > .form-control'
let para = ':nth-child(15) > :nth-child(2) > a'

describe('Create an order', function () {
  beforeEach('cookie', function () {
    cy.setCookie('guid-216', '{6524511F-44F9-12C7-1FAC-54D62F5374CC}')
    cy.server();
    cy.route('GET', 'https://crm.api.apgrup.ru/v1/*')
      .as('ww');
  });

  it('visit apgrup', function () {
    cy.visit("https://apgrup.ru/");

    cy.get(login)
      .click()
      .clear()
      .type('asp.manager@alfa.ru');
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
      .contains('АСП')
      .click();
    cy.get('._2Hrbd')
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('склад АСП')
      .click();
    cy.get('._2JR3u')
      .contains('АСП')
      .should('be.visible');
  });

  it('preorder', function () {
    cy.get('._2Hrbd')
      .contains('Добавить предзаказ')
      .click();
    cy.wait(1000);
    cy.get('.E42Z0')
      .contains('Создать')
      .click();
    cy.get('.E42Z0') // уведомление под полем ввода имя
      .contains('Обязательное поле')
      .should('be.visible');
    cy.get(name) // поле имя
      .type('Roman')
      .should('value', 'Roman');
    cy.get(phone) // поле телефон
      .type('+79992070525')
      .should('value', '+79992070525');
    cy.get('._3uesc > .css-2b097c-container > .css-1tehwa7-control > .css-1hwfws3')
      .type('Прямая продажа{enter}');
    cy.get('.E42Z0')
      .contains('Создать')
      .click();
    cy.wait(1000);
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
    cy.wait(1000);
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
    cy.wait(1000);
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
    cy.wait(1000);
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