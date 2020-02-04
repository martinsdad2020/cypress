let side = '._2Hrbd'
    // let aspmanag = 'asp.add.detail@alfa.ru'

// asp.add.detail@alfa.ru 123456
// guid-219', '{05B4EA8C-AAEE-86D0-89FB-A509EC9B5A41}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min)
    return rand;
};

let randProvider = randomInteger(0, 49).toFixed(0); // поставщик
let randGroup = randomInteger(0, 17).toFixed(0); // группа
let randName = randomInteger(0, 10).toFixed(0); // наименование
let randProducer = randomInteger(0, 500).toFixed(0); // производитель
let randColor = randomInteger(0, 7).toFixed(0); // цвет
let randRate = randomInteger(0, 4).toFixed(0); // рейтинг
let randDefect = randomInteger(0, 24).toFixed(0); // рейтинг
let randBrand = randomInteger(0, 88).toFixed(0); // бренд
let randModel = randomInteger(0, 1).toFixed(0); // модель
let randGen = randomInteger(0, 0).toFixed(0); // поколение

describe('add new detail', function() {
    beforeEach('cookie', function() {
        cy.setCookie('guid-219', '{05B4EA8C-AAEE-86D0-89FB-A509EC9B5A41}')
        cy.server();
        cy.route('https://crm.api.apgrup.ru/v1/**')
            .as('ww');
    });

    it('visit apgrup', function() {
        cy.visit("https://apgrup.ru/");
        cy.get('._2Pypd')
            .should('not.be.visible'); // logo
        cy.auth('asp.add.detail@alfa.ru', '123456');
    })

    it('pick asp pulkovo', function() {
        cy.asp('АСП', 'склад АСП');
    });

    let re = require('../sections.json')
    for (let sec of re.dataSections.sectionInv) {
        it(`Unvisible ${sec}`, function() {
            cy.notVisibleSection(sec)
        })
    }

    it('visible', function() {
        cy.get('._3-DYD')
            .contains('Компания')
            .should('be.visible');
        cy.get('._3-DYD')
            .contains('Склад')
            .should('be.visible');
        cy.get(side)
            .contains('Приходные накладные')
            .should('be.visible');
        cy.get(side)
            .contains('Список деталей')
            .should('be.visible');
        cy.get(side)
            .contains('На складе')
            .should('be.visible');
        cy.get(side)
            .contains('Неоцененные')
            .should('be.visible');
        cy.get(side)
            .contains('Неопознанные')
            .should('be.visible');
        cy.get(side)
            .contains('Поставщики')
            .should('be.visible');
    });

    it('add new detail', function() {
        cy.get(side)
            .contains('Приходные накладные')
            .click();
        cy.wait(1000);
        cy.get('button')
            .contains('Добавить')
            .click();
        cy.wait(1000);

        // поставщик
        cy.get('._1a95Z > .select > .select__control > .select__value-container')
            .type('Запкар{enter}{enter}');
        cy.wait(1000);
        // cy.get('.modal-footer')
        //   .contains('Закрыть')
        //   .click();
        cy.get('.E42Z0')
            .contains('Добавить деталь')
            .click();
        cy.wait(1000);

        // группа
        cy.get('.modal-body')
            .contains('Группа')
            .next()
            .click();
        cy.wait(500);
        cy.get('.css-11unzgr')
            .eq(0)
            .children()
            .eq(randGroup)
            .click();

        // наименование
        cy.get('.modal-body')
            .contains('Наименование')
            .next()
            .type('а{enter}');

        // количество
        cy.get('.modal-body')
            .contains('Количество')
            .next()
            .type('1');

        // оригинальный номер
        cy.get('.modal-body')
            .contains('Оригинальный номер')
            .next()
            .type('Gh84');

        // стеллаж
        cy.get('.modal-body')
            .contains('Стеллаж')
            .next()
            .type('Y7');

        // секция
        cy.get('.modal-body')
            .contains('Секция')
            .next()
            .type('I9');

        // описание повреждений
        cy.get('.modal-body')
            .contains('Описание повреждений')
            .next()
            .type('Вмятина');

        // примечание
        cy.get('.modal-body')
            .contains('Примечание')
            .next()
            .type('Заметка');

        // внутренний комментарий
        cy.get('.modal-body')
            .contains('Внутренний комментарий')
            .next()
            .type('коммент');

        // цвет
        cy.get('.modal-body')
            .contains('Цвет')
            .next()
            .type('Белый{enter}{enter}')
        cy.wait(500);
    });

    it('add new car', function() {
        // отображается коммен
        cy.get('.modal-body')
            .contains('коммент')
            .should('be.visible');

        cy.get(':nth-child(2) > ._3uesc > .select > .select__control > .select__value-container')
            .type('Opel{enter}');

        // cy.get('#selectMenu') // список с марками
        //   .eq(8)
        //   .children()
        //   .eq(randBrand)
        //   .click();
        cy.get(':nth-child(3) > ._3uesc > .select > .select__control > .select__value-container')
            .type('Omega{enter}');
        cy.get('.col-sm-8 > ._3uesc > .select > .select__control > .select__value-container')
            .type('Omega A{enter}');
        // cy.get('#carPiсker-model')
        //   .click();
        // cy.get('.inputAutocomplete__popup') // список с моделями
        //   .eq(9)
        //   .children()
        //   .eq(randModel)
        //   .click();
        // cy.get('#carPiсker-generation')
        //   .click()
        // cy.get('.inputAutocomplete__popup') // список с моделями
        //   .eq(10)
        //   .children()
        //   .eq(randGen)
        //   .click();
        cy.get(':nth-child(1) > .panel-body')
            .contains('Добавить')
            .click();
        cy.get('.modal-body')
            .contains('Omega A 1986 - 1994')
            .should('be.visible');
        cy.get('._3Bz1P > .fa')
            .click();
        // cy.get('tbody > tr.ng-scope > :nth-child(3)') // область для проверки поколения авто на видимость после добавления к детали в окне ред.
        //   .contains('A3 [8PA] 2004 - 2013')
        //   .should('be.visible');
    });

    it('submit detail', function() {
        cy.get('thead > tr > :nth-child(2) > ._1jidx > ._3o-8L')
            .click();
        cy.get('.E42Z0')
            .contains('Подтвердить')
            .click();
        cy.wait(1000);
        cy.get('.E42Z0')
            .contains('Отменить')
            .should('be.visible');
    });

    it('add price', function() {
        cy.get('._2WIgO > .table > tbody > tr > :nth-child(2) > a')
            .click();
        cy.wait(1000)
        cy.get('.app__content')
            .contains('Оценить')
            .click();
        cy.get('#form-purchasePrice')
            .type('777');
        cy.get('#form-sellingPrice')
            .type('777');
        cy.get('.popup__inner')
            .contains('Сохранить')
            .click();
        cy.wait(500);
    });

    it('check data', function() {
        cy.get('.app__content')
            .contains('Нет прав')
            .should('not.be.visible');
        cy.get('.app__content')
            .contains('Y7')
            .should('be.visible');
        cy.get('.app__content')
            .contains('I9')
            .should('be.visible');
        cy.get('.app__content')
            .contains('GH84')
            .should('be.visible');
        cy.get('.app__content')
            .contains('Запкар')
            .should('be.visible');
        cy.get('.app__content')
            .contains('Заметка')
            .should('be.visible');
        cy.get('.app__content')
            .contains('коммент')
            .should('be.visible');
        cy.get('.app__content')
            .contains('Вмятина')
            .should('be.visible');
        cy.get('.app__content')
            .contains('Белый')
            .should('be.visible');
        cy.get('.app__content')
            .contains('Opel Omega A 1986 - 1994')
            .should('be.visible');
        cy.get('.app__content')
            .contains('777,00')
            .should('be.visible');

        cy.get('.partModels__item')
            .contains('Открыть в магазине')
            .click({ force: true });
    });

    it('other', function() {
        cy.get(side)
            .contains('На складе')
            .click();
        cy.get('.E42Z0')
            .contains('Нет прав')
            .should('not.be.visible');
        cy.get(side)
            .contains('Неоцененные')
            .click();
        cy.get('.E42Z0')
            .contains('Нет прав')
            .should('not.be.visible');
        cy.get(side)
            .contains('Неопознанные')
            .click();
        cy.get('.E42Z0')
            .contains('Нет прав')
            .should('not.be.visible');
        cy.get(side)
            .contains('Поставщики')
            .click();
        cy.get('.E42Z0')
            .contains('Нет прав')
            .should('not.be.visible');
    });
});