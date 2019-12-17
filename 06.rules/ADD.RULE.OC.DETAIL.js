let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let side = '._2Hrbd'

// редактирование оцененной детали / АСП Пулково
// ДЕТАЛИ АСП ОЦЕНЕННЫЕ asp.oc.detali@alfa.ru 123456
// 'guid-217', '{CC975CB2-EC25-A787-9CB4-F8127B0868C5}'

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
            .type('Редактирование оцененной детали{enter}');
        cy.get('.E42Z0')
            .contains('Редактирование оцененной детали')
            .click();
        cy.get('.active > .BuNeL')
            .contains('Права')
            .click();
        cy.get('.Ukvj9') // поле с выбором источника правил(компания, склад, детали)
            .children()
            .eq(2)
            .type('детали{enter}');

        cy.get('.xOjeM') // правило
            .children()
            .eq(3)
            .type('ГТД у оцененной{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('значения атрибутов детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Инвентаризировать деталь{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Видеть детали на складе{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Оригинал у оцененной детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Оригинальный номер оцененной детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Примечание оцененной детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Дефекты оцененной детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('марки автомобилей для оцененной детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('цвет оцененной детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Комментарий оцененных деталей{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Группа у оцененной детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('тип кузова оцененной детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('"Общее состояние" оцененной{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('"Повреждения" у оцененной{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('фотографий у оцененных{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('историю цен детали{enter}{enter}');
        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Производитель детали{enter}{enter}');

        cy.get('.Ukvj9') // поле с выбором источника правил(компания, склад, детали)
            .children()
            .eq(2)
            .type('склад{enter}');

        cy.get('.xOjeM')
            .children()
            .eq(3)
            .type('Видеть детали на складе{enter}{enter}');

        cy.get('.E42Z0')
            .contains('Сохранить')
            .click();
    });
});