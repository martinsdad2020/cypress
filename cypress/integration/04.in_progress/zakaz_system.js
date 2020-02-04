let login = '#form-email'
let password = '#form-password'
let enter = '.ng-valid-email.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > [ng-class="{inProgress: loading}"] > .inputAutocomplete__popup'
let companies = '.sidebar__row'
let side = '.sidebar__menu'

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min)
    return rand;
};

let randGroup = randomInteger(0, 17).toFixed(0);
let randName = randomInteger(0, 10).toFixed(0);

describe('add new detail', function () {
    before('cookie', function () {
        cy.setCookie('guid-1', '%7B67F7C782-1A21-C70D-DC3F-4C2B6CA27E6B%7D')
        cy.server();
        cy.route('app_dev.php/v1/**')
            .as('ww',);
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

    it('Income', function () {
        cy.get(side)
            .contains('Приходные накладные')
            .click();
        cy.get('#content > div')
            .contains('Добавить приходную накладную')
            .should('be.visible');
        cy.get('.app__content')
            .contains('Очистить')
            .click();
        cy.get('#filter-number')
            .type('24825');
        cy.get('.app__content')
            .contains('Принял')
            .next()
            .click();
        cy.get(':nth-child(3) > [field="field"]')
            .contains('Владелец Компании Галаника')
            .click();
        cy.get('.app__content')
            .contains('Поставщик')
            .next()
            .click();
        cy.get(':nth-child(4) > [field="field"]')
            .contains('ЭМЕКС')
            .click();
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.get('.collectionTable__container')
            .contains('Владелец Компании Галаника')
            .should('be.visible');
        cy.get('.collectionTable__container')
            .contains('ЭМЕКС')
            .should('be.visible');
        cy.get('.collectionTable__table')
            .contains('Подтвержден')
            .should('be.visible');
        cy.get('.collectionTable__container')
            .contains('24825')
            .should('be.visible')
            .click();
        cy.get('.app__content')
            .contains('Группа')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup') // поле группа в приходной 
            .eq(2)
            .children()
            .eq(randGroup)
            .click();
        cy.get('.app__content')
            .contains('Наименование')
            .next()
            .click()
        cy.get('.inputAutocomplete__popup') // поле наименование в приходной 
            .eq(3)
            .children()
            .eq(randName)
            .click()
        cy.get('#filter-code')
            .type('1234567890')
            .should('value', '1234567890')
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.get('.app__content')
            .contains('Список деталей пуст')
            .should('be.visible');
        cy.get('.app__content')
            .contains('Очистить')
            .click();
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.wait(2000);
        cy.get('.collectionTable__wrapper')
            .contains('Кронштейн КПП')
            .should('be.visible')
        cy.get('span > .fa')
            .click();
        cy.get('.contextPopover')
            .contains('Изменить')
            .click();
        cy.wait(5000);
        cy.get('#form-kod')
            .type('123213123')
            .should('value', '123213123');
        cy.get('.popup__close')
            .click({ force: true });
        cy.get('.collectionTable__body-label > .inputBoolean > .inputBoolean__checkbox')
            .click();     
    });
});
    // it('In storage', function () {
    //     cy.get(side)
    //         .contains('На складе')
    //         .click({ force: true });
    //     cy.get('#content > div')
    //         .contains('Список деталей на складе')
    //         .should('be.visible');
    //     cy.get('#filter-type')
    //         .select('Легковая');
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div ')
    //         .click();
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div > div.inputPopup.ng-scope > div > div')
    //         .contains('Acura')
    //         .click();
    //     cy.get('#content > div')
    //         .contains('Применить')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > div > div.collection__wrapper')
    //         .contains('Acura')
    //         .should('be.visible');
    //     //cy.wait('@SUP').its('status').should('eq', 200)
    // });

    // it('Unprice', function () {
    //     cy.get(side)
    //         .contains('Неоцененные')
    //         .click({ force: true });
    //     cy.get('#filter-type')
    //         .select('Легковая');
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-10 > div > div:nth-child(2) > div > div')
    //         .click();
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-10 > div > div:nth-child(2) > div > div > div.inputPopup.ng-scope > div > div')
    //         .contains('Audi')
    //         .click();
    //     cy.get('#content > div')
    //         .contains('Применить')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > div > div.collection__wrapper')
    //         .contains('Audi')
    //         .should('be.visible');
    //     //cy.wait('@SUP').its('status').should('eq', 200)

    // });

    // it('Unfind', function () {
    //     cy.get(side)
    //         .contains('Неопознанные')
    //         .click({ force: true });
    //     cy.get('#filter-type')
    //         .select('Легковая');
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div')
    //         .click();
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div > div.inputPopup.ng-scope > div > div')
    //         .contains('Audi')
    //         .click();
    //     cy.get('#content > div')
    //         .contains('Применить')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > div > div.collection__wrapper')
    //         .contains('Audi')
    //         .should('be.visible');
    //     //cy.wait('@SUP').its('status').should('eq', 200)

    // });

    // it('Reserv', function () {
    //     cy.get(side)
    //         .contains('В резерве')
    //         .click({ force: true });
    //     cy.get('#content > div')
    //         .contains('0')
    //         .should('be.visible');
    //     //cy.wait('@RES').its('status').should('eq', 200)

    // });

    // it('Waiting for submit', function () {
    //     cy.get(side)
    //         .contains('Ожидают подтверждения')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > div')
    //         .contains('0')
    //         .should('be.visible');
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('Disposed', function () {
    //     cy.get(side)
    //         .contains('Утилизировано')
    //         .click({ force: true });
    //     cy.get('#filter-isTrashed')
    //         .select('Да')
    //     cy.get('#content')
    //         .contains('Применить')
    //         .click();
    //     cy.get('#content > div > ui-view > div')
    //         .contains('VW')
    //         .should('be.visible');
    //     //cy.wait('@RES').its('status').should('eq', 200)

    // });

    // it('CLaim storage', function () {
    //     cy.get(side)
    //         .contains('Претензионный склад')
    //         .click({ force: true });
    //     cy.get('#filter-type')
    //         .select('Легковая');
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div')
    //         .click();
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div > div.inputPopup.ng-scope > div > div')
    //         .contains('Audi')
    //         .click();
    //     cy.get('#content > div')
    //         .contains('Применить')
    //         .click();
    //     cy.get('#content > div > ui-view > div > div.collection__wrapper')
    //         .contains('A3')
    //         .should('be.visible');
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // });

    // it('Orders', function () {
    //     cy.get(side)
    //         .contains('Все')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(8) > div > div')
    //         .click();
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(8) > div > div > div.inputPopup.ng-scope > div > div')
    //         .contains('Закрыт')
    //         .click();
    //     cy.get('#content > div')
    //         .contains('Применить')
    //         .click();
    //     /*cy.get('.collectionTable__container')
    //         .contains('цука')
    //         .should('be.visible')*/
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('New orders', function () {
    //     cy.get(side)
    //         .contains('Новые')
    //         .click({ force: true });
    //     cy.get('#content')
    //         .contains('0')
    //         .should('be.visible');
    //     //cy.wait('@RES').its('status').should('eq', 200)

    // })

    // it('Closed orders', function () {
    //     cy.get(side)
    //         .contains('Закрытые')
    //         .click({ force: true });
    //     /*cy.get('#content > div > ui-view > div')
    //         .contains('цука')
    //         .should('be.visible')*/
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('Empty orders', function () {
    //     cy.get(side)
    //         .contains('Пустые')
    //         .click({ force: true });
    //     cy.get('#content')
    //         .contains('Список заказов пуст')
    //         .should('be.visible');
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('Delete orders', function () {
    //     cy.get(side)
    //         .contains('На удаление')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(10) > div > div')
    //         .click();
    //     cy.get(':nth-child(10) > [field="field"] > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
    //         .contains('Отменено клиентом')
    //         .click();
    //     cy.get('#content')
    //         .contains('Применить')
    //         .click();
    //     cy.get('#content')
    //         .contains('ТЕСТОВЫЙ')
    //         .should('be.visible');


    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('Action orders', function () {
    //     cy.get(side)
    //         .contains('Мои активные')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(6) > div > div')
    //         .click();
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(6) > div > div > div.inputPopup.ng-scope > div > div')
    //         .contains('Программа')
    //         .click();
    //     cy.get('#content')
    //         .contains('Применить')
    //         .click();
    //     cy.get('.app__content')
    //         .contains('Roman')
    //         .should('be.visible');
    //     //cy.wait('@RES').its('status').should('eq', 200)

    // })

    // it('My closed orders', function () {
    //     cy.get(side)
    //         .contains('Мои закрытые')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(6) > div > div')
    //         .click();
    //     cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(6) > div > div > div.inputPopup.ng-scope > div > div')
    //         .contains('Программа')
    //         .click();
    //     cy.get('#content')
    //         .contains('Применить')
    //         .click();
    //     cy.get('.app__content')
    //         .contains('Roman')
    //         .should('be.visible');
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('Incoming move ', function () {
    //     cy.get(side)
    //         .contains('Входящие')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(1) > div > div')
    //         .click();
    //     cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(1) > div > div > div.inputPopup.ng-scope > div')
    //         .contains('РУССКАЯ ДЕРЕВНЯ')
    //         .click();
    //     cy.get('#content')
    //         .contains('Применить')
    //         .click();
    //     /*cy.get('.app__content')
    //         .contains('Ракушин')
    //         .should('be.visible')*/

    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('Outgoing move', function () {
    //     cy.get(side)
    //         .contains('Исходящие')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(1) > div > div')
    //         .click();
    //     cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(1) > div > div > div.inputPopup.ng-scope > div')
    //         .contains('склад Д2 AutoOEM')
    //         .click();
    //     cy.get('#content')
    //         .contains('Применить')
    //         .click();
    //     cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div')
    //         .contains('склад Д2 AutoOEM')
    //         .should('be.visible');
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('Move return incoming', function () {
    //     cy.get(side)
    //         .contains('Возврат (входящие)')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-3 > div > div')
    //         .click();
    //     cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-3 > div > div > div.inputPopup.ng-scope > div')
    //         .contains('РУССКАЯ ДЕРЕВНЯ')
    //         .click();
    //     cy.get('#content')
    //         .contains('Применить')
    //         .click();
    //     /*cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div')
    //         .contains('РУССКАЯ ДЕРЕВНЯ')
    //         .should('be.visible')*/
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('Move return outgoing', function () {
    //     cy.get(side)
    //         .contains('Возврат (исходящие)')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
    //         .contains('Список заявок на возврат перемещения пуст')
    //         .should('be.visible');
    //     //cy.wait('@RES').its('status').should('eq', 200)

    // })

    // it('Details waiting for confirm', function () {
    //     cy.get(side)
    //         .contains('Детали, ожидающие подтверждения')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
    //         .contains('Список деталей пуст')
    //         .should('be.visible');
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('Details for return to partners', function () {
    //     cy.get(side)
    //         .contains('Детали к возврату партерам')
    //         .click({ force: true });
    //     cy.get('#filter-type')
    //         .select('Легковая');
    //     cy.get('#content')
    //         .contains('Применить')
    //         .click();
    //     cy.get('#content > div > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
    //         .contains('Список деталей пуст')
    //         .should('be.visible');
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('New sales invoice', function () {
    //     cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div > div:nth-child(7) > div:nth-child(2)')
    //         .contains('Новые')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
    //         .contains('Список расходных накладных пуст')
    //         .should('be.visible');
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('Confirmed sales invoice', function () {
    //     cy.get(side)
    //         .contains('Подтвержденные')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
    //         .contains('Список расходных накладных пуст')
    //         .should('be.visible');
    //     //cy.wait('@EMP').its('status').should('eq', 200)
    // })

    // it('Payed salec invoice', function () {
    //     cy.get(side)
    //         .contains('Оплаченные')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
    //         .contains('Список расходных накладных пуст')
    //         .should('be.visible');
    //     //cy.wait('@RES').its('status').should('eq', 200)

    // })

    // it('To send sales invoice ', function () {
    //     cy.get(side)
    //         .contains('На отправку')
    //         .click({ force: true });
    //     cy.get('#filter-number')
    //         .click()
    //         .type('2');
    //     cy.get('#content')
    //         .contains('Применить')
    //         .click();
    //     cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
    //         .contains('Хачик')
    //         .should('be.visible');

    // })

    // it('Sended', function () {
    //     cy.get(side)
    //         .contains('Отправленные')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
    //         .contains('Список расходных накладных пуст')
    //         .should('be.visible');

    // })

    // it('Returned', function () {
    //     cy.get(side)
    //         .contains('Возвраты')
    //         .click({ force: true });
    //     cy.get('#content > div > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
    //         .contains('Список деталей пуст')
    //         .should('be.visible');

    // })

    // it('New repairs', function () {
    //     cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div > div:nth-child(8) > div:nth-child(2)')
    //         .contains('Новые')
    //         .click({ force: true });
    //     cy.get('#content > div')
    //         .contains('Добавить заявку на ремонт')
    //         .click();
    //     cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebarWidget__wrapper > div:nth-child(3) > div')
    //         .contains('Перейти к ремонту')
    //         .click();
    //     cy.get('#content > div')
    //         .contains('Накладная на ремонт')
    //         .should('be.visible');
    //     cy.get('#content > div')
    //         .contains('Удалить')
    //         .click();
    //     cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div.modal-dialog.modal-sm > div > div > div.modal-footer.ng-scope')
    //         .contains('Удалить')
    //         .click();
    //     cy.get('#content > div')
    //         .contains('Список новых заявок на ремонт')
    //         .should('be.visible');
        //cy.wait('@EMP').its('status').should('eq', 200)
    // })
/*it('V remonte', function() {
  cy.get(':nth-child(8) > .nav > :nth-child(4) > .ng-binding')

      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Zavershennie', function() {
  cy.get(':nth-child(8) > .nav > :nth-child(5) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Obrabotannie', function() {
  cy.get(':nth-child(8) > .nav > :nth-child(6) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Zakritie', function() {
  cy.get(':nth-child(8) > .nav > :nth-child(7) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Po prihodu', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(1) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Po skladu', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(2) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Po prodazham', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(3) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Po peremesheniu vhod', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(4) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@RES').its('status').should('eq', 200)

})

it('Po peremesheniu ishod', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(5) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Po platezham', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(6) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

 it('Po zakazam', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(7) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Po skladu', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(8) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@RES').its('status').should('eq', 200)
})

it('Po vozvratom', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(9) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Po neoplachennim detalyam', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(10) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Po remontam', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(11) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Po zadacham', function() {
  cy.get(':nth-child(9) > .nav > :nth-child(12) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Informacia', function() {
  cy.get(':nth-child(10) > .nav > :nth-child(1) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Sotrudniki', function() {
  cy.get(':nth-child(10) > .nav > :nth-child(2) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Skladi', function() {
  cy.get(':nth-child(10) > .nav > :nth-child(3) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Postavshiki', function() {
  cy.get(':nth-child(10) > .nav > :nth-child(4) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@RES').its('status').should('eq', 200)

})

it('STO', function() {
  cy.get(':nth-child(10) > .nav > :nth-child(5) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Pokupateli', function() {
  cy.get(':nth-child(10) > .nav > :nth-child(6) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

 it('Scheta', function() {
  cy.get(':nth-child(10) > .nav > :nth-child(7) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('V avito obiavlenia', function() {
  cy.get(':nth-child(11) > .nav > :nth-child(1) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@RES').its('status').should('eq', 200)
})

it('V direkt', function() {
  cy.get(':nth-child(11) > .nav > :nth-child(2) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('V avito reklama', function() {
  cy.get(':nth-child(11) > .nav > :nth-child(3) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('UTM metki', function() {
  cy.get(':nth-child(11) > .nav > :nth-child(4) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Shabloni obiavlenyi', function() {
  cy.get(':nth-child(11) > .nav > :nth-child(5) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Gruppi fidov', function() {
  cy.get(':nth-child(11) > .nav > :nth-child(6) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Avito magazini', function() {
  cy.get(':nth-child(4) > :nth-child(12) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Assortinemti', function() {
  cy.get(':nth-child(13) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Faili', function() {
  cy.get(':nth-child(14) > .nav > :nth-child(1) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@RES').its('status').should('eq', 200)

})

it('Shemi', function() {
  cy.get(':nth-child(14) > .nav > :nth-child(2) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Sopostavleniya', function() {
  cy.get(':nth-child(14) > .nav > :nth-child(3) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

 it('Avtoimport', function() {
  cy.get(':nth-child(14) > .nav > :nth-child(4) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Skidki', function() {
  cy.get(':nth-child(15) > .nav > :nth-child(1) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@RES').its('status').should('eq', 200)
})

it('Nacenki', function() {
  cy.get(':nth-child(15) > .nav > :nth-child(2) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Dobavit predzakaz', function() {
  cy.get(':nth-child(16) > .nav > :nth-child(1) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Spisok predzakazov', function() {
  cy.get(':nth-child(16) > .nav > :nth-child(2) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Spisok povtornih obrashenyi', function() {
  cy.get(':nth-child(16) > .nav > :nth-child(3) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Istoriya zvonkov', function() {
  cy.get(':nth-child(17) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@RES').its('status').should('eq', 200)
})

it('Zadachi sotrudnikov', function() {
  cy.get(':nth-child(18) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Gruppi polzovatelei', function() {
  cy.get(':nth-child(19) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Prava dostupa', function() {
  cy.get(':nth-child(20) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})

it('Dobavit kompaniyu', function() {
  cy.get(':nth-child(4) > :nth-child(21) > .ng-binding')
      .click( {force:true} )
      //cy.wait('@EMP').its('status').should('eq', 200)
})*/


