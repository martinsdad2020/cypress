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

    it('pick ruusian village', function() {
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

    it('preorder', function() {
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

    it('Search and add detail', function() {
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
        .contains('2 Active Tourer')
        .should('be.visible')
        .click();
      cy.get('.modal-body')
        .contains('Выбрать')
        .click();
      cy.get('[style="margin-bottom: 20px"] > :nth-child(1) > .row > :nth-child(2) > div.ng-scope > .form-control') // поле наименование
        .click({force:true});
      cy.get('.modal-body')
        .contains('Двигатель')
        .click({force:true});
      cy.get('.modal-body')
        .contains('Башмак')
        .click({force:true});
      cy.get('.pull-right > .btn-success') // кнопка применить во всплывающем поиске
        .click({force:true});
      cy.wait(3000);
      cy.get('.partsQuickSearch__content')
        .contains('Добавить')
        .click({force:true});
      cy.get('.modal-body > .panel > .panel-body')
        .contains('Добавить')
        .click();
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
      cy.wait(4000);
      cy.get('body > div.app')
        .contains('работе')
        .should('be.visible');
    });

    it('close order', function() {
      cy.get('.navbar')
        .contains('Мои задачи')
        .click();
      cy.get(':nth-child(2) > .list-group > .list-group-item') // в задачах первое поле с задачей
        .contains('наличие')
        .click({force:true});
      cy.get('.collectionTable__popover > .ng-scope > .fa') // бургер на странице проверить наличие детали
        .click();
      cy.get('.contextPopover')
        .contains('Подтвердить')
        .click();
      cy.get('.modal-body')
        .contains('Сохранить')
        .click();
      cy.wait(4000);
      cy.get('.alert')
        .contains('№')
        .click();
    });

    it('add payment', function() {
      cy.get('.app__content')
        .contains('Платежи')
        .click();
      cy.get('.app__content')
        .contains('Добавить платеж')
        .click();
      cy.get(':nth-child(1) > .form__label') // Тип
        .next()
        .click();
      cy.get('[name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
        .contains('карта')
        .click();
      cy.get('#form-summ')
        .type('135790')
      cy.get('.modal-body')
        .contains('Создать')
        .click();
      cy.wait(3000);
      cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .collection__wrapper > .collectionTable > .collectionTable__wrapper > .collectionTable__container > .collectionTable__table > .table > tbody > tr.ng-scope > .collectionTable__popover-wrapper > .collectionTable__popover > .ng-scope > .fa') // бургер
        .click();
      cy.get('.contextPopover')
        .contains('Подтвердить')
        .click();
      cy.get('.modal-footer')
        .contains('Подтвердить')
        .click();
      cy.wait(4000);
    });

    it('close order', function() {
      cy.get('.app__content')
        .contains('Прикрепленные')
        .click();
      cy.get('.panel.ng-scope > .panel-body')
        .contains('Добавить')
        .click();
      cy.get('.popup__inner')
        .contains('Создать')
        .click();
      cy.get(':nth-child(2) > .inputBoolean > .inputBoolean__checkbox') // checkbox
        .click();
      cy.get('.modal-footer')
        .contains('Добавить')
        .click();
      cy.get('.modal-content > :nth-child(1) > .modal-footer')
        .contains('Добавить')
        .click();
      cy.wait(2000);
      cy.get('.nav')
        .contains('Расходные')
        .click();
      cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .collection__wrapper > .collectionTable > .collectionTable__wrapper > .collectionTable__container > .collectionTable__table > .table > tbody > .ng-scope > :nth-child(2) > a')
        .click();
      cy.wait(2000);
      cy.get('.app__content')
        .contains('Подтвердить')
        .click();
      cy.wait(1000);
      cy.get('.modal-footer')
         .contains('Подтвердить')
         .click();
      cy.wait(1000);
      cy.get('.app__content')
        .contains('Оплатить')
        .click();
      cy.wait(1000);
      cy.get('.modal-footer')
        .contains('Оплатить')
        .click();
      cy.wait(1000);
      cy.get('.app__content')
        .contains('Отгружено')
        .click();
      cy.wait(1000);
      cy.get('.modal-footer')
        .contains('Подтвердить')
        .click();
      cy.wait(1000);
      cy.get('.col-md-8')
        .contains('№')
        .click({force:true});
      cy.wait(2000);
      cy.get('.app__content')
        .contains('Закрыт')
        .should('be.visible');

    });
  });
