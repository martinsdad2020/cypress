describe('alyce', function () {
  before('cookie', function () {
  });
  it('visit', function () {
        cy.clearCookies()
        cy.visit("http://hrtest.alycedev.com/");
    });

    it('Check all objects', function() {
      cy.get('.test-task')
        .contains('Alyce - Test Task')
        .should('be.visible');
        //names
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
        //mount
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('0')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(2)')
        .contains('0')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(3)')
        .contains('0')
        .should('be.visible');
        //grab button
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(2)')
        .contains('Grab apple')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(3)')
        .contains('Grab apple')
        .should('be.visible');
        //apples
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)')
        .contains('Basket')
        .should('be.visible');
      cy.get('div > .list-group > :nth-child(1)')
        .contains('Apple1')
        .should('be.visible');
      cy.get('div > .list-group > :nth-child(2)')
        .contains('Apple2')
        .should('be.visible');
      cy.get('div > .list-group > :nth-child(3)')
        .contains('Apple3')
        .should('be.visible');
      cy.get('div > .list-group > :nth-child(4)')
        .contains('Apple4')
        .should('be.visible');
      cy.get('div > .list-group > :nth-child(5)')
        .contains('Apple5')
        .should('be.visible');
    }); 

    it('Grab apple for Jonathan', function(){
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('1')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get('.alert')
        .contains('Basket cant give more than one apple per 5 sec')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('1')
        .should('be.visible');
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)')
        .contains('Apple1')
        .should('not.be.visible');
      cy.wait(6000);
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('2')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get('.alert')
        .contains('Basket cant give more than one apple per 5 sec')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('2')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)')
        .contains('Apple3')
        .should('not.be.visible');
        cy.wait(6000);
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('3')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get('.alert')
        .contains('Basket cant give more than one apple per 5 sec')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('3')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)')
        .contains('Apple5')
        .should('not.be.visible');
      cy.wait(6000);
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get('.alert')
        .contains('You cant have apples with both odd and even ids, try again')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('3')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('3')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)')
        .contains('Apple2')
        .should('be.visible');
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)')
        .contains('Apple4')
        .should('be.visible');
    });

    it('Grab apple for Adrian', function(){
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('1')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get('.alert')
        .contains('Basket cant give more than one apple per 5 sec')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('1')
        .should('be.visible');
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)')
        .contains('Apple1')
        .should('not.be.visible');
      cy.wait(6000);
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('2')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get('.alert')
        .contains('Basket cant give more than one apple per 5 sec')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('2')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)')
        .contains('Apple3')
        .should('not.be.visible');
        cy.wait(6000);
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('3')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get('.alert')
        .contains('Basket cant give more than one apple per 5 sec')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('3')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)')
        .contains('Apple5')
        .should('not.be.visible');
      cy.wait(6000);
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('Grab apple')
        .click();
      cy.get('.alert')
        .contains('You cant have apples with both odd and even ids, try again')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('3')
        .should('be.visible');
      cy.get(':nth-child(2) > .list-group > :nth-child(1)')
        .contains('3')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)')
        .contains('Apple2')
        .should('be.visible');
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)')
        .contains('Apple4')
        .should('be.visible');
    });
});