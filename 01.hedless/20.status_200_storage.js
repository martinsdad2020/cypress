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

describe('storage', function () {
    before('cookie', function () {
        cy.setCookie('guid-1', '%7B66E14AEB-559A-8B1B-1E3E-491DE5A506DE%7D')
        cy.server();
        cy.route('https://crm.api.apgrup.ru/v1/**')
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
        cy.wait(1000);
    });

    it('at a storage', function () {
        cy.get('.sidebar__menu')
            .contains('На складе')
            .click();
        cy.get('.app__content')
            .contains('Группа')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('Кузов наружные')
            .click();
        cy.get('.app__content')
            .contains('Наименование')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('Накладка переднего крыла левого')
            .click();
        cy.get('#filter-isFromRepair')
            .select('Нет');
        cy.get('#filter-isInventoried')
            .select('Нет');
        cy.get('#filter-original')
            .select('Да');
        cy.get('#filter-code')
            .type('00020406150054')
            .should('value', '00020406150054');
        cy.get(':nth-child(7) > label')
            .contains('Поставщик')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('ПРОЧИЕ')
            .click();
        // cy.get('#filter-type')
        //     .select('Легковая');
        // cy.get(':nth-child(2) > label')
        //     .next()
        //     .eq(2)
        //     .click();
        // cy.get('.inputAutocomplete__popup')
        //     .contains('Cadillac')
        //     .click();
        // cy.get('.app__content')
        //   .contains('Применить')
        //   .click();
        // cy.wait(1000);
        // cy.get('.collectionTable__container')
        //   .contains('Cadillac')
        //   .should('be.visible');
        // cy.get('.app__content')
        //   .contains('Очистить')
        //   .click();
        // cy.get('.app__content')
        //   .contains('Применить')
        //   .click();
        // cy.get('.collectionTable__container')
        //   .contains('Cadillac')
        //   .should('not.be.visible');
    });
});