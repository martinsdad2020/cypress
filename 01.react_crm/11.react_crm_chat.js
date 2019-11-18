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
    cy.setCookie('guid-191', '{763D74A3-D668-2BEE-96EA-4B7DAA6EE986}')
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
    cy.wait(1000);
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

  it('to work', function () {
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
    cy.get('.messengerUpload')
      .contains('Отменить')
      .click();
    cy.get('#form-cancelationReason')
      .type('нет');
    cy.get('.modal-body')
      .contains('Сохранить')
      .click();
    cy.get('.messengerUpload')
      .contains('Отменено')
      .should('be.visible');
  });
});