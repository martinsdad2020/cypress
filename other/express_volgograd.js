let login = ':nth-child(1) > .form-control'// поле логин
let password = ':nth-child(2) > .form-control' // поле пароль
let basket = '._3L1Qv > ._2-2Tl' // корзина в шапке
let addBasket = ':nth-child(1) > :nth-child(13) > ._1rCPk > .nowrap > ._3Iwt4 > ._2-2Tl' //Положить в корзину
let callButton = ':nth-child(1) > :nth-child(13) > ._1rCPk > .nowrap > ._3ZaEA > ._2-2Tl' //кнопка звонка
let profile = '._2JR3u' // личный кабинет(мыло)

describe('Экспресс Волгоград', function() {
  beforeEach('cookie', function() {
      cy.server()
      cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v2/partnames/existing').as('ww');
      cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v1/checkspam/sms?type=alfadetali').as('ee');
});

    it('visit', function() {
      cy.clearCookies()
      cy.visit('https://express.apgrup.ru');
});

    it('auth', function() {
      cy.get(login).type('votevitaku@providier.com').should('value', 'votevitaku@providier.com');
      cy.get(password).type('123456');
      cy.get('._3REB8').contains('Войти').click();
});

    it('gorod and company', function() {
      cy.get('._NY4w').contains(',00').should('be.visible');
      cy.get('._2rfW9').contains('Бампер задний').click();
      cy.get('._15-2L').contains('Компания').should('not.be.visible');
      cy.get('._15-2L').contains('Город').should('not.be.visible');
      cy.get('._15-2L').contains('Показать телефон').should('not.be.visible');
      cy.get('._3Bz1P').click();
      cy.wait(3000);
});

    it('add and order', function() {
      cy.get(addBasket).click();
      cy.get(basket).click();
      cy.get('._3Szvf').contains('Оформить заказ').click();
      cy.wait(3000);
      cy.get('._3Szvf').contains('Подтвердить').click();
      cy.get('body').contains('Заказ оформлен, спасибо!').should('be.visible');
});

    it('history', function() {
      cy.get(profile).contains('votevitaku@providier.com').click();
      cy.get('._15-2L').contains('История заказов').click();
      cy.get('._NY4w').contains('Новый').should('be.visible');
});

    it('change password', function() {
      cy.get(profile).contains('votevitaku@providier.com').click();
      cy.get('[placeholder="Новый пароль (не менее 6 символов)"]').click().type('123456');
      cy.get('[placeholder="Повтор нового пароля"]').click().type('123456');
      cy.get('._15-2L').contains('Сохранить').click();
      cy.get('._15-2L').contains('Пароль успешно изменен').should('be.visible');
});
});
