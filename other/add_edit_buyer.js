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
// ТЕСТ ТЕСТ ТЕСТ
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

  it('add buyer', function() {
    cy.get('.sidebar__menu')
      .contains('Покупатели')
      .click();
    cy.wait(2000);
    cy.get('.app__content')
      .contains('Добавить')
      .click();
    cy.get('#form-name')
      .type('Василий Теркин')
      .should('be.visible');
    cy.get('#form-fullname')
      .type('полное имя')
      .should('be.visible');
    cy.get('#form-innPhys')
      .type('123456789012')
      .should('value', '123456789012');
    cy.get('#form-address')
      .type('Ленина 12')
      .should('be.visible');
    cy.get('#form-addressFact')
      .type('Помойка')
      .should('be.visible');
    cy.get('#form-email')
      .type('random@boo.ru')
      .should('be.visible');
    cy.get('#form-comment')
      .type('коммент')
      .should('be.visible');
    cy.get('#form-phoneNumber')
      .type('70000003212')
      .should('be.visible');
    cy.get('#form-passport')
      .type('нет его')
      .should('be.visible');
    cy.get(':nth-child(11) > .form__label') // терминал
      .next()
      .click();
    cy.get(':nth-child(11) > .form__input > [name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
      .contains('Адлер')
      .click();
    cy.get(':nth-child(12) > .form__label') // город
      .next()
      .click();
    cy.get(':nth-child(12) > .form__input > .row > :nth-child(1) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
      .contains('Россия')
      .click({force:true});
    cy.get(':nth-child(12) > .form__input > .row > :nth-child(1) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
      .next()
      .next()
      .click();
    cy.get(':nth-child(12) > .form__input > .row > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
      .contains('Москва')
      .click({force:true});
  });
});
