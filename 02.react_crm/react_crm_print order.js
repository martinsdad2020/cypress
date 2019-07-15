let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let side = '._2Hrbd'
let first = '.tab-pane.active > [scope="ctrl.orderScope"] > [table-template="template"] > .panel-footer' //1-5, 12
let second = '.tab-pane.active > [template="template"] > [filter-fields="$parent.undefined"] > .panel-footer' // 6-11, 13-14


describe("print", function () {
    beforeEach('cookie', function () {
        cy.setCookie('guid-191', '{9470534C-70C9-5366-B92F-AFE2007F0B1A}')
        cy.server();
        cy.route('GET', 'https://crm.api.apgrup.ru/v1/*')
          .as('ww');
      });
    
      it('visit apgrup', function () {
        cy.visit("https://react.apgrup.ru/orders/56156/");
    
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
      });

      it('pick ruusian village', function () {
        cy.get('._2Hrbd')
          .contains('Компания')
          .next()
          .click();
        cy.get(companies) // выпадающий список со складами
          .contains('АльфаДетали')
          .click();
        cy.get('._2Hrbd')
          .contains('Склад')
          .next()
          .click();
        cy.get(storages) // выпадающий список со складами
          .contains('РУССКАЯ')
          .click();
        cy.wait(3000);
      });

  // прикрепленные
  it('print', function () {
    cy.get(side)
      .contains('Все')
      .click();
    cy.get('#filter-id')
      .type('56156');
    cy.get('.pull-right > .btn-success')
      .click();
    cy.wait(1000);
    cy.get('.pull-right > .btn-success')
      .click();
    cy.get('.collectionTable__container')
      .contains('56156')
      .click();
    cy.wait(1000);
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