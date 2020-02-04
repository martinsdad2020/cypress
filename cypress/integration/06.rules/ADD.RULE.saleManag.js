let side = '._2Hrbd'

describe('add rule', function() {
    it('visit apgrup', function() {
        cy.setCookie('guid-1', '{693E078B-9FA4-3103-092F-8EFF68DC5CA7}')
        cy.visit("https://apgrup.ru/");
        cy.get('._2Pypd')
            .should('not.be.visible'); // logo
        cy.auth('ra-nt-office@yandex.ru', 'superp@ss');
        cy.asp('Z_test', 'Z');
    });


    it('rule1', function() {
        cy.get(side)
            .contains('Права доступа')
            .click();
        // cy.get('.E42Z0')
        //     .contains('Добавить группу')
        //     .click();
        // cy.get('._3uesc > .form-control') // поле название группы
        //     .type('Добавление детали{enter}');
        // cy.get('.E42Z0')
        //     .contains('Добавление детали')
        //     .click();
        // cy.get('.active > .BuNeL')
        //     .contains('Права')
        //     .click();
        // cy.get('.Ukvj9') // поле с выбором источника прав(компания, склад, детали)
        //     .children()
        //     .eq(2)
        //     .type('детали{enter}');

        // // детали
        // cy.get('.xOjeM') // правило
        //     .children()
        //     .eq(3)
        //     .type('ГТД у оцененной{enter}{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Цена закупки детали{enter}{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Цена продажи детали{enter}{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('поле цвет оцененной детали{enter}{enter}');

        // // прием деталей
        // cy.get('.Ukvj9') // поле с выбором источника прав(компания, склад, детали)
        //     .children()
        //     .eq(2)
        //     .type('прием деталей{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Создавать приходную накладную и добавлять детали{enter}{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Видеть приходную накладную и детали в ней{enter}{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Подтверждать приходную накладную{enter}{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Отменять подтверждение приходной накладной{enter}{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Удалять пустую приходную накладную (любую){enter}{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Удалять фото оцененных деталей{enter}{enter}');

        // // склад
        // cy.get('.Ukvj9') // поле с выбором источника прав(компания, склад, детали)
        //     .children()
        //     .eq(2)
        //     .type('склад{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Видеть наименование склада{enter}{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Видеть детали на складе{enter}{enter}');

        // // компания
        // cy.get('.Ukvj9') // поле с выбором источника прав(компания, склад, детали)
        //     .children()
        //     .eq(2)
        //     .type('компания{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Создавать и редактировать поставщика{enter}{enter}');
        // cy.get('.xOjeM')
        //     .children()
        //     .eq(3)
        //     .type('Видеть цены своих деталей{enter}{enter}');

        // cy.get('.E42Z0')
        //     .contains('Сохранить')
        //     .click();
    });
});