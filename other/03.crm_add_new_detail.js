let login = '#form-email'
let password = '#form-password'
let enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup'
let companies = '.sidebar__row'

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
let randBrand = randomInteger(0, 97).toFixed(0);
let randModel = randomInteger(0, 1).toFixed(0);
let randGen = randomInteger(0, 0).toFixed(0);

describe('add new detail', function () {
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

  it('add new detail', function () {
    cy.get('.sidebar__menu')
      .contains('Приходные накладные')
      .click({ force: true });
    cy.wait(2000);
    cy.get('.app__content')
      .contains('Добавить')
      .click({ force: true });
    cy.get('.fields > .form__row > .form__label')
      .next()
      .click();
    cy.get('.inputAutocomplete__popup')
      .eq(4)
      .children()
      .eq(randProvider)
      .click();
    cy.get('.popup__inner')
      .contains('Создать')
      .click();
    cy.get('.app__content')
      .contains('Добавить деталь')
      .click();
    cy.get(':nth-child(1) > .form__label')
      .next()
      .click();
    cy.get('.inputAutocomplete__popup')
      .eq(4) // группа
      .children()
      .eq(randGroup)
      .click();
    cy.get(':nth-child(2) > .form__label')
      .next()
      .click();
    cy.get('.inputAutocomplete__popup')
      .eq(5) // наименование
      .children()
      .eq(randName)
      .click();
    cy.get('#form-quantity')
      .type('1')
      .should('value', '1');
    cy.get(':nth-child(11) > .form__label')
      .next()
      .click();
    cy.get('.inputAutocomplete__popup')
      .eq(7) // производитель
      .children()
      .eq(randProducer)
      .click();
    cy.get(':nth-child(15) > .form__label')
      .next()
      .click();
    cy.get('.inputAutocomplete__popup')
      .eq(8) // Цвет
      .children()
      .eq(randColor)
      .click();
    cy.get(':nth-child(16) > .form__label')
      .next()
      .click();
    cy.get('.inputAutocomplete__popup')
      .eq(9) // Рейтинг
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
      .eq(10)
      .children()
      .eq(randBrand)
      .click();
    cy.get('#carPiсker-model')
      .click();
    cy.get('.inputAutocomplete__popup') // список с моделями
      .eq(11)
      .children()
      .eq(randModel)
      .click();
    cy.get('#carPiсker-generation')
      .click()
    cy.get('.inputAutocomplete__popup') // список с моделями
      .eq(12)
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
    cy.get('.panel.ng-binding > .panel-heading')
      .next()
      .click();
    cy.get('.inputAutocomplete__popup')
      .eq(13) // дефект
      .children()
      .eq(randDefect)
      .click();
    cy.get('.panel.ng-binding > .panel-body')
      .contains('Добавить')
      .click();
    cy.get('tr.ng-scope > .ng-binding') // область с названием добавленного дефекта
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
    cy.get('tr.ng-scope > :nth-child(3) > a')
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
      .click({force:true});
  });
});
