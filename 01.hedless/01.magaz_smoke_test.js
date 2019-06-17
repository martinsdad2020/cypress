//for (let i = 0; i < 10; i++) {
let head = '._3WKxw > :nth-child(1)'

describe("магаз", function () {

    it("visit", function () {
        cy.clearCookies()
        cy.visit("https://magaz.apgrup.ru")

    });
    // Шапка
    it('head', function () {
        cy.get('#root')
            .contains('О компании')
            .click();
        cy.get('#root')
            .contains('Мы рады приветствовать вас на сайте нашей компании.')
            .should('be.visible');
        cy.get('#root > div > div._3WKxw > div:nth-child(1) > div._1Aqxs > nav')
            .contains('Доставка')
            .click();
        cy.get('#root')
            .contains('AlfaDetali осуществляет доставку Товара:')
            .should('be.visible');
        cy.get('#root > div > div._3WKxw > div:nth-child(1) > div._1Aqxs > nav')
            .contains('Как купить')
            .click();
        cy.get('#root')
            .contains('Процедура покупки товара в интернет-магазине')
            .should('be.visible');
        cy.get('#root > div > div._3WKxw > div:nth-child(1) > div._1Aqxs > nav')
            .contains('Что с моим заказом?')
            .click();
        cy.get('#root > div > div._3eTHD > div > div > h1')
            .contains('Что с моим заказом?')
            .should('be.visible');
        cy.get('#root > div > div._3WKxw > div:nth-child(1) > div._1Aqxs > nav')
            .contains('Контакты')
            .click();
        cy.get('#root')
            .contains('Контакты')
            .should('be.visible');
    });

    //Вход с невалидной почтой
    it('invalid pass', function () {
        cy.get('#root')
            .contains('Вход / Регистрация')
            .click();
        cy.get('#root')
            .contains('Вход')
            .should('be.visible');
        cy.get(':nth-child(1) > ._2EEno > .aEtUW')
            .click()
            .clear()
            .type('invalid@u.ru')
            .should('value', 'invalid@u.ru');
        cy.get(':nth-child(2) > ._2EEno > .aEtUW')
            .click()
            .clear()
            .type('123456')
            .should('value', '123456');
        cy.get('form > .iFdeK')
            .click();
        cy.wait(3000);
        cy.get('#root')
            .contains('Пользователь с такой почтой не найден')
            .should('be.visible')
            .click();

    });
    //Вход с валидной почтой
    it('login', function () {
        cy.get('div:nth-child(1) > label > input')
            .click()
            .clear()
            .type('parole@provider.com')
            .should('value', 'parole@provider.com');
        cy.get('div:nth-child(2) > label > input')
            .click()
            .clear()
            .type('123456')
            .should('value', '123456');
        cy.get('form > .iFdeK')
            .click();
        cy.get('#root')
            .contains('Личный кабинет')
            .should('be.visible')
            .click();
        cy.get('#root')
            .contains('Выход')
            .click({ force: true });
    });

    //Восстановление пароля
    it('forgot pass', function () {
        cy.get('#root')
            .contains('Вход')
            .click();
        cy.get('#root')
            .contains('Забыли пароль?')
            .click();
        cy.get('#root')
            .contains('Восстановление пароля')
            .should('be.visible');
        cy.get('.aEtUW')
            .clear()
            .type('wrong_parole@provider.com')
            .should('value', 'wrong_parole@provider.com');
        cy.get('form > .iFdeK')
            .click();
        cy.wait(2000);
        cy.get('#root')
            .contains('На ваш почтовый ящик было отправлено письмо со ссылкой на восстановление пароля.')
            .should('be.visible');
    });
    //Регистрация(поля)
    it('registration', function () {
        cy.get('#root')
            .contains('Регистрация')
            .click();
        cy.get('[href="/register"]')
            .click();
        cy.get('#root')
            .contains('Эл.почта*')
            .should('be.visible');
        cy.get(':nth-child(1) > ._2EEno > .aEtUW')
            .clear()
            .type('invalid@u.ru')
            .should('value', 'invalid@u.ru');
        cy.get('#root')
            .contains('Пароль*')
            .should('be.visible');
        cy.get(':nth-child(2) > ._2EEno > .aEtUW')
            .clear()
            .type('123456')
            .should('value', '123456');
        cy.get('form > .iFdeK')
            .click();
        cy.get('#root')
            .contains('Вы не согласились с пользовательским соглашением ')
            .should('be.visible');
    });

    //нижняя часть
    it('footer', function () {
        cy.get('._2MwC6')
            .contains('О компании')
            .click();
        cy.get('#root')
            .contains('Мы рады приветствовать вас на сайте нашей компании.')
            .should('be.visible');
        cy.get('._2MwC6')
            .contains('Доставка')
            .click();
        cy.get('#root')
            .contains('AlfaDetali осуществляет доставку Товара:')
            .should('be.visible');
        cy.get('._2MwC6')
            .contains('Как купить')
            .click();
        cy.get('#root')
            .contains('Процедура покупки товара в интернет-магазине')
            .should('be.visible');
        cy.get('._2MwC6')
            .contains('Что с моим заказом?')
            .click();
        cy.get('#root')
            .contains('Что с моим заказом?')
            .should('be.visible');
        cy.get('._2MwC6')
            .contains('Новости')
            .click();
        cy.get('#root')
            .contains('Новости и статьи')
            .should('be.visible');
        cy.get('._2MwC6')
            .contains('Контактная информация')
            .click();
        cy.get('#root')
            .contains('Контакты')
            .should('be.visible');
        cy.get('._2MwC6')
            .contains('Возврат и гарантия')
            .click();
        cy.get('#root')
            .contains('Правила возврата Товара')
            .should('be.visible');
    });


    // переход на мобильную версию и обратно
    it('mobile', function () {
        cy.get('#root')
            .contains('Мобильная версия')
            .click();
        cy.get(':nth-child(2) > .scLbW > ._1rr64')
            .contains('Страница')
            .should('be.visible');
        cy.get(':nth-child(2) > .fvTRC > label > .Ex8kQ')
            .click();
        cy.get('.jgX78 > :nth-child(1)')
            .contains('Полная версия сайта')
            .click();
        cy.get('#root')
            .contains('1. Возврат Товара, поврежденного при транспортировке')
            .should('be.visible');
    });

    //авторизация с правильной почтой и неправильным паролем
    it('wrong password', function () {
        cy.get(head)
            .contains('Вход')
            .click({ force: true });
        cy.get('#root')
            .contains('Вход')
            .should('be.visible');
        cy.get(':nth-child(1) > ._2EEno > .aEtUW')
            .clear()
            .type('parole@provider.com');
        cy.get(':nth-child(2) > ._2EEno > .aEtUW')
            .click()
            .type('1234567');
        cy.get('form > button')
            .click();
        cy.get('#root')
            .contains('Неверный пароль')
            .should('be.visible');
    });
});
