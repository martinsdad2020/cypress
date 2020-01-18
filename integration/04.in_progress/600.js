let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let name = '#form-name'
let phone = '#form-phoneNumber'
let para = ':nth-child(15) > :nth-child(2) > a'

describe('600', function () {
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

  it('b', function(){
    cy.get('._2o1te > ._2nI8k')
    .contains('Поиск')
    .click();
  cy.get('._3xDwx > :nth-child(1) > a')
    .contains('Поиск деталей к продаже')
    .click();
  cy.get('#filter-city')
    .select('Москва');
    cy.get('.app__content')
    .contains('Применить')
    .click();
    cy.wait(3000);
    cy.get(':nth-child(1) > .collectionTable__popover-wrapper > .collectionTable__popover > span > .fa')
    .click();
    cy.get('.contextPopover')
    .contains('Добавить')
    .click();
    cy.wait(1000);
    cy.get('.modal-body')
    .contains('Создать')
    .click();
    cy.wait(1000);
    cy.get('.modal-body')
    .contains('Создать')
    .click();
    cy.wait(2000);
  });

  for (var i = 0; i < 630; i++) { //630 циклов
    it('600', function (){
        cy.get(':nth-child(1) > .collectionTable__popover-wrapper > .collectionTable__popover > span > .fa')
        .click();
        cy.get('.contextPopover')
        .contains('Добавить')
        .click();
        cy.wait(1000);
        cy.get('.modal-body')
        .contains('Создать')
        .click();
        cy.wait(3000);
        cy.get(':nth-child(1) > .collectionTable__popover-wrapper > .collectionTable__popover > span > .fa')
        .click();
        cy.get('.contextPopover')
        .contains('Добавить')
        .click();
        cy.wait(1000);
        cy.get('.modal-body')
        .contains('Создать')
        .click();
        cy.wait(3000);
     });
   };
  });