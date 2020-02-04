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

describe('storage', function () {
    beforeEach('cookie', function () {
        cy.setCookie('guid-1', '{693E078B-9FA4-3103-092F-8EFF68DC5CA7}')
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
            .type('superp@ss');
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
        cy.get('._2JR3u')
          .contains('7838.RU')
          .type('АльфаДетали{enter}');
        cy.wait(1000);
    });

    it('at a storage', function () {
        cy.get(side)
            .contains('На складе')
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
            .type('00021508190002')
            .should('value', '00021508190002');
        cy.get(':nth-child(7) > label')
            .contains('Поставщик')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('ПРОЧИЕ')
            .click();
        cy.get('#filter-used')
            .select('Да');
        cy.get('#filter-condition')
            .select('Отличное');
        cy.get('#filter-rating')
            .select('5');
        cy.get('#filter-type')
            .select('Легковая');
        cy.get('.app__content')
            .contains('Марка')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('Ford America')
            .click();
        cy.get('.app__content')
            .contains('Модель')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('Explorer')
            .click();
        cy.get('.app__content')
            .contains('Поколение')
            .next()
            .click();
        cy.get('.inputAutocomplete__popup')
            .contains('Explorer c 2011 г.')
            .click();
        cy.get('#filter-rack')
            .type('Р107Н1');
        cy.get('#filter-section')
            .type('321');
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.wait(2000);
        cy.get('.collectionTable__container')
            .contains('Ford America')
            .should('be.visible');
        // cy.get('span > .fa').click();
        // cy.get('.contextPopover').contains('Изменить').click();
        // cy.get('.modal-body').contains('Информация о детали').should('be.visible');
        // cy.get('.popup__close').click();
        // cy.wait(2000);
        // cy.get('span > .fa').click();
        // cy.get('.contextPopover').contains('Добавить к ремонту').click();
        // cy.get('.modal-body').contains('Заявка на ремонт').should('be.visible');
        // cy.get('.popup__close').click();
        // cy.wait(2000);
        // cy.get('span > .fa').click();
        // cy.get('.contextPopover').contains('Утилизировать').click();
        // cy.get('.modal-body').contains('Утилизировать').should('be.visible');
        // cy.get('.popup__close').click();
        // cy.wait(2000);
        // cy.get('span > .fa').click();
        // cy.get('.contextPopover').contains('Оценить').click();
        // cy.get('.modal-body').contains('Оценить деталь').should('be.visible');
        // cy.get('.popup__close').click();
        // cy.wait(2000);
        // cy.get('span > .fa').click();
        // cy.get('.contextPopover').contains('Добавить в резерв').click();
        // cy.get('.modal-body').contains('Добавить в резерв').should('be.visible');
        // cy.get('.popup__close').click();
        // // cy.get('.modal-footer').contains('Закрыть').click({force:true});
        // cy.wait(2000);
        // cy.get('span > .fa').click();
        // cy.get('.contextPopover').contains('Инвентаризировать').click();
        // cy.get('.modal-body').contains('Вы действительно хотите').should('be.visible');
        // cy.get('.app__content').dblclick({force:true});
        // cy.wait(2000);
        // cy.get('span > .fa').click({force:true});
        // cy.get('.contextPopover').contains('На претензионный склад').click({force:true});
        // cy.get('.modal-body').contains('на претензионный склад').should('be.visible');
        // cy.get('.popup__close').click();
        cy.get('.collectionTable__container')
            .contains('Toyota')
            .should('not.be.visible');
        cy.get('.app__content')
            .contains('Очистить')
            .click();
        cy.get('.app__content')
            .contains('Применить')
            .click();
        cy.wait(2000);
        cy.get('.collectionTable__container')
            .contains('Toyota')
            .should('be.visible');
    });
});