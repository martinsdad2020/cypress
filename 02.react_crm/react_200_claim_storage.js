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

describe('claim storage', function () {
    beforeEach('cookie', function () {
        cy.setCookie('guid-1', '%7B66E14AEB-559A-8B1B-1E3E-491DE5A506DE%7D')
        cy.server();
        cy.route('https://crm.api.apgrup.ru/v1/**')
            .as('ww');
    });

    it("visit apgrup", function () {
        cy.visit("https://react.apgrup.ru");
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

    it('at a storage', function () {
        cy.get(side)
            .contains('Претензионный склад')
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
            .contains('Бампер передний')
            .click();
        cy.get('#filter-isFromRepair')
            .select('Нет');
        cy.get('#filter-original')
            .select('Да');
        cy.get('#filter-code')
            .type('00023103160004')
            .should('value', '00023103160004');
        cy.get('#filter-number')
            .type('369');
        cy.get('.app__content')
            .contains('Создатель')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('Воропаев')
            .click();  
        cy.get('.app__content')
            .contains('Поставщик')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('ПРОЧИЕ')
            .click();
        cy.get('#filter-used')
            .select('Да');
        cy.get('#filter-condition')
            .select('Плохое');
        cy.get('#filter-rating')
            .select('1');
        cy.get('.inputDate > #filter-date')
            .type('06062017');
        cy.get('#filter-type')
            .select('Легковая');
        cy.get('.app__content')
            .contains('Марка')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('Geely')
            .click();
        cy.get('.app__content')
            .contains('Модель')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('EMGRAND')
            .click();
        cy.get('.app__content')
            .contains('Поколение')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('EMGRAND c 2008 г.')
            .click();
        cy.get('#filter-rack')
            .type('БМ-1');
        cy.get('#filter-section')
            .type('878');
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.wait(2000);
        cy.get('.collectionTable__container')
            .contains('Geely')
            .should('be.visible');
        cy.get('.collectionTable__container')
            .contains('Ford')
            .should('not.be.visible');
        cy.get('.app__content')
            .contains('Очистить')
            .click();
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.wait(2000);
        cy.get('.collectionTable__container')
            .contains('Ford')
            .should('be.visible');
    });
});