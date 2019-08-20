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

describe('unestimate', function () {
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
        cy.wait(3000);
    });

    it('at a storage', function () {
        cy.get(side)
            .contains('Неоцененные')
            .click();
        cy.get('.app__content')
            .contains('Группа')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('Колесные диски')
            .click();
        cy.get('.app__content')
            .contains('Наименование')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('Диск запасного колеса (докатка)')
            .click();
        cy.get('#filter-isFromRepair')
            .select('Нет');
        cy.get('#filter-isInventoried')
            .select('Нет');
        cy.get('#filter-original')
            .select('Нет');
        cy.get('#filter-code')
            .type('00021208190002')
            .should('value', '00021208190002');
        cy.get('#filter-number')
            .type('29462');
        cy.get('.app__content')
            .contains('Поставщик')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('Миронов')
            .click();
        cy.get('#filter-used')
            .select('Нет');
        cy.get('#filter-type')
            .select('Легковая');
        cy.get('.app__content')
            .contains('Марка')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('Aston Martin')
            .click();
        cy.get('.app__content')
            .contains('Модель')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('DB9')
            .click();
        cy.get('.app__content')
            .contains('Поколение')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('DB9 2003 - 2016')
            .click();
        cy.get('#filter-rating')
            .select('5');
        cy.get('.app__content')
            .contains('Диаметр, дюймов')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .eq(6)
            .children()
            .eq(1)
            .click();
        cy.get('.app__content')
            .contains('Тип диска')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .eq(7)
            .children()
            .eq(0)
            .click();
        cy.get('.app__content')
            .contains('Ширина обода')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .eq(8)
            .children()
            .eq(3)
            .click();
        cy.get('.app__content')
            .contains('Количество отверстий')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .eq(9)
            .children()
            .eq(3)
            .click();
        cy.get('.app__content')
            .contains('Диаметр расположение отверстий')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .eq(10)
            .children()
            .eq(1)
            .click();
        cy.get('.app__content')
            .contains('Вылет')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .eq(11)
            .children()
            .eq(1)
            .click(); 
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.wait(2000);
        cy.get('.collectionTable__container')
            .contains('Aston Martin')
            .should('be.visible');
        cy.get('span > .fa')
            .click();
        cy.get('.contextPopover')
            .contains('Изменить')
            .click();
        cy.get('.modal-body')
            .contains('Информация о детали') 
            .should('be.visible');
        cy.get('.popup__close')
            .click();
        cy.wait(2000);
        cy.get('.collectionTable__container')
            .contains('GAZ')
            .should('not.be.visible');
        cy.get('.app__content')
            .contains('Очистить')
            .click();
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.wait(2000);
        cy.get('.collectionTable__container')
            .contains('GAZ')
            .should('be.visible');
    });
});