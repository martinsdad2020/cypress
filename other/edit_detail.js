let login = '#form-email'
let password = '#form-password'
let enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup'

describe('edit detail', function() {
   before('cookie', function() {
      cy.setCookie('guid-1', '%7BF297B6FE-1AA5-EB18-DA2F-5F9037E08528%7D')
      cy.server();
      cy.route('GET', 'https://api.apgrup.ru/app_dev.php/v1/*')
        .as('ww');
});

    it("visit apgrup", function() {
      cy.visit("https://apgrup.ru/parts/3657620/");

      cy.get(login)
        .click()
        .clear()
        .type('ra-nt-office@yandex.ru');
      cy.get(password)
        .click()
        .clear()
        .type('123456');
      cy.get(enter)
        .click();
      cy.wait('@ww');
      // cy.wait('@ww');
});

    it('pick ruusian village', function(){
      cy.get('.sidebar__label')
        .contains('Склад')
        .next()
        .click();
      cy.get(storages) // выпадающий список со складами
        .contains('РУССКАЯ')
        .click();
});

    it('edit', function() {
      cy.get('.app__content')
        .contains('Изменить')
        .click();
      cy.wait(2000);
      cy.get('#form-kod') // поле ориг номер
        .type('hsfdg5784')
        .should('be.visible');
      cy.get('#form-rack') // поле стеллаж
        .type('hfF5')
        .should('be.visible');
      cy.get('#form-section') // поле секция
        .type('21')
        .should('be.visible');
      // cy.get('#\32 ZtCllv2Uk')
      //   .select('ПРОЧИЕ');
    });
});
