let login = '#form-email'
let password = '#form-password'
let enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup'

describe('add new detail', function() {
   before('cookie', function() {
      cy.setCookie('guid-1', '%7BF297B6FE-1AA5-EB18-DA2F-5F9037E08528%7D')
      cy.server();
      cy.route('GET', 'https://api.apgrup.ru/app_dev.php/v1/*')
        .as('ww');
});

    it("visit apgrup", function() {
      cy.visit("https://apgrup.ru");

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
      cy.wait('@ww');
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

    it('add new detail', function() {
      cy.get('.sidebar__menu')
        .contains('Приходные накладные')
        .click();
      cy.wait(3000);
      cy.get('.app__content')
        .contains('Добавить')
        .click();
      cy.get('.app__content')
        .contains('Добавить деталь')
        .click();
      cy.get(':nth-child(1) > .form__label')
        .next()
        .click();
      cy.get('.modal-body')
        .contains('Двигатель')
        .click();
      cy.get(':nth-child(2) > .form__label')
        .next()
        .click();
      cy.get('.modal-body')
        .contains('Абсорбер')
        .click();
      cy.get('#form-quantity')
        .type('1')
        .should('value', '1');
      cy.get('.modal-body')
        .contains('Добавить деталь')
        .click();
      cy.wait(2000);
});

    it('add new car', function() {
      cy.get('#carPiсker-brand')
        .click();
      cy.get('form.ng-pristine > :nth-child(1) > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope') // список с марками
        .contains('Audi')
        .click();
      cy.get('#carPiсker-model')
        .click();
      cy.get(':nth-child(3) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup') // список с моделями
        .contains('A3')
        .click();
      cy.get('#carPiсker-generation')
        .click()
      cy.get(':nth-child(2) > .col-sm-8 > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup') // список с поколениями
        .contains('A3 [8PA] 2004-2013')
        .click();
      cy.get(':nth-child(2) > .panel-body')
        .contains('Добавить')
        .click();
      cy.get('tbody > tr.ng-scope > :nth-child(3)') // область для проверки поколения авто на видимость после добавления к детали в окне ред.
        .contains('A3 [8PA] 2004-2013')
        .should('be.visible');
});

    it('add defeсt', function() {
      cy.get('.panel.ng-binding > .panel-heading')
        .next()
        .click();
      cy.get('.ng-pristine > .row > .col-sm-8 > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup') // список с дефектами
        .contains('Дефект корпуса')
        .click();
      cy.get('.panel.ng-binding > .panel-body')
        .contains('Добавить')
        .click();
      cy.get('.panel.ng-binding > .table > tbody > tr.ng-scope > .ng-binding') // область с названием добавленного дефекта
        .contains('Дефект корпуса')
        .should('be.visible');
      cy.get('.popup__close')
        .click();
      cy.wait(2000);
});

    it('submit detail', function() {
      cy.get(':nth-child(2) > .inputBoolean > .inputBoolean__checkbox')
        .click();
      cy.get('.app__content')
        .contains('Подтвердить')
        .click();
});

    it('add price', function() {
      cy.get('#content > div')
        .contains('Абсорбер')
        .click();
      cy.wait(2000)
      cy.get('.app__content')
        .contains('Оценить')
        .click();
      cy.get('#form-purchasePrice')
        .click()
        .type('777');
      cy.get('#form-sellingPrice')
        .click()
        .type('777');
      cy.get('body > div.popup_stack.popup_stack--opened > div.modal.popup_stack__wrapper.fade.ng-scope.ng-isolate-scope.in > div > div')
        .contains('Сохранить')
        .click();
      cy.wait(2000);
      cy.get('#content > div > ui-view > div.partsView__wrapper.ng-scope')
        .contains('Открыть в магазине')
        .click();
});

    /*it('go to magaz', function() {
      cy.visit(magaz_detail)
      cy.get('#search-page > div > div._2OVU > div._444m > div.awAG')
          .contains('777')
          .should('be.visible')
      cy.get('#search-page > div > div._2OVU > div._444m > div.awAG')
          .contains('Купить')
          .should('be.visible')

    })*/

});
