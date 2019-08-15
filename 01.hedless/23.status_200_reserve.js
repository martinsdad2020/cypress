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

describe('reserve', function () {
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
        cy.wait(3000);
    });

    it('at a storage', function () {
        cy.get('.sidebar__menu')
            .contains('В резерве')
            .click();
        cy.wait(2000);
        cy.get('.inputDate > #filter-reservedFrom')
            .type('15.08.2019');
        cy.get('.inputDate > #filter-reservedTo')
            .type('31.01.2020');
        cy.get('#filter-maker')
            .select('Филихин Даниил');
        cy.get('#filter-buyer')
            .select('ZAPCAR');
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.wait(2000);
        cy.get('.collectionTable__container')
            .contains('Renault Fluence')
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
        cy.wait(2000);
        cy.get('.collectionTable__container')
            .contains('Lexus')
            .should('be.visible');
    });
});