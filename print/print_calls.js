var mail = '#form-email'
var pass = '#form-password'
var enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'

describe("calls", function() {
   before('cookie', function() {
      cy.setCookie('guid-191', '%7B1A4781F3-8401-B3AD-A5E7-2594B38BAC26%7D');
   });

   it("Auth", function() {
      cy.visit("https://apgrup.ru/orders/56156/");

      cy.get(mail).click().type('jinda.project@gmail.com');
      cy.get(pass).click().type('123456');
      cy.get(enter).click();
      cy.wait(2000);
   });

   it('calls', function() {
   	  cy.get('.nav').contains('Звонки').click();
      cy.get('.tab-pane.active > .panel.ng-scope').contains('+79819037415').should('be.visible');
      cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .panel-footer').contains('Печать').click();
      cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper').contains('+79819037415').should('be.visible');
      cy.get('[style="padding-top: 40px;"]').contains('Закрыть').click();
   });
 });
