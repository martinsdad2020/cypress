let mail = '#form-email'
let pass = '#form-password'
let enter = '.ng-valid-email.ng-valid-minlength > :nth-child(2) > .btn'

describe("status", function() {
   before('cookie', function() {
      cy.setCookie('guid-1', '%7B153B24F9-C1FC-D813-A0B7-038BD34C6733%7D');
   });

   it("Auth", function() {
      cy.visit("https://alfa-mt.ru/saleinvoices/46425/");

      cy.get(mail).click().clear().type('ra-nt-office@yandex.ru');
      cy.get(pass).click().clear().type('654321');
      cy.get(enter).click();
      cy.wait(2000);
   });

   it('Print', function() {
   	  cy.get('.app__content').contains('Печать ТТН').click();
   	  cy.get('.app__content').contains('Печать Товарного чека').click();
   	  cy.get('.app__content').contains('Печать Торг 12').click();
   });
});
