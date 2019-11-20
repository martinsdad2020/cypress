describe('alyce', function () {
    beforeEach('cookie', function () {
    });
  
    it('visit', function () {
      cy.visit("http://hrtest.alycedev.com/");
    });

    it('Check all objects', function() {
      cy.get('.test-task')
        .contains('Alyce - Test Task')
        .should('be.visible');
      cy.get(':nth-child(1) > .container-fluid')
        .contains('Users')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Jonathan')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(2)')
        .contains('Adrian')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(3)')
        .contains('Julie')
        .should('be.visible');
    }); 
});