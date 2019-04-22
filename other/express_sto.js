let login = ':nth-child(1) > .form-control'// поле логин
let password = ':nth-child(2) > .form-control' // поле пароль
let basket = '._3L1Qv > ._2-2Tl' // корзина в шапке
let addBasket = ':nth-child(1) > :nth-child(13) > ._1rCPk > .nowrap > ._3Iwt4' //Положить в корзину
let callButton = ':nth-child(2) > :nth-child(13) > ._1rCPk > .nowrap > ._3ZaEA' //кнопка звонка
let profile = '._2JR3u' // личный кабинет(мыло)

describe('express sto', function () {
    before('cookie', function () {
        cy.server()
        cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v2/partnames/existing').as('ww');
        cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v1/checkspam/sms?type=alfadetali').as('ee');
    });

    it('visit', function () {
        cy.clearCookies()
        cy.visit('https://express.apgrup.ru');
    });

    it('auth', function () {
        cy.get(login).type('menufolesu_prod@2mailnext.com').should('value', 'menufolesu_prod@2mailnext.com');
        cy.get(password).type('123456');
        cy.get('._3REB8').contains('Войти').click();
    });

    it('gorod and company', function () {
        cy.get('._2JR3u').contains('0').should('be.visible');
        cy.get('._NY4w').contains(',00').should('be.visible');
        cy.get('._2rfW9').contains('Локер').click();
        cy.get('._15-2L').contains('Компания').should('be.visible');
        cy.get('._15-2L').contains('Город').should('be.visible');
        cy.get('._15-2L').contains('Показать телефон').should('be.visible').click();
        cy.get('._15-2L').contains('Контактная информация').should('be.visible');
        cy.get('._16iw4').click();
    });

    it('add and order', function () {
        cy.get(addBasket).click();
        cy.get(callButton).should('be.visible');
        cy.get(basket).click();
        cy.get('._3Szvf').contains('Оформить заказ').click();
        cy.get('._3Szvf').contains('Подтвердить').click();
        cy.get('body').contains('Заказ оформлен, спасибо!').should('be.visible');
    });

    it('history', function () {
        cy.get(profile).contains('menufolesu_prod@2mailnext.com').click();
        cy.get('._15-2L').contains('История заказов').click();
        cy.get('._NY4w').contains('Новый').should('be.visible');
    });

    it('change password', function () {
        cy.get(profile).contains('menufolesu_prod@2mailnext.com').click();
        cy.get('[placeholder="Новый пароль (не менее 6 символов)"]').click().type('123456');
        cy.get('[placeholder="Повтор нового пароля"]').click().type('123456');
        cy.get('._15-2L').contains('Сохранить').click();
        cy.get('._15-2L').contains('Пароль успешно изменен').should('be.visible');
    });
});
