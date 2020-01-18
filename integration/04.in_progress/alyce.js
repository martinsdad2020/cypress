let JonathanField = ':nth-child(2) > .list-group > :nth-child(1)'
let AdrienField = ':nth-child(2) > .list-group > :nth-child(2)'
let JulieField = ':nth-child(2) > .list-group > :nth-child(3)'
let basketField = ':nth-child(2) > :nth-child(2) > :nth-child(2)'
let usersField = ':nth-child(1) > .container-fluid'


describe('alyce', function () {
  it('visit', function () {
    cy.clearCookies()
    cy.visit("http://hrtest.alycedev.com/");
  });

  it('Check all objects', function () {
    cy.get('.test-task')
      .contains('Alyce - Test Task')
      .should('be.visible');
    //names
    cy.get(usersField)
      .contains('Users')
      .should('be.visible');
    cy.get(JonathanField)
      .contains('Jonathan')
      .should('be.visible');
    cy.get(AdrienField)
      .contains('Adrian')
      .should('be.visible');
    cy.get(JulieField)
      .contains('Julie')
      .should('be.visible');
    //mount
    cy.get(JonathanField)
      .contains('0')
      .should('be.visible');
    cy.get(AdrienField)
      .contains('0')
      .should('be.visible');
    cy.get(JulieField)
      .contains('0')
      .should('be.visible');
    //grab button
    cy.get(JonathanField)
      .contains('Grab apple')
      .should('be.visible');
    cy.get(AdrienField)
      .contains('Grab apple')
      .should('be.visible');
    cy.get(JulieField)
      .contains('Grab apple')
      .should('be.visible');
    //apples
    cy.get(basketField)
      .contains('Basket')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple1')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple2')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple3')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple4')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple5')
      .should('be.visible');
  });

  it('Grab apples for Jonathan', function () {
    cy.get(JonathanField)
      .contains('Grab apple')
      .click();
    cy.get(JonathanField)
      .contains('1')
      .should('be.visible');
    cy.get(JonathanField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('Basket cant give more than one apple per 5 sec')
      .should('be.visible');
    cy.get(JonathanField)
      .contains('1')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple1')
      .should('not.be.visible');
    cy.wait(6000);
    cy.get(JonathanField)
      .contains('Grab apple')
      .click();
    cy.get(JonathanField)
      .contains('2')
      .should('be.visible');
    cy.get(JonathanField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('Basket cant give more than one apple per 5 sec')
      .should('be.visible');
    cy.get(JonathanField)
      .contains('2')
    cy.get(basketField)
      .contains('Apple3')
      .should('not.be.visible');
    cy.wait(6000);
    cy.get(JonathanField)
      .contains('Grab apple')
      .click();
    cy.get(JonathanField)
      .contains('3')
      .should('be.visible');
    cy.get(JonathanField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('Basket cant give more than one apple per 5 sec')
      .should('be.visible');
    cy.get(JonathanField)
      .contains('3')
    cy.get(basketField)
      .contains('Apple5')
      .should('not.be.visible');
    cy.wait(6000);
    cy.get(JonathanField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('You cant have apples with both odd and even ids, try again')
      .should('be.visible');
    cy.get(JonathanField)
      .contains('3')
      .should('be.visible');
    cy.get(JonathanField)
      .contains('3')
    cy.get(basketField)
      .contains('Apple2')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple4')
      .should('be.visible');
  });

  it('Grab apples for Adrian', function () {
    cy.get(AdrienField)
      .contains('Grab apple')
      .click();
    cy.get(AdrienField)
      .contains('1')
      .should('be.visible');
    cy.get(AdrienField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('Basket cant give more than one apple per 5 sec')
      .should('be.visible');
    cy.get(AdrienField)
      .contains('1')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple2')
      .should('not.be.visible');
    cy.wait(6000);
    cy.get(AdrienField)
      .contains('Grab apple')
      .click();
    cy.get(AdrienField)
      .contains('2')
      .should('be.visible');
    cy.get(AdrienField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('Basket cant give more than one apple per 5 sec')
      .should('be.visible');
    cy.get(AdrienField)
      .contains('2')
    cy.get(basketField)
      .contains('Apple4')
      .should('not.be.visible');
  });

  it('Grab apples for Julie', function () {
    cy.get(JulieField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('Basket cant give more than one apple per 5 sec')
      .should('be.visible');
    cy.wait(6000);
    cy.get(JulieField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('Apple basket is empty')
      .should('be.visible');
    cy.get('.list-group > :nth-child(3)')
      .contains('0')
      .should('be.visible');
  });

  it('Basket is empty', function () {
    cy.get(basketField)
      .contains('Apple1')
      .should('not.be.visible')
    cy.get(basketField)
      .contains('Apple2')
      .should('not.be.visible')
    cy.get(basketField)
      .contains('Apple3')
      .should('not.be.visible')
    cy.get(basketField)
      .contains('Apple4')
      .should('not.be.visible')
    cy.get(basketField)
      .contains('Apple5')
      .should('not.be.visible')
  });

  it('Delete apples', function () {
    //delete apples from user table
    cy.get('.test-task')
      .contains('Free Apples')
      .click();
    cy.get(usersField)
      .contains('Apple1')
      .should('not.be.visible');
    cy.get(usersField)
      .contains('Apple2')
      .should('not.be.visible');
    cy.get(usersField)
      .contains('Apple3')
      .should('not.be.visible');
    cy.get(usersField)
      .contains('Apple4')
      .should('not.be.visible');
    cy.get(usersField)
      .contains('Apple5')
      .should('not.be.visible');
    //apples back to basket
    cy.get(basketField)
      .contains('Apple1')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple2')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple3')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple4')
      .should('be.visible');
    cy.get(basketField)
      .contains('Apple5')
      .should('be.visible');
    cy.wait(6000);
  });

  it('Take turns', function(){
    //apple for Jonathan
    cy.get(JonathanField)
      .contains('Grab apple')
      .click();
    cy.get(JonathanField)
      .contains('Apple1')
      .should('be.visible');
    //apple for Adrien
    cy.get(AdrienField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('Basket cant give more than one apple per 5 sec')
      .should('be.visible');
    cy.wait(6000);
    cy.get(AdrienField)
    .contains('Grab apple')
    .click();
    cy.get(AdrienField)
      .contains('Apple2')
      .should('be.visible');
        
    cy.get(JulieField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('Basket cant give more than one apple per 5 sec')
      .should('be.visible');
    cy.wait(6000);
    cy.get(JulieField)
    .contains('Grab apple')
    .click();
    cy.get(JulieField)
      .contains('Apple3')
      .should('be.visible');

    cy.get(JonathanField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('Basket cant give more than one apple per 5 sec')
      .should('be.visible');
    cy.wait(6000);
    cy.get(JonathanField)
    .contains('Grab apple')
    .click();
    cy.get(JonathanField)
      .contains('Apple5')
      .should('be.visible');

      cy.get(AdrienField)
      .contains('Grab apple')
      .click();
    cy.get('.alert')
      .contains('Basket cant give more than one apple per 5 sec')
      .should('be.visible');
    cy.wait(6000);
    cy.get(AdrienField)
    .contains('Grab apple')
    .click();
    cy.get(AdrienField)
      .contains('Apple4')
      .should('be.visible');
  });
});