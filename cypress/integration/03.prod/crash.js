describe('crash', function () {
    // beforeEach('cookie', function () {
    //     // cy.setCookie('guid-1', '%7B67F7C782-1A21-C70D-DC3F-4C2B6CA27E6B%7D')
    //     // cy.server();
    //     // cy.route('https://api.alfa-mt.ru/v1/**')
    //     //     .as('ww',);
    // });
    for (let i = 0; i < 550; i++) { // 40 это колво циклов хватит на 10 часов
        it('alfa-mt.ru', function () {
            cy.visit('https://alfa-mt.ru/');
            cy.wait(2000);
            // cy.wait('@ww').its('status').should('eq', 200);
            cy.get('#app')
                .contains('Авторизация')
                .should('be.visible');
        });
        it('alfadetali.ru', function () {
            cy.visit('https://alfadetali.ru/');
            // cy.wait('@ww').its('status').should('eq', 200);
            cy.get('#root')
                .contains('запчасти')
                .should('be.visible');
        });
        it('express.alfadetali.ru', function () {
            cy.visit('https://express.alfadetali.ru/');
            // cy.wait('@ww').its('status').should('eq', 200);
            cy.get('#app')
                .contains('Авторизация')
                .should('be.visible');
        });
        it('admin.alfa-mt.ru', function () {
            cy.visit('https://admin.alfa-mt.ru/', { auth: { username: 'admin', password: 'Hw8SwnRZJk9' } })
            // cy.wait('@ww').its('status').should('eq', 200);
            cy.get('body')
                .contains('Change generations and models')
                .should('be.visible');
            cy.wait(30000);
        });
    };
});