let login = '#form-email'
let password = '#form-password'
let enter = '.ng-valid-email.ng-valid-minlength > :nth-child(2) > .btn'

describe("status", function () {
   before('cookie', function () {
      cy.setCookie('guid-191', '%7B1A4781F3-8401-B3AD-A5E7-2594B38BAC26%7D');
   });

   it("Auth", function () {
      cy.visit("https://apgrup.ru/saleinvoices/45863/");

      cy.get(login).type('jinda.project@gmail.com');
      cy.get(password).type('123456');
      cy.get(enter).click();
      cy.wait(2000);
   });

   it('Print', function () {
      cy.get('.app__content').contains('ТТН').click();
      cy.wait(5000);
      cy.get('.app__content').contains('Товарного чека').click();
      cy.wait(5000);
      cy.get('.app__content').contains('Торг 12').click();
   });
});
