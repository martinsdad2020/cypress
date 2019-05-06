let login = '#form-email'
let password = '#form-password'
let enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup'
let companies = '.sidebar__menu > :nth-child(1) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup'

describe('edit detail', function() {
   before('cookie', function() {
      cy.setCookie('guid-1', '%7B67F7C782-1A21-C70D-DC3F-4C2B6CA27E6B%7D')
      cy.server();
      cy.route('GET', 'https://api.apgrup.ru/app_dev.php/v1/*')
        .as('ww');
});

    it("visit apgrup", function() {
      cy.visit("https://apgrup.ru/parts/708/");

      cy.get(login)
        .click()
        .type('ra-nt-office@yandex.ru');
      cy.get(password)
        .click()
        .type('654321');
      cy.get(enter)
        .click();
      cy.wait('@ww');
});

    it('pick ruusian village', function(){
      cy.get('.sidebar__label')
        .contains('Компания')
        .next()
        .click();
      cy.get(companies) // выпадающий список со складами
        .contains('Альфа')
        .click({force:true});
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
      cy.wait(3000);
      cy.get('#form-kod') // поле ориг номер
        .clear()
        .type('hsfdg5784')
        .should('be.visible');
      cy.get('#form-rack') // поле стеллаж
        .clear()
        .type('hfF5')
        .should('be.visible');
      cy.get('#form-section') // поле секция
        .clear()
        .type('21')
        .should('be.visible');
      // cy.get(':nth-child(10) > .form__label') // поставщик
      //   .next()
      //   .click();
      // cy.get(':nth-child(10) > .form__input > [name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
      //   .contains('ВОСТОК')
      //   .click();
      cy.get(':nth-child(10) > .form__label') // производитель
        .next()
        .click();
      cy.get(':nth-child(10) > .form__input > [name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
        .contains('AMC')
        .click();
      cy.get('#form-defects')
        .clear()
        .type('дефекты')
        .should('be.visible');
      cy.get('#form-notes')
        .clear()
        .type('Примечание')
        .should('be.visible');
      cy.get('#form-comment')
        .clear()
        .type('коммент')
        .should('be.visible');
      cy.get(':nth-child(14) > .form__label')  // цвет
        .next()
        .click();
      cy.get(':nth-child(14) > .form__input > [name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
        .contains('Желтый')
        .click();
        cy.get(':nth-child(15) > .form__label') // рейтинг
        .next()
        .click();
      cy.get(':nth-child(15) > .form__input > [name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
        .contains('3')
        .click();
      cy.get('#form-gtd')
        .clear()
        .type('GDT1')
        .should('be.visible');
      cy.get(':nth-child(17) > .form__label') // страна
        .next()
        .click();
      cy.get(':nth-child(17) > .form__input > [name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
        .contains('Россия')
        .click();
      cy.get('.modal-body')
        .contains('Сохранить')
        .click();
      cy.wait(2000);
      cy.get('.modal-body')
        .contains('успешно сохранена')
        .should('be.visible');
    });

    it('models', function() {
      cy.get('#carPiсker-brand')
        .click();
      cy.get('form.ng-pristine > :nth-child(1) > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope')
        .contains('Aston Martin')
        .click();
      cy.get('#carPiсker-model')
        .click();
      cy.get(':nth-child(3) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
        .contains('DB9')
        .click();
      cy.get('#carPiсker-generation')
        .click();
      cy.get(':nth-child(2) > .col-sm-8 > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
        .contains('DB9 I 2003 - н.в.')
        .click();
      cy.get(':nth-child(2) > .col-sm-4 > .btn')
        .click();
      cy.wait(1000);
      cy.get('tbody > :nth-child(2) > :nth-child(3)')
        .contains('DB9 I 2003 - н.в.')
        .should('be.visible');
      cy.get(':nth-child(2) > .table > tbody > :nth-child(2) > .w1 > .ng-scope > .glyphicon') // удалить авто
        .click();
      cy.get('.panel.ng-binding > .table > tbody > tr.ng-scope > .w1 > .ng-scope > .glyphicon')
        .click();
      cy.get('.panel.ng-binding > .panel-heading')
        .next()
        .click();
      cy.get('.ng-pristine > .row > .col-sm-8 > .inputAutocomplete > .inputPopup > .inputPopup__popup')
        .contains('На запчасти')
        .click();
      cy.get('.panel.ng-binding > .panel-body')
        .contains('Добавить')
        .click();
      cy.wait(3000);
      cy.get('.modal-body')
        .contains('На запчасти')
        .should('be.visible');
      cy.get('.panel.ng-binding > .table > tbody > [style=""] > .w1 > .ng-scope > .glyphicon')
        .click();
      cy.wait(7000)
      cy.get('.panel.ng-binding')
        .contains('На запчасти')
        .should('not.be.visible');
      cy.get('.popup__close')
        .click();
    });
  });
