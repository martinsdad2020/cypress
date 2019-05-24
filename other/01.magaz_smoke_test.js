//for (let i = 0; i < 10; i++) {
let head = '._3WKx > :nth-child(1)'

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
        cy.get(':nth-child(1) > ._2EEn > .aEtU')
            .click()
            .clear()
            .type('invalid@u.ru')
            .should('value', 'invalid@u.ru');
        cy.get(':nth-child(2) > ._2EEn > .aEtU')
            .click()
            .clear()
            .type('123456')
            .should('value', '123456');
        cy.get('form > .iFde')
            .click();
        cy.wait(3000);
        cy.get('._2201 > form')
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
        cy.get('form > .iFde')
            .click();
        cy.get('._3WKx > :nth-child(1) > :nth-child(2)')
            .contains('Личный кабинет')
            .should('be.visible');
        cy.get('.v3qQ')
            .contains('Выход')
            .click({ force: true });
    });

    //Восстановление пароля
    it('forgot pass', function () {
        cy.get(':nth-child(2) > ._12eX > ._2qfA')
            .click();
        cy.get('#root')
            .contains('Забыли пароль?')
            .click();
        cy.get('#root')
            .contains('Восстановление пароля')
            .should('be.visible');
        cy.get('.aEtU')
            .clear()
            .type('wrong_parole@provider.com')
            .should('value', 'wrong_parole@provider.com');
        cy.get('form > .iFde')
            .click();
        cy.wait(2000);
        cy.get('#root')
            .contains('На ваш почтовый ящик было отправлено письмо со ссылкой на восстановление пароля.')
            .should('be.visible');
    });
    //Регистрация(поля)
    it('registration', function () {
        cy.get(head)
            .contains('Регистрация')
            .click({ force: true });
        cy.get('[href="/register"]')
            .click();
        cy.get('#root')
            .contains('Эл.почта*')
            .should('be.visible');
        cy.get(':nth-child(1) > ._2EEn > .aEtU')
            .clear()
            .type('invalid@u.ru')
            .should('value', 'invalid@u.ru');
        cy.get('#root')
            .contains('Пароль*')
            .should('be.visible');
        cy.get(':nth-child(2) > ._2EEn > .aEtU')
            .clear()
            .type('123456')
            .should('value', '123456');
        cy.get('form > .iFde')
            .click();
        cy.get('._3yLY')
            .contains('Вы не согласились с пользовательским соглашением ')
            .should('be.visible');
    });

    //нижняя часть
    it('footer', function () {
        cy.get('._2MwC')
            .contains('О компании')
            .click();
        cy.get('#root')
            .contains('Мы рады приветствовать вас на сайте нашей компании.')
            .should('be.visible');
        cy.get('._2MwC')
            .contains('Доставка')
            .click();
        cy.get('#root')
            .contains('AlfaDetali осуществляет доставку Товара:')
            .should('be.visible');
        cy.get('._2MwC')
            .contains('Как купить')
            .click();
        cy.get('#root')
            .contains('Процедура покупки товара в интернет-магазине')
            .should('be.visible');
        cy.get('._2MwC')
            .contains('Что с моим заказом?')
            .click();
        cy.get('#root')
            .contains('Что с моим заказом?')
            .should('be.visible');
        cy.get('._2MwC')
            .contains('Новости')
            .click();
        cy.get('#root')
            .contains('Новости и статьи')
            .should('be.visible');
        cy.get('._2MwC')
            .contains('Контактная информация')
            .click();
        cy.get('#root')
            .contains('Контакты')
            .should('be.visible');
        cy.get('._2MwC')
            .contains('Возврат и гарантия')
            .click();
        cy.get('#root')
            .contains('Правила возврата Товара')
            .should('be.visible');
    });


    // переход на мобильную версию и обратно
    it('mobile', function () {
        cy.get('.Y2nU')
            .contains('Мобильная версия')
            .click();
        cy.get(':nth-child(2) > .scLb > ._1rr6')
            .contains('Страница')
            .should('be.visible');
        cy.get(':nth-child(2) > .fvTR > label > .Ex8k > ._1iTM')
            .click();
        cy.get('.jgX7 > :nth-child(1)')
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
        cy.get(':nth-child(1) > ._2EEn > .aEtU')
            .clear()
            .type('parole@provider.com');
        cy.get(':nth-child(2) > ._2EEn > .aEtU')
            .click()
            .type('1234567');
        cy.get('form > button')
            .click();
        cy.get('#root')
            .contains('Неверный пароль')
            .should('be.visible');
    });
});
