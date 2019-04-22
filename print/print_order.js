var mail = '#form-email'
var pass = '#form-password'
var enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'

describe("print", function () {
  before('cookie', function () {
    cy.setCookie('guid-191', '%7B1A4781F3-8401-B3AD-A5E7-2594B38BAC26%7D');
  });

  it("Auth", function () {
    cy.visit("https://apgrup.ru/orders/56156/");

    cy.get(mail).click().type('jinda.project@gmail.com');
    cy.get(pass).click().type('123456');
    cy.get(enter).click();
    cy.wait(2000);
  });

  // прикрепленные NTCN NTCN
  it('print', function () {
    cy.get('#content > div > ui-view > div:nth-child(4) > div > div.tab-pane.active > div > div:nth-child(3) > div.panel-footer.collection__footer.collection__footer--panel > div.collection__print.ng-scope')
      .contains('Печать')
      .click();
    cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper')
      .contains('Отгружено')
      .should('be.visible');
    cy.get('[style="padding-top: 40px;"]')
      .contains('Закрыть')
      .click();

    // блокнот fdf
    cy.get('.nav')
      .contains('Блокнот')
      .click();
    cy.wait(1000);
    cy.get('.tab-pane.active > .panel.ng-scope > [table-template="template"] > .panel-footer')
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
    cy.get('.tab-pane.active > .panel.ng-scope')
      .contains('Да')
      .should('be.visible');
    cy.get('.tab-pane.active > .panel.ng-scope > [table-template="template"] > .panel-footer')
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
    cy.get('.tab-pane.active > .panel.ng-scope')
      .contains('Да')
      .should('be.visible');
    cy.get('.tab-pane.active > .panel.ng-scope > [table-template="template"] > .panel-footer')
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
    cy.get('.tab-pane.active > .panel.ng-scope')
      .contains('sdf')
      .should('be.visible');
    cy.get('.tab-pane.active > .panel.ng-scope > [table-template="template"] > .panel-footer')
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
    cy.get('.tab-pane.active > .panel.ng-scope')
      .contains('500,00')
      .should('be.visible');
    cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .panel-footer')
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
    cy.get('.tab-pane.active > .panel.ng-scope')
      .contains('0,00')
      .should('be.visible');
    cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .panel-footer')
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
    cy.get('.tab-pane.active > .panel.ng-scope')
      .contains('Банковская карта')
      .should('be.visible');
    cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .panel-footer')
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
    cy.get('.tab-pane.active > .panel.ng-scope')
      .contains('NOKIA')
      .should('be.visible');
    cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .panel-footer')
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
    cy.get('.tab-pane.active > .panel.ng-scope')
      .contains('ПЕТРОВ')
      .should('be.visible');
    cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .panel-footer')
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
    cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .panel-footer')
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
    cy.wait(3000);
    cy.get('.tab-pane.active > .panel.ng-scope')
      .contains('ПЕТРОВ')
      .should('be.visible');
    cy.get('.tab-pane.active > .panel.ng-scope > [table-template="template"] > .panel-footer > .collection__print > .btn-print')
      .click();
    cy.wait(3000);
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
    cy.get('.tab-pane.active > .panel.ng-scope')
      .contains('Исходящий')
      .should('be.visible');
    cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .panel-footer')
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
    cy.get('.tab-pane.active > .panel.ng-scope')
      .contains('ау')
      .should('be.visible');
    cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .panel-footer')
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
