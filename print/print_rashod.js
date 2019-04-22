var mail = '#form-email'
var pass = '#form-password'
var enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'

describe("status", function () {
   before('cookie', function () {
      cy.setCookie('guid-191', '%7B1A4781F3-8401-B3AD-A5E7-2594B38BAC26%7D');
   });

   it("Auth", function () {
      cy.visit("https://apgrup.ru/saleinvoices/45863/");

      cy.get(mail).click().clear().type('jinda.project@gmail.com');
      cy.get(pass).click().clear().type('123456');
      cy.get(enter).click();
      cy.wait(2000);
   });

   it('Print', function () {
      cy.get('.ng-binding.ng-scope > span.ng-scope > [ng-click="click(0)"]').contains('Печать ТТН').click();
      cy.get('[ng-click="click(1)"]').contains('Печать Товарного чека').click();
      cy.get('[ng-click="click(2)"]').contains('Печать Торг 12').click();
      cy.get('[ng-click="click(3)"]').contains('Печать TTH Альфадетали').click();
      cy.get('[ng-click="click(4)"]').contains('Печать Торг 12 Альфадетали').click();
   });
});
