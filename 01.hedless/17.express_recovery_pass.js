let login = ':nth-child(1) > .form-control'// поле логин
let password = ':nth-child(2) > .form-control' // поле пароль

describe('recovery pass express', function() {
   before('cookie', function() {
   });

   it('visit', function() {
     cy.clearCookies()
     cy.visit('https://express.apgrup.ru');
   });

   it('recovery', function() {
     cy.get(login)
       .type('invalid@y.r')
       .should('be.visible');
     cy.get(password)
       .type('123456')
     cy.get('.btn')
       .click();
     cy.get('#app')
       .contains('не найден')
       .should('be.visible')
     cy.get('[href="/auth/forgot"]')
       .click();
     cy.get('.form-control')
       .type('express_parole@2mailnext.com')
     cy.get('.btn')
       .click();
     cy.get('#app')
       .contains('было отправлено')
       .should('be.visible');
   });
 });
