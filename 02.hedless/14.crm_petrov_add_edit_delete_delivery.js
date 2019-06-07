let login = '#form-email'
let password = '#form-password'
let enter = '.ng-valid-email.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > [ng-class="{inProgress: loading}"] > .inputAutocomplete__popup'
let companies = '.sidebar__row'
let name = '#form-name'
let phone = '#form-phoneNumber'
let para = ':nth-child(15) > :nth-child(2) > a'

describe('Create an order', function() {
   before('cookie', function() {
      cy.setCookie('guid-191', '%7B1A4781F3-8401-B3AD-A5E7-2594B38BAC26%7D')
      cy.server();
      cy.route('GET', 'https://api.apgrup.ru/app_dev.php/v1/*')
        .as('ww');
    });

    it('visit apgrup', function() {
      cy.visit("https://apgrup.ru/storages/2/orders/new?filter%5Bdef%5D%5Blimit%5D=50&filter%5Bdef%5D%5Boffset%5D=0&filter%5Bdef%5D%5Bsort%5D=id&filter%5Bdef%5D%5Border%5D=desc");

      cy.get(login)
        .click()
        .clear()
        .type('jinda.project@gmail.com');
      cy.get(password)
        .click()
        .clear()
        .type('123456');
      cy.get(enter)
        .click();
      cy.wait('@ww');
      cy.wait('@ww');
    });

    it('pick ruusian village', function () {
      cy.get('.sidebar__label')
        .contains('Компания')
        .next()
        .click();
      cy.get(companies) // выпадающий список со складами
        .contains('АльфаДетали')
        .click();
      cy.get('.sidebar__label')
        .contains('Склад')
        .next()
        .click();
      cy.get(storages) // выпадающий список со складами
        .contains('РУССКАЯ')
        .click();
      cy.wait(3000);
    });

      it('add delivery', function() {
        cy.get('.app__content')
          .contains('№')
          .click();
        cy.wait(2000);
        cy.get('.app__content')
          .contains('Взять')
          .click();
        cy.get('.modal-footer')
          .contains('Взять')
          .click();
        cy.wait(2000);
        cy.get('.app__content')
          .contains('Взять в работу')
          .click();
        cy.get('.modal-footer')
          .contains('Взять')
          .click();
        cy.wait(2000);
        cy.get('.nav')
          .contains('Доставки')
          .click();
        cy.get('.app__content')
          .contains('Добавить доставку')
          .click();
        cy.get('#form-summ')
          .type('234567890')
          .should('be.visible');
        cy.get('.popup__inner')
          .contains('Создать')
          .click();
        cy.wait(2000);
        cy.get(':nth-child(8) > .currency')
          .contains('7')
          .should('be.visible')
        cy.get('.tab-pane.active > [template="template"] > [filter-fields="$parent.undefined"] > .collection__wrapper > .collectionTable > .collectionTable__wrapper > .collectionTable__container > .collectionTable__table > .table > tbody > tr > .collectionTable__popover-wrapper > .collectionTable__popover > span') // бургер
          .click();
        cy.get('.contextPopover')
          .contains('Изменить')
          .click();
        cy.get('#form-summ')
          .clear()
          .type('1')
          .should('be.visible');
        cy.get('.popup__inner')
          .contains('Сохранить')
          .click();
        cy.wait(2000);
        cy.get(':nth-child(8) > .currency')
          .contains('1')
          .should('be.visible');
        cy.get('.tab-pane.active > [template="template"] > [filter-fields="$parent.undefined"] > .collection__wrapper > .collectionTable > .collectionTable__wrapper > .collectionTable__container > .collectionTable__table > .table > tbody > tr > .collectionTable__popover-wrapper > .collectionTable__popover > span') // бургер
          .click({force:true});
        cy.get('.contextPopover')
          .contains('Удалить')
          .click();
        cy.get('.modal-footer')
          .contains('Удалить')
          .click();
        cy.wait(2000);
        cy.get(':nth-child(8) > .currency')
          .contains('0')
          .should('be.visible');
      });
   });
