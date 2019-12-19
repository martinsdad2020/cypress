let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let side = '._2Hrbd'

// добавление детали / АСП Пулково
// ДЕТАЛЬ АСП ДОБАВИТЬ asp.add.detail@alfa.ru 123456
// guid-219', '{05B4EA8C-AAEE-86D0-89FB-A509EC9B5A41}

describe('add rule', function () {
    beforeEach('cookie', function () {
        cy.setCookie('guid-1', '{693E078B-9FA4-3103-092F-8EFF68DC5CA7}')
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
    });

    it('pick ruusian village', function () {
        cy.get(side)
            .contains('Компания')
            .next()
            .click();
        cy.get(companies) // выпадающий список со складами
            .contains('АСП')
            .click();
        cy.get(side)
            .contains('Склад')
            .next()
            .click();
        cy.get(storages) // выпадающий список со складами
            .contains('склад')
            .click();
        cy.get('._2JR3u')
            .contains('7838.RU')
            .type('АСП{enter}');
        cy.wait(1000);
    });

    it('rule1', function () {
        cy.get(side)
            .contains('Права доступа')
            .click();
        cy.get('.E42Z0')
            .contains('Добавить группу')
            .click();
        cy.get('._3uesc > .form-control') // поле название группы
            .type('Добавление детали{enter}');
        cy.get('.E42Z0')
            .contains('Добавление детали')
            .click();
        cy.get('.active > .BuNeL')
            .contains('Права')
            .click();
        cy.get('.Ukvj9') // поле с выбором источника прав(компания, склад, детали)
            .children()
            .eq(2)
            .type('детали{enter}');

// детали
        cy.get('.xOjeM') // правило
            .children()
            .eq(3)
            .type('ГТД у оцененной{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Цена закупки детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Цена продажи детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('поле цвет оцененной детали{enter}{enter}');

// прием деталей
        cy.get('.Ukvj9') // поле с выбором источника прав(компания, склад, детали)
            .children()
            .eq(2)
            .type('прием деталей{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Создавать приходную накладную и добавлять детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Видеть приходную накладную и детали в ней{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Подтверждать приходную накладную{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Отменять подтверждение приходной накладной{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Удалять пустую приходную накладную (любую){enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Удалять фото оцененных деталей{enter}{enter}');

// склад
        cy.get('.Ukvj9') // поле с выбором источника прав(компания, склад, детали)
            .children()
            .eq(2)
            .type('склад{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Видеть наименование склада{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Видеть детали на складе{enter}{enter}');

// компания
        cy.get('.Ukvj9') // поле с выбором источника прав(компания, склад, детали)
          .children()
          .eq(2)
          .type('компания{enter}');            
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Создавать и редактировать поставщика{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Видеть цены своих деталей{enter}{enter}');

        cy.get('.E42Z0')
            .contains('Сохранить')
            .click();
    });
});