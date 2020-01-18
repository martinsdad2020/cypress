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

let randGroup = randomInteger(0, 17).toFixed(0);
let randName = randomInteger(0, 10).toFixed(0);

describe('waiting for submit', function () {
    beforeEach('cookie', function () {
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
        cy.wait(3000);
    });

    it('at a storage', function () {
        cy.get(side)
            .contains('Ожидают подтверждения')
            .click();
        cy.wait(2000);
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
        cy.wait(2000);
        cy.get('.inputAutocomplete__popup')
            .contains('Решетка в бампер центральная')
            .click();
        cy.get('#filter-code')
            .type('00020103150138')
            .should('value', '00020103150138');
        cy.get('#filter-order')
            .type('62464');
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.wait(1000);
        cy.get('.collectionTable__container')
            .contains('Peugeot 207 c 2006')
            .should('be.visible');
        cy.get('.collectionTable__container')
            .contains('Lexus')
            .should('not.be.visible');
        cy.get('.app__content')
            .contains('Очистить')
            .click();
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.wait(1000);
        cy.get('.collectionTable__container')
            .contains('Lexus')
            .should('be.visible');
    });
});