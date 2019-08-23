let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let side = '._2Hrbd'
let check = '.tab-pane.active > [template="template"] > [filter-fields="$parent.undefined"] > .collection__wrapper > .collectionTable > .collectionTable__wrapper'

describe("status", function () {
   before('cookie', function () {
      cy.setCookie('guid-191', '{5BA16FE0-DB4C-B041-4D74-7B3CDD9BC1CF}');
   });

   it("Auth", function () {
      cy.visit("https://apgrup.ru/saleinvoices/52612");
      cy.get(login).type('jinda.project@gmail.com');
      cy.get(password).type('123456');
      cy.get(enter).click();
      cy.wait(2000);
   });
  
   it('pick ruusian village', function () {
      cy.get(side)
        .contains('Компания')
        .next()
        .click();
      cy.get(companies) // выпадающий список со складами
        .contains('АльфаДетали')
        .click();
      cy.get(side)
        .contains('Склад')
        .next()
        .click();
      cy.get(storages) // выпадающий список со складами
        .contains('РУССКАЯ')
        .click();
      cy.wait(1000);
    });

   it('Print', function () {
      cy.get(side).contains('Закрытые').click();
      cy.wait(2000);
      cy.get('input').eq(3).type('62574');
      cy.get('button').contains('Применить').click();
      cy.wait(3000);
      cy.get('.collectionTable__container').contains('62574').click();
      cy.get('.app__content').contains('Расходные накладные').click();
      cy.get('.app__content').contains('34575').click();
      cy.wait(2000);
      cy.get('.app__content').contains('ТТН').click();
      cy.wait(3000);
      cy.get('.app__content').contains('Товарного чека').click();
      cy.wait(3000);
      cy.get('.app__content').contains('Торг 12').click();
      cy.wait(4000);
      cy.get(':nth-child(12) > :nth-child(2)').contains('62574').click();
      cy.wait(2000);
      cy.get('.app__content').contains('Счета').click();
      cy.wait(2000);
      cy.get(check).contains('62574-1').click();
      cy.wait(2000);
      cy.get('.app__content').contains('Печать Счета').click();
      cy.wait(4000);
      cy.get('.app__content').contains('Башмак').click();
      cy.wait(2000);
      cy.get('.app__content').contains('Печать штрихкода').click();
   });
});