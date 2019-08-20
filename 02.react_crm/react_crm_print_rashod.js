let login = '#form-email'
let password = '#form-password'
let enter = '.ng-valid-email.ng-valid-minlength > :nth-child(2) > .btn'
let check = '.tab-pane.active > [template="template"] > [filter-fields="$parent.undefined"] > .collection__wrapper > .collectionTable > .collectionTable__wrapper'
describe("status", function () {
   before('cookie', function () {
      cy.setCookie('guid-191', '{5BA16FE0-DB4C-B041-4D74-7B3CDD9BC1CF}');
   });

   it("Auth", function () {
      cy.visit("https://apgrup.ru/saleinvoices/52616/");

      cy.get(login).type('jinda.project@gmail.com');
      cy.get(password).type('123456');
      cy.get(enter).click();
      cy.wait(2000);
   });

   it('Print', function () {
      cy.get('.app__content').contains('ТТН').click();
      cy.wait(3000);
      cy.get('.app__content').contains('Товарного чека').click();
      cy.wait(3000);
      cy.get('.app__content').contains('Торг 12').click();
      cy.wait(4000);
      cy.get(':nth-child(12) > :nth-child(2)').contains('62549').click();
      cy.get('.app__content').contains('Счета').click();
      cy.wait(2000);
      cy.get(check).contains('62549-1').click();
      cy.get('.app__content').contains('Печать Счета').click();
      cy.wait(4000);
      cy.get('.app__content').contains('Стекло').click();
      cy.get('.app__content').contains('Печать штрихкода').click();
   });
});