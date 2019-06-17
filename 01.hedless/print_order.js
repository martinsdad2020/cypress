let login = '#form-email'
let password = '#form-password'
let enter = '.ng-valid-email.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > [ng-class="{inProgress: loading}"] > .inputAutocomplete__popup'
let companies = '.sidebar__row'
let side = '.sidebar__menu'
let first = '.tab-pane.active > [scope="ctrl.orderScope"] > [table-template="template"] > .panel-footer' //1-5, 12
let second = '.tab-pane.active > [template="template"] > [filter-fields="$parent.undefined"] > .panel-footer' // 6-11, 13-14


describe("print", function () {
  before('cookie', function () {
    cy.setCookie('guid-191', '%7B1A4781F3-8401-B3AD-A5E7-2594B38BAC26%7D')
    cy.server();
    cy.route('https://crm.api.apgrup.ru/v1/**')
      .as('ww');
  });

  it("Auth", function () {
    cy.visit("https://apgrup.ru/orders/56156/");

    cy.get(login).type('jinda.project@gmail.com');
    cy.get(password).type('123456');
    cy.get(enter).click();
    cy.wait(2000);
  });

  // прикрепленные NTCN NTCN
  it('print', function () {
    cy.get(first)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('Отгружено')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // блокнот
    cy.get('.nav')
      .contains('Блокнот')
      .click();
    cy.wait(1000);
    cy.get(first)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('MAN')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // сохраненный поиск
    cy.get('.nav')
      .contains('Сохраненный поиск')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Да')
      .should('be.visible');
    cy.get(first)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('Да')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // история поиска
    cy.get('.nav')
      .contains('История поиска')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Да')
      .should('be.visible');
    cy.get(first)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('Да')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // история комментариев
    cy.get('.nav')
      .contains('комментариев')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('sdf')
      .should('be.visible');
    cy.get(first)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('ПЕТРОВ')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // доставки
    cy.get('.nav')
      .contains('Доставки')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('500,00')
      .should('be.visible');
    cy.get(second)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('500,00')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // счета
    cy.get('.nav')
      .contains('Счета')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('0,00')
      .should('be.visible');
    cy.get(second)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('0,00')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // платежи
    cy.get('.nav')
      .contains('Платежи')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Банковская карта')
      .should('be.visible');
    cy.get(second)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('Банковская карта')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // расходные накладные
    cy.get('.nav')
      .contains('Расходные')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('NOKIA')
      .should('be.visible');
    cy.get(second)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('NOKIA')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // заявки на перемещение
    cy.get('.nav')
      .contains('Заявки')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('ПЕТРОВ')
      .should('be.visible');
    cy.get(second)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('ПЕТРОВ')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // накладные на возврат
    cy.get('.nav')
      .contains('возврат')
      .click();
    cy.wait(1000);
    cy.get('tr > .text-center')
      .contains('пуст')
      .should('be.visible');
    cy.get(second)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('пуст')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // история ответсвенных
    cy.get('.nav')
      .contains('ответственных')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('ПЕТРОВ')
      .should('be.visible');
    cy.get(first)
      .contains('Печать')
      .click();
    cy.wait(1000);
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('ПЕТРОВ')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // звонки
    cy.get('.nav')
      .contains('Звонки')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Исходящий')
      .should('be.visible');
    cy.get(second)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"]')
      .contains('Исходящий')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // повторные оращения
    cy.get('.nav')
      .contains('Повторные')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('ау')
      .should('be.visible');
    cy.get(second)
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('ау')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();
  });
});
