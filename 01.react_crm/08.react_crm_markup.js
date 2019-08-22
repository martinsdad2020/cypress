let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let startDate = 'div[name="startDate"] > .ng-valid-mask.ng-valid-date-time-required-date > .row > .has-error > .form-control'
let endDate = 'div[name="endDate"] > .ng-valid-mask.ng-valid-date-time-required-date > .row > .has-error > .form-control'
let carModel = '.css-1sati5h-menu'
let burger = ':nth-child(1) > .collectionTable__popover-wrapper > .collectionTable__popover > span'
let sidebar = '._2Hrbd'

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min)
  return rand;
};
let model = ['Audi', 'Acura', 'Aston Martin', 'Cadillac'];
let randn = randomInteger(0, model.length - 1).toFixed(0) // рандомная марка
let randPercent = randomInteger(1, 50).toFixed(0) // рандомное число от 1 до 99
let randGroup = randomInteger(0, 15).toFixed(0)
// console.log(randomInteger(0, model.length - 1).toFixed(2));
// console.log(model[randn.toFixed(0)]);

describe("добавление детали в систему", function() {
  beforeEach('cookie', function() {
    cy.setCookie('guid-1', '%7B66E14AEB-559A-8B1B-1E3E-491DE5A506DE%7D')
    cy.server();
    cy.route('GET', 'https://crm.api.apgrup.ru/v1/*')
      .as('ww');
  });

  it("visit apgrup", function() {
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

  it('pick ruusian village', function() {
    cy.get(sidebar)
      .contains('Компания')
      .next()
      .click();
    cy.get(companies) // выпадающий список со складами
      .contains('АльфаДетали')
      .click();
    cy.get(sidebar)
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('РУССКАЯ')
      .click();
    cy.wait(1000);
  });

  it('pick discount', function() {
    cy.get(sidebar)
      .contains('Наценки')
      .click();
    cy.wait(1000);
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
      .type('30.08.2019');
    cy.get(startDate) // поле начало даты в скидках
      .type('1010');
    cy.get(endDate) // поле окончания даты в скидках
      .type('2020');
  });

  it('pick rules', function() {
    cy.get('.app__content')
      .contains('ИЛИ')
      .click();
    cy.get('.form-horizontal')
      .contains('Условие')
      .click();
    cy.get('.css-1hwfws3')
      .eq(2)
      .click();
    cy.get('.css-11unzgr')
      .contains('Марка')
      .click();
    cy.get('.css-1hwfws3')
      .eq(2)
      .click();
    cy.get(carModel) // выпадающий список с марками
      .contains(model[randn])
      .click();
    cy.get('.app__content')
      .contains('Создать')
      .click();
    cy.wait(1000);
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
    cy.wait(1000);
    cy.get('tbody > :nth-child(1) > :nth-child(5)')
      .contains('Да')
      .should('be.visible');
  });
});