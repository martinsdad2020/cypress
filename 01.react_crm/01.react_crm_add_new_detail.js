let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let side = '._2Hrbd'

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min)
  return rand;
};

let randProvider = randomInteger(0, 49).toFixed(0); // поставщик
let randGroup = randomInteger(0, 17).toFixed(0); // группа
let randName = randomInteger(0, 10).toFixed(0); // наименование
let randProducer = randomInteger(0, 500).toFixed(0); // производитель
let randColor = randomInteger(0, 7).toFixed(0); // цвет
let randRate = randomInteger(0, 4).toFixed(0); // рейтинг
let randDefect = randomInteger(0, 24).toFixed(0); // рейтинг
let randBrand = randomInteger(0, 88).toFixed(0);
let randModel = randomInteger(0, 1).toFixed(0);
let randGen = randomInteger(0, 0).toFixed(0);

describe('add new detail', function () {
  beforeEach('cookie', function () {
    cy.setCookie('guid-1', '{2DFA0721-8FE7-6884-E7FB-E9DF09738CFF}')
    cy.server();
    cy.route('GET', 'https://crm.api.apgrup.ru/v1/*')
      .as('ww');
  });

  it("visit apgrup", function () {
    cy.visit("https://apgrup.ru/");
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
    cy.get(side)
      .contains('Компания')
      .next()
      .click();
    cy.get(companies) // выпадающий список со складами
      .contains('АльфаДетали')
      .click();
    cy.get(side)
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('РУССКАЯ')
      .click();
    cy.wait(1000);
  });

  it('add new detail', function () {
    cy.get(side)
      .contains('Приходные накладные')
      .click();
    cy.wait(1000);
    cy.get('button')
      .contains('Добавить')
      .click();
    cy.wait(1000);
    cy.get('label')
      .eq(4)
      .contains('Поставщик')
      .next()
      .click();
    cy.wait(2000)
    cy.get('.css-11unzgr')
      .children()
      .eq(randProvider)
      .click();
    cy.get('.modal-body')
      .contains('Сохранить')
      .click();
    cy.wait(1000);
    cy.get('.E42Z0')
      .contains('Добавить деталь')
      .click();
    cy.wait(1000);
    cy.get(':nth-child(1) > .form__label')
      .next()
      .click();
    cy.wait(2000);
    cy.get('.inputAutocomplete__popup')
      .eq(2) // группа
      .children()
      .eq(randGroup)
      .click();
    cy.get(':nth-child(2) > .form__label')
      .next()
      .click();
    cy.wait(1000);
    cy.get('.inputAutocomplete__popup')
      .eq(3) // наименование
      .children()
      .eq(randName)
      .click();
    cy.get('#form-quantity')
      .type('1')
      .should('value', '1');
    cy.get(':nth-child(11) > .form__label')
      .next()
      .click();
    cy.wait(1000);
    cy.get('.inputAutocomplete__popup')
      .eq(5) // производитель
      .children()
      .eq(randProducer)
      .click();
    cy.get(':nth-child(15) > .form__label')
      .next()
      .click();
    cy.wait(1000);
    cy.get('.inputAutocomplete__popup')
      .eq(6) // Цвет
      .children()
      .eq(randColor)
      .click();
    cy.get(':nth-child(16) > .form__label')
      .next()
      .click();
    cy.wait(1000);
    cy.get('.inputAutocomplete__popup')
      .eq(7) // Рейтинг
      .children()
      .eq(randRate)
      .click();
    cy.get('.modal-body')
      .contains('Добавить деталь')
      .click();
    cy.wait(1000);
  });

  it('add new car', function () {
    cy.get('#carPiсker-brand')
      .click();
    cy.get('.inputAutocomplete__popup') // список с марками
      .eq(8)
      .children()
      .eq(randBrand)
      .click();
    cy.get('#carPiсker-model')
      .click();
    cy.get('.inputAutocomplete__popup') // список с моделями
      .eq(9)
      .children()
      .eq(randModel)
      .click();
    cy.get('#carPiсker-generation')
      .click()
    cy.get('.inputAutocomplete__popup') // список с моделями
      .eq(10)
      .children()
      .eq(randGen)
      .click();
    cy.get(':nth-child(2) > .panel-body')
      .contains('Добавить')
      .click();
    // cy.get('tbody > tr.ng-scope > :nth-child(3)') // область для проверки поколения авто на видимость после добавления к детали в окне ред.
    //   .contains('A3 [8PA] 2004 - 2013')
    //   .should('be.visible');
  });

  it('add defeсt', function () {
    cy.get(':nth-child(4) > .panel-heading')
      .next()
      .click();
    cy.get('.inputAutocomplete__popup')
      .eq(11) // дефект
      .children()
      .eq(randDefect)
      .click();
    cy.get(':nth-child(4) > .panel-body')
      .contains('Добавить')
      .click();
    cy.wait(3000);
    cy.get(':nth-child(4) > .panel-body') // область с названием добавленного дефекта
      .should('have.attr', 'class');
    cy.get('.popup__close')
      .click();
    cy.wait(2000);
  });

  it('submit detail', function () {
    cy.get(':nth-child(2) > .inputBoolean > .inputBoolean__checkbox')
      .click();
    cy.get('.app__content')
      .contains('Подтвердить')
      .click();
  });

  it('add price', function () {
    cy.get('tr > :nth-child(4) > a')
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
    cy.get('.popup__inner')
      .contains('Сохранить')
      .click();
    cy.wait(2000);
    cy.get('.partModels__item')
      .contains('Открыть в магазине')
      .click({ force: true });
  });
});