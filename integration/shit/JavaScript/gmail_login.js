describe('gmail', function(){
    it('visit', function(){
        cy.clearCookies()
        cy.visit('https://www.gmail.com')
    });
    it('empty field', function(){
     cy.get('#viewport')
        .contains('Войти')
        .click();
        
    });

});