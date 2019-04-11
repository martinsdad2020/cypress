let login = '#form-email'
let password = '#form-password'
let enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup'
let companies = '.sidebar__menu > :nth-child(1) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup'
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
      cy.visit("https://apgrup.ru");

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

    it('pick ruusian village', function(){
      cy.get('.sidebar__label')
        .contains('Компания')
        .next()
        .click();
      cy.get(companies) // выпадающий список со складами
        .contains('Альфа')
        .click();
      cy.get('.sidebar__label')
        .contains('Склад')
        .next()
        .click();
      cy.get(storages) // выпадающий список со складами
        .contains('РУССКАЯ')
        .click();
});

    it('preorder', function(){
      cy.get('.sidebar__menu')
        .contains('Добавить предзаказ')
        .click({force:true});
      cy.get('.app__content')
        .contains('Создать')
        .click();
      cy.get('.row') // уведомление под полем ввода имя
        .contains('Поле обязательно для')
        .should('be.visible');
      cy.get(name) // поле имя
        .type('Roman')
        .should('value', 'Roman');
      cy.get(phone) // поле телефон
        .type('79992070525')
        .should('value', '+79992070525');
      cy.get('.has-error > .form__label') // взять селектор слова "Источник" и некстом взять его поле
        .next()
        .click();
      cy.get('.app__content') // выбрать на станице "Другое" и кликнуть
        .contains('Другое')
        .click();
      cy.get('.app__content')
        .contains('Создать')
        .click();
      cy.wait(2000);
      cy.get('.messengerUpload')
        .contains('Предзаказ №')
        .should('be.visible');
      cy.get('.messengerUpload')
        .contains('Roman')
        .should('be.visible');
      cy.get('#form-description') // поле сообщение*
        .click()
        .type('test');
});

    it('Search, add detail, and reject order', function() {
      cy.get('#quickSearch')
        .click();
      cy.get('.partsQuickSearch__content')
        .contains('Свернуть')
        .should('be.visible');
      cy.get(':nth-child(1) > .row > :nth-child(1) > div.ng-scope > .form-control')
        .click();
      cy.wait(5000);
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div') // список марок в поле поиска
        .contains('BMW')
        .should('be.visible')
        .click();
      cy.get('.modal-body')
        .contains('Выбрать')
        .click();
      cy.get('.pull-right > .btn-success') // кнопка применить во всплывающем поиске
        .click({force:true});
      cy.wait(3000);
      cy.get('.partsQuickSearch__content')
        .contains('Добавить')
        .click({force:true});
      cy.get('.draggableWindow__close')
        .click({force:true});
      cy.get('.app__content')
        .contains('BMW')
        .should('be.visible');
      cy.get('.messengerUpload')
        .contains('Создать заказ')
        .click();
      cy.get('.modal-footer')
        .contains('Создать')
        .click();
      cy.wait(5000);
      cy.get('body > div.app')
        .contains('работе')
        .should('be.visible');
      cy.get('.app__content')
        .contains('Отказ')
        .click();
      cy.get(':nth-child(1) > .form__label')
        .next()
        .click();
      cy.get('[name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup')
        .contains('Дорого')
        .click();
      cy.get('.popup__inner')
        .contains('Сохранить')
        .click();
      cy.get('.app__content')
        .contains('Предварительно отменен')
        .should('be.visible');
});
});
