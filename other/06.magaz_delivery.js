describe("магаз доставка", function () {

    it("visit", function () {
        cy.clearCookies()
        cy.visit("https://magaz.apgrup.ru")

        //Авто на главной странице отображаются, выбираем ауди
        cy.get('#root')
            .contains('Все марки')
            .click();
        cy.get('#root')
            .contains('Audi')
            .should('be.visible')
            .click();
        cy.get('._20fvB')
            .contains('Купить')
            .click();
        cy.get('._2lT_o')
            .contains('Товар успешно добавлен')
            .should('be.visible');
        cy.get('._2lT_o')
            .contains('Перейти в корзину')
            .click();
        cy.get('#root')
            .contains('Корзина')
            .should('be.visible');
        //Оформляем доставку
        cy.get('#root')
            .contains('Оформить заказ')
            .click();
        cy.get('._3eTHD')
            .contains('Доставка')
            .click();
        cy.get('#root')
            .contains('Город')
            .should('be.visible');
        cy.get('form > .iFdeK')
            .click();
        cy.get('#root')
            .contains('Введите город')
            .should('be.visible');
        cy.get('#root')
            .contains('Введите улицу')
            .should('be.visible');
        cy.get('#root')
            .contains('Введите номер дома')
            .should('be.visible');
        cy.get(':nth-child(1) > ._2EEno > .aEtUW')
            .clear()
            .type('asd')
            .should('value', 'asd');
        cy.get(':nth-child(2) > ._2EEno > .aEtUW')
            .clear()
            .type('qwq')
            .should('value', 'qwq');
        cy.get(':nth-child(3) > ._2EEno > .aEtUW')
            .clear()
            .type('10')
            .should('value', '10');
        cy.get('form > .iFdeK')
            .click()
        cy.get('#root')
            .contains('Артикул')
            .should('be.visible');
        cy.get('#root')
            .contains('Отправить смс')
            .click();
        cy.get('#root')
            .contains('Введите')
            .should('be.visible');
        cy.get('._26W7Q > .dmvaJ > ._2EEno > .aEtUW')
            .clear()
            .type('1234567890')
            .should('value', '+7 (123) 456-78-90');
        cy.get('#root')
            .contains('Отправить смс')
            .click({ force: true });
        cy.wait(1000);
        cy.get('._26W7Q > .dmvaJ > ._2EEno > .aEtUW')
            .click({ force: true })
            .type('123456');
        cy.get('._39Hhf')
            .click({ force: true });
        cy.get(':nth-child(4) > .iFdeK')
            .contains('Подтвердить заказ')
            .click({ force: true });
        cy.get('#root')
            .contains('Спасибо за ваш заказ!')
            .should('be.visible');
    });
});
