describe('Filter', function() {
  it('visit', function() {
    cy.clearCookies()
    cy.visit('https://alfadetali.ru')
  });

  it('filter', function() {
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains("Dodge")
      .click();
    cy.get('._20fvB > :nth-child(1)')
      .contains('Амортизатор задний Dodge')
      .should('be.visible');
    cy.get('.FQzr2')
      .contains('Б/У')
      .click();
    cy.wait(1500);
    cy.get('._20fvB > :nth-child(1)')
      .contains('Юбка передняя Dodge Journey c 2009 г.')
      .should('be.visible');
    cy.get('.FQzr2')
      .contains('Новые')
      .click();
    cy.wait(1500);
    cy.get('._20fvB > :nth-child(1)')
      .contains('Амортизатор задний Dodge')
      .should('be.visible');
    cy.get('.FQzr2')
      .contains('Все')
      .click();
    cy.wait(1500);
    cy.get('.dFQW3 > ._20KFe > .fqKS8')
      .click();
    cy.get('.VRfPe')
      .contains('По возрастанию цены')
      .click();
    cy.wait(1500);
    cy.get('._20fvB > :nth-child(1)')
      .contains('Переключатель отопителя Dodge Caravan IV 2001 - 2007')
      .should('be.visible');
    cy.get('.dFQW3 > ._20KFe > .fqKS8')
      .click();
    cy.get('.VRfPe')
      .contains('По убыванию цены')
      .click();
    cy.wait(1500);
    cy.get('._20fvB > :nth-child(1)')
      .contains('Двигатель Dodge Journey c 2009 г.')
      .should('be.visible');
    cy.get('.dFQW3 > ._20KFe > .fqKS8')
      .click();
    cy.get('.VRfPe')
      .contains('Сначала новые')
      .click();
    cy.wait(1500);
    cy.get('._20fvB > :nth-child(1)')
      .contains('Кронштейн радиатора Dodge Caliber 2006 - 2011')
      .should('be.visible');
    cy.get('.dFQW3 > ._20KFe > .fqKS8')
      .click();
    cy.get('.VRfPe')
      .contains('Сначала б/у')
      .click();
    cy.wait(1500);
    cy.get('._20fvB > :nth-child(1)')
      .contains('Кронштейн крепления крыла Dodge Caliber 2006 - 2011')
      .should('be.visible');
    cy.get('.dFQW3 > ._20KFe > .fqKS8')
      .click();
    cy.get('.VRfPe')
      .contains('По умолчанию')
      .click();
    cy.wait(1500);
    cy.get('._20fvB > :nth-child(1)')
      .contains('Амортизатор задний Dodge')
      .should('be.visible');
    cy.get('._2yev3 > ._20KFe > .fqKS8')
      .click();
    cy.get('.VRfPe')
      .contains('Москва')
      .click();
    cy.wait(1500);
    cy.get('._20fvB > :nth-child(1)')
      .contains('Крыло переднее левое Dodge Journey c 2009 г.')
      .should('be.visible');
    cy.get('._2yev3 > ._20KFe > .fqKS8')
      .click();
    cy.get('.VRfPe')
      .contains('Санкт-Петербург')
      .click();
    cy.wait(1500);
    cy.get('._20fvB > :nth-child(1)')
      .contains('Амортизатор задний Dodge')
      .should('be.visible');
    cy.get('._2yev3 > ._20KFe > .fqKS8')
      .click();
    cy.get('.VRfPe')
      .contains('Минск')
      .click();
    cy.wait(1500);
    cy.get('._20fvB > :nth-child(1)')
      .contains('Моторчик отопителя Dodge Nitro 2007 - 2011')
      .should('be.visible');
    // cy.get('._2yev3 > ._20KFe > .fqKS8')
    //   .click();
    cy.get('._1QftT > :nth-child(1) > ._1iTML')
      .click();
    cy.get('._1gOd')
      .contains('Артикул')
      .should('not.be.visible');
    cy.get('._3Jvj > :nth-child(2)')
      .click();
    cy.get('._20fvB > :nth-child(1)')
      .contains('Нет')
      .should('not.be.visible');
    cy.get('._3Jvj > :nth-child(3)')
      .click();
  });
});
