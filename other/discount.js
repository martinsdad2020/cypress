//Главная страница, авторизация sfgsdfgsdfgsdfsddgddfd
let login = '#form-email'
let password = '#form-password'
let enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup'
let startDate = 'div[name="startDate"] > .ng-valid-mask.ng-valid-date-time-required-date > .row > .has-error > .form-control'
let endDate = 'div[name="endDate"] > .ng-valid-mask.ng-valid-date-time-required-date > .row > .has-error > .form-control'
let carModel = '.conditionsCondition__list > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup'
let burger = ':nth-child(1) > .collectionTable__popover-wrapper > .collectionTable__popover > .ng-scope > .fa'

describe("добавление детали в систему", function() {
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
      // cy.wait('@ww');
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

    it('pick discount', function(){
      cy.get('.sidebar__menu')
        .contains('Скидки')
        .next()
        .click();
      cy.wait(3000);
      cy.get('.app__content')
        .contains('Добавить скидку')
        .click()
        .click();
      cy.get('#form-title')
        .type('тест');
      cy.get('#form-discountPercent')
        .type('20');
      cy.get('#form-startDate')
        .click();
      cy.get('#form-startDate')
        .type('04.04.2019');
      cy.get('#form-endDate')
        .type('14.04.2019');
      cy.get(startDate) // поле начало даты в скидках
        .type('1010');
      cy.get(endDate) // поле окончания даты в скидках
        .type('2020');
});

    it('pick rules', function(){
      cy.get('.app__content')
        .contains('ИЛИ')
        .click();
      cy.get('.form-horizontal')
        .contains('Условие')
        .click();
      cy.get('.conditionsCondition__field')
        .select('Марка');
      cy.get('.conditionsCondition__list > .ng-pristine')
        .next()
        .click();
      cy.get(carModel) // выпадающий список с марками
        .contains('Aston Martin')
        .click();
      cy.get('.app__content')
        .contains('Создать')
        .click();
      cy.wait(3000);
      cy.get('tbody > :nth-child(1) > :nth-child(5)')
        .contains('Нет')
        .should('be.visible');
      cy.get(burger) // бургер в скидках
        .click();
      cy.get('.contextPopover')
        .contains('Активировать')
        .click(); // бургер
      cy.get('.modal-footer')
        .contains('Активировать')
        .click();
      cy.wait(2000);
      cy.get('tbody > :nth-child(1) > :nth-child(5)')
        .contains('Да')
        .should('be.visible');
});
});
