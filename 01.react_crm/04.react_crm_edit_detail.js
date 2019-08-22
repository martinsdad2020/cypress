let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'

describe('edit detail', function () {
    beforeEach('cookie', function () {
      cy.setCookie('guid-1', '{2DFA0721-8FE7-6884-E7FB-E9DF09738CFF}')
      cy.server();
      cy.route('GET', 'https://crm.api.apgrup.ru/v1/*')
        .as('ww');
    });
  
    it("visit apgrup", function () {
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
  
    it('pick ruusian village', function () {
      cy.get('._2Hrbd')
        .contains('Компания')
        .next()
        .click();
      cy.get(companies) // выпадающий список со складами
        .contains('АльфаДетали')
        .click();
      cy.get('._2Hrbd')
        .contains('Склад')
        .next()
        .click();
      cy.get(storages) // выпадающий список со складами
        .contains('РУССКАЯ')
        .click();
      cy.wait(3000);
    });

  it('edit', function () {
    cy.get('._2Hrbd')
      .contains('На складе')
      .click();
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .contains('а')
      .click();
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
    cy.get(':nth-child(10) > .form__label') // производитель
      .next()
      .click();
    cy.get(':nth-child(10) > .form__input > [name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > div > .inputAutocomplete__popup')
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
    cy.get(':nth-child(14) > .form__input > [name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > div > .inputAutocomplete__popup')
      .contains('Желтый')
      .click();
    cy.get(':nth-child(15) > .form__label') // рейтинг
      .next()
      .click();
    cy.get(':nth-child(15) > .form__input > [name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > div > .inputAutocomplete__popup')
      .contains('3')
      .click();
    cy.get('#form-gtd')
      .clear()
      .type('GDT1')
      .should('be.visible');
    cy.get(':nth-child(17) > .form__label') // страна
      .next()
      .click();
    cy.get(':nth-child(17) > .form__input > [name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > div > .inputAutocomplete__popup')
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

  it('models', function () {
    cy.get('#carPiсker-brand')
      .click();
    cy.get('form.ng-pristine > :nth-child(1) > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > div > .inputAutocomplete__popup') // список с марками
      .contains('Aston Martin')
      .click();
    cy.get('#carPiсker-model')
      .click();
    cy.get('.inputAutocomplete__popup') // список с моделями
      .contains('DB9')
      .click();
    cy.get('#carPiсker-generation')
      .click();
    cy.get('.inputAutocomplete__popup') // список с моделями
      .contains('DB9 2003 - 2016')
      .click();
    cy.get(':nth-child(2) > .col-sm-4 > .btn')
      .click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(2) > :nth-child(3)')
      .contains('DB9 2003 - 2016')
      .should('be.visible');
    cy.get(':nth-child(2) > .table > tbody > :nth-child(2) > .w1 > a > .glyphicon') // удалить авто
      .click();
    cy.get(':nth-child(4) > .panel-heading')
      .next()
      .click();
    cy.get('.ng-pristine > .row > .col-sm-8 > .inputAutocomplete > .inputPopup > .inputPopup__popup')
      .contains('На запчасти')
      .click();
    cy.get(':nth-child(4) > .panel-body')
      .contains('Добавить')
      .click();
    cy.wait(3000);
    cy.get('.modal-body')
      .contains('На запчасти')
      .should('be.visible');
    cy.get(':nth-child(4) > .table > tbody > tr > .w1 > a > .glyphicon')
      .click();
    cy.wait(3000)
    cy.get('.modal-body')
      .contains('На запчасти')
      .should('not.be.visible');
    cy.get('.popup__close')
      .click();
  });
});