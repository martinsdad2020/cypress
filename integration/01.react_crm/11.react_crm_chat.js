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
    cy.wait(1000);
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
      .should('not.be.visible');
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