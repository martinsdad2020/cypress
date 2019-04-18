describe('Filter', function() {
  it('visit', function() {
    cy.clearCookies()
    cy.visit('https://alfadetali.ru')
  });

  it('filter', function() {
    cy.get('._18TB')
      .contains('Все марки')
      .click();
    cy.get('._18TB')
      .contains("Dodge")
      .click();
    cy.get('._1R8- > :nth-child(1)')
      .contains('Амортизатор задний Dodge')
      .should('be.visible');
    cy.get('.hmqi')
      .contains('Б/У')
      .click();
    cy.get('._444m')
      .contains('Юбка передняя Dodge Journey c 2009 г.')
      .should('be.visible');
    cy.get('.hmqi')
      .contains('Новые')
      .click();
    cy.get('._444m')
      .contains('Амортизатор задний Dodge')
      .should('be.visible');
    cy.get('.hmqi')
      .contains('Все')
      .click();
    cy.get('.En5g > .NXKZ > ._3hEL')
      .click();
    cy.get('._3Sgn')
      .contains('По возрастанию цены')
      .click();
    cy.get('._444m')
      .contains('Переключатель отопителя Dodge Caravan IV 2001 - 2007')
      .should('be.visible');
    cy.get('.En5g > .NXKZ > ._3hEL')
      .click();
    cy.get('._3Sgn')
      .contains('По убыванию цены')
      .click();
    cy.get('._444m')
      .contains('Двигатель Dodge Ram (DR/DH) 2001 - 2009')
      .should('be.visible');
    cy.get('.En5g > .NXKZ > ._3hEL')
      .click();
    cy.get('._3Sgn')
      .contains('Сначала новые')
      .click();
    cy.get('._444m')
      .contains('Кронштейн радиатора Dodge Caliber 2006 - 2011')
      .should('be.visible');
    cy.get('.En5g > .NXKZ > ._3hEL')
      .click();
    cy.get('._3Sgn')
      .contains('Сначала б/у')
      .click();
    cy.get('._444m')
      .contains('Бампер передний Dodge Journey c 2009 г.')
      .should('be.visible');
    cy.get('.En5g > .NXKZ > ._3hEL')
      .click();
    cy.get('._3Sgn')
      .contains('По умолчанию')
      .click();
    cy.get('._444m')
      .contains('Амортизатор задний Dodge')
      .should('be.visible');
    cy.get('._2dgX > .NXKZ > ._3hEL')
      .click();
    cy.get('._3Sgn')
      .contains('Москва')
      .click();
    cy.get('._444m')
      .contains('Крыло переднее левое Dodge Journey c 2009 г.')
      .should('be.visible');
    cy.get('._2dgX > .NXKZ > ._3hEL')
      .click();
    cy.get('._3Sgn')
      .contains('Санкт-Петербург')
      .click();
    cy.get('._444m')
      .contains('Амортизатор задний Dodge')
      .should('be.visible');
    cy.get('._2dgX > .NXKZ > ._3hEL')
      .click();
    cy.get('._3Sgn')
      .contains('Минск')
      .click();
    cy.get('._444m')
      .contains('Моторчик отопителя Dodge Nitro 2007 - 2011')
      .should('be.visible');
    cy.get('._2dgX > .NXKZ > ._3hEL')
      .click();
    cy.get('._3Jvj > :nth-child(1) > .tysP')
      .click();
    cy.get('._1gOd')
      .contains('Артикул')
      .should('not.be.visible');
    cy.get('._3Jvj > :nth-child(2)')
      .click();
    cy.get('._444m')
      .contains('Нет')
      .should('not.be.visible');
    cy.get('._3Jvj > :nth-child(3)')
      .click();
  });
});
