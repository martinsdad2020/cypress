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

describe('income 200', function () {
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
            .type('29461');
        cy.get('.app__content')
            .contains('Принял')
            .next()
            .click();
        cy.get(':nth-child(3) > [field="field"]')
            .contains('Главный Админ')
            .click();
        cy.get('.app__content')
            .contains('Поставщик')
            .next()
            .click();
        cy.get(':nth-child(4) > [field="field"]')
            .contains('Эрго-Русь')
            .click();
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.get('.collectionTable__container')
            .contains('Главный Админ')
            .should('be.visible');
        cy.get('.collectionTable__container')
            .contains('Эрго-Русь')
            .should('be.visible');
        cy.get('.collectionTable__table')
            .contains('Подтвержден')
            .should('be.visible');
        cy.get('.collectionTable__container')
            .contains('29461')
            .should('be.visible')
            .click({force:true});
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
            .contains('Датчик кондиционера')
            .should('be.visible')
        cy.get('span > .fa')
            .click();
        cy.get('.contextPopover')
            .contains('Изменить')
            .click();
        cy.wait(3000);
        cy.get('#form-kod')
            .type('123213123')
            .should('value', '123213123');
        cy.get('.popup__close')
            .click({ force: true });
        cy.get('.collectionTable__body-label > .inputBoolean > .inputBoolean__checkbox')
            .click();
    });
});
