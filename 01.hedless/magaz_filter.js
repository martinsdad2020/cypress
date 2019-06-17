describe("filter", function () {

     it("visit", function () {
          cy.clearCookies()
          cy.visit("https://magaz.apgrup.ru");
     });
     it('filter', function () {
          cy.get('#root').contains('Все марки').click();
          cy.get('#root').contains('Dodge').click();
          cy.get(':nth-child(1) > ._2DovX').contains('Амортизатор задний Dodge').should('be.visible');
          cy.get('.FQzr2').contains('Б/У').click();
          cy.wait(1000);
          cy.get(':nth-child(1) > ._2DovX').contains('Юбка передняя Dodge Journey c 2009 г.').should('be.visible');
          cy.get('.FQzr2').contains('Новые').click();
          cy.wait(1000);
          cy.get(':nth-child(1) > ._2DovX').contains('Амортизатор задний Dodge').should('be.visible');
          cy.get('.FQzr2').contains('Все').click();
          cy.get('.dFQW3 > ._20KFe > .fqKS8').click();
          cy.get('._1xJW6').contains('По возрастанию цены').click();
          cy.wait(1000);
          cy.get(':nth-child(1) > ._2DovX').contains('Переключатель отопителя Dodge Caravan IV 2001 - 2007').should('be.visible');
          cy.get('.dFQW3 > ._20KFe > .fqKS8').click();
          cy.get('._1xJW6').contains('По убыванию цены').click();
          cy.wait(1000);
          cy.get(':nth-child(1) > ._2DovX').contains('Двигатель Dodge Ram (DR/DH) 2001 - 2009').should('be.visible');
          cy.get('.dFQW3 > ._20KFe > .fqKS8').click();
          cy.get('._1xJW6').contains('Сначала новые').click();
          cy.wait(1000);
          cy.get(':nth-child(1) > ._2DovX').contains('Кронштейн радиатора Dodge Caliber 2006 - 2011').should('be.visible');
          cy.get('.dFQW3 > ._20KFe > .fqKS8').click();
          cy.get('._1xJW6').contains('Сначала б/у').click();
          cy.wait(1000);
          cy.get(':nth-child(1) > ._2DovX').contains('Амортизатор задний Dodge Nitro 2007 - 2011').should('be.visible');
          cy.get('.dFQW3 > ._20KFe > .fqKS8').click();
          cy.get('._1xJW6').contains('По умолчанию').click();
          cy.wait(1000);
          cy.get(':nth-child(1) > ._2DovX').contains('Амортизатор задний Dodge').should('be.visible');
          cy.get('._2yev3 > ._20KFe > .fqKS8').click();
          cy.get('._1xJW6').contains('Москва').click();
          cy.wait(1000);
          cy.get(':nth-child(1) > ._2DovX').contains('Крыло переднее правое Dodge Journey c 2009 г.').should('be.visible');
          cy.get('._2yev3 > ._20KFe > .fqKS8').click();
          cy.get('._1xJW6').contains('Санкт-Петербург').click();
          cy.wait(1000);
          cy.get(':nth-child(1) > ._2DovX').contains('Амортизатор задний Dodge').should('be.visible');
          cy.get('._2yev3 > ._20KFe > .fqKS8').click();
          cy.get('._1xJW6').contains('Минск').click();
          cy.wait(1000);
          cy.get(':nth-child(1) > ._2DovX').contains('Моторчик отопителя Dodge Nitro 2007 - 2011').should('be.visible');
          cy.get('._1QftT > :nth-child(1)').click();
          cy.get(':nth-child(1) > ._102fZ').contains('Артикул').should('not.be.visible');
          cy.get('._1QftT > :nth-child(2)').click();
          cy.get('thead > tr > :nth-child(2)').contains('Артикул').should('be.visible');
          cy.get('._1QftT > :nth-child(3)').click();
          cy.get(':nth-child(1) > :nth-child(2) > .tf_Xn > :nth-child(1)').contains('Да').should('be.visible');
     });
});
