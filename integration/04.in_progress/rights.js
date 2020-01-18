let login = '#form-email'
let password = '#form-password'
let enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup'
let companies = '.sidebar__row'

describe('Rights', function() {
  before('cookie', function() {
    cy.setCookie('guid-1', '%7B67F7C782-1A21-C70D-DC3F-4C2B6CA27E6B%7D')
    cy.server();
    cy.route('GET', 'https://api.apgrup.ru/app_dev.php/v1/*')
      .as('wait');
  });

  it('visit', function() {
    cy.visit('https://apgrup.ru/');
    cy.get(login)
      .type('ra-nt-office@yandex.ru');
    cy.get(password)
      .type('654321');
    cy.get(enter)
      .click();
    cy.wait('@wait');
  });

  it('pick storage', function(){
    cy.get('.sidebar__label')
      .contains('Компания')
      .next()
      .click();
    cy.get(companies) // выпадающий список со складами
      .contains('АльфаДетали')
      .click();
    cy.get('.sidebar__label')
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('РУССКАЯ')
      .click();
    cy.wait(3000);
  });

  it('groups', function() {
    cy.get('.sidebar__menu')
      .contains('Права доступа')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Отдел Продаж')
      .click({force:true});
    cy.get('.app__content')
      .contains('ПЕТРОВ')
      .should('be.visible');
    cy.get('#accordiongroup-1489-5988-tab > .panel-title > .accordion-toggle > span.ng-binding > .clearfix > .pull-right > div.ng-scope > .ng-scope > .fa')
      .click();
  });
});
