let login = '#form-email'
let password = '#form-password'
let enter = '.ng-valid-email.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > [ng-class="{inProgress: loading}"] > .inputAutocomplete__popup'
let companies = '.sidebar__row'

describe ('kladman', function(){
	beforeEach('cookie', function(){
	cy.setCookie('guid-266', '%7B9ED77B5F-8D1B-E432-3F6B-7D0FFDC081F3%7D');
	});

	it("visit apgrup", function () {
    cy.visit("https://apgrup.ru");
    cy.get(login)
      .click()
      .type('gabaget@prmail.top');
    cy.get(password)
      .click()
      .type('123456');
    cy.get(enter)
      .click();
  });

  it('pick ruusian village', function () {
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
});