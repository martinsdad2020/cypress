let login = '#form-email'
let password = '#form-password'
let enter = '.ng-valid-email.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > [ng-class="{inProgress: loading}"] > .inputAutocomplete__popup'
let companies = '.sidebar__row'
let startDate = 'div[name="startDate"] > .ng-valid-mask.ng-valid-date-time-required-date > .row > .has-error > .form-control'
let endDate = 'div[name="endDate"] > .ng-valid-mask.ng-valid-date-time-required-date > .row > .has-error > .form-control'
let carModel = '.conditionsCondition__list > .inputAutocomplete > .inputPopup > .inputPopup__popup > div > .inputAutocomplete__popup'
let burger = ':nth-child(1) > .collectionTable__popover-wrapper > .collectionTable__popover > span'

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min)
  return rand;
};
let model = ['Audi', 'BMW', 'Hummer', 'Toyota', 'Acura', 'Honda', 'Honda', 'Dodge', 'Aston Martin', 'BYD', 'Bentley', 'Cadillac', 'Chery', 'Chevrolet'];
let randn = randomInteger(0, model.length - 1).toFixed(0) // рандомная марка
let randPercent = randomInteger(1, 50).toFixed(0) // рандомное число от 1 до 99
let randGroup = randomInteger(0, 15).toFixed(0)
// console.log(randomInteger(0, model.length - 1).toFixed(2));
// console.log(model[randn.toFixed(0)]);

describe("добавление детали в систему", function () {
  before('cookie', function () {
    cy.setCookie('guid-1', '%7B67F7C782-1A21-C70D-DC3F-4C2B6CA27E6B%7D')
    cy.server();
    cy.route('GET', 'https://api.apgrup.ru/app_dev.php/v1/*')
      .as('ww');
  });

  it("visit apgrup", function () {
    cy.visit("https://apgrup.ru");
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

  it('pick discount', function () {
    cy.get('.sidebar__menu')
      .contains('Наценки')
      .click();
    cy.wait(3000);
    cy.get('.app__content')
      .contains('Добавить наценку')
      .click();
    cy.get('#form-title')
      .type(model[randn]);
      cy.get('#form-markupPercent')
      .type(randPercent);
    cy.get('#form-startDate')
      .click();
    cy.get('#form-startDate')
      .type('04.04.2019');
    cy.get('#form-endDate')
      .type('30.05.2019');
    cy.get(startDate) // поле начало даты в скидках
      .type('1010');
    cy.get(endDate) // поле окончания даты в скидках
      .type('2020');
  });

  it('pick rules', function () {
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
      .contains(model[randn])
      .click();
    cy.get('#content')
      .contains('Условие')
      .click();
    cy.get('.form-control.inputAutocomplete__input') // группа деталей
      .eq(3).
      click();
    cy.get('.inputAutocomplete__popup').eq(3)
      .children().eq(randGroup).click();
    cy.get('.form-control.inputAutocomplete__input') // наименование деталей
      .eq(4).
      click();
    cy.get('.inputAutocomplete__popup').eq(4)
      .children().eq(randGroup).click();
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