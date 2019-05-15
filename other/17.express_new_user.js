let login = ':nth-child(1) > .form-control'// поле логин
let password = ':nth-child(2) > .form-control' // поле пароль
let basket = '._3L1Qv > ._2-2Tl' // корзина в шапке
let addBasket = ':nth-child(1) > :nth-child(13) > ._1rCPk > .nowrap > ._3Iwt4' //Положить в корзину
let callButton = ':nth-child(1) > :nth-child(13) > ._1rCPk > .nowrap > ._3ZaEA > ._2-2Tl' //кнопка звонка
let fieldPhone = '._1sdN5 > div > .form-control' // поле телефон
let fieldCode = '#order-code' // поле кода подтверждения
let profile = '._2JR3u' // личный кабинет(мыло)

describe('express new user', function () {
  before('cookie', function () {
    cy.server()
    cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v2/partnames/existing').as('ww');
    cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v1/checkspam/sms?type=alfadetali').as('ee');
  });

  it('visit', function () {
    cy.clearCookies()
    cy.visit('https://express.apgrup.ru');
  });

  //Авторизация
  it('auth', function () {
    cy.get(login).type('nokenivune_prod@datasoma.com').should('value', 'nokenivune_prod@datasoma.com');
    cy.get(password).click().type('123456');
    cy.get('._3REB8').contains('Войти').click();
  });

  //Цена город компания
  it('gorod and company', function () {
    cy.get('._2JR3u').contains('0').should('be.visible');
    cy.get('._NY4w').contains(',00').should('not.be.visible');
    cy.get(callButton).should('not.be.visible');
    cy.get('._2rfW9').contains('Молдинг').click();
    cy.get('._15-2L').contains('Компания').should('not.be.visible');
    cy.get('._15-2L').contains('Город').should('not.be.visible');
    cy.get('._15-2L').contains('Показать телефон').should('not.be.visible');
    cy.get('._3Bz1P').click();
    cy.get('._2JR3u').contains('nokenivune').click();
    cy.get('.nmPIX').contains('Выход').click();
  });
});
