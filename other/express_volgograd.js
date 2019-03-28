let login = ':nth-child(1) > .form-control'// поле логин
let password = ':nth-child(2) > .form-control' // поле пароль
let basket = '._3L1Qv > ._2-2Tl' // корзина в шапке
let addBasket = ':nth-child(1) > :nth-child(13) > ._1rCPk > .nowrap > ._3Iwt4' //Положить в корзину
let callButton = ':nth-child(1) > :nth-child(13) > ._1rCPk > .nowrap > ._3ZaEA > ._2-2Tl' //кнопка звонка
let fieldPhone = '._1sdN5 > div > .form-control' // поле телефон
let fieldCode = '#order-code' // поле кода подтверждения
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

//Авторизация
   it('auth', function() {
      cy.get(login).type('votevitaku@providier.com').should('value', 'votevitaku@providier.com');
      cy.get(password).type('123456');
      cy.get('._3REB8').contains('Войти').click();
});

//Цена город компания
   it('gorod and company', function() {
      cy.get('._NY4w').contains(',00').should('be.visible');
      cy.get('._2rfW9').contains('Бампер задний').click();
      cy.get('._15-2L').contains('Компания').should('not.be.visible');
      cy.get('._15-2L').contains('Город').should('not.be.visible');
      cy.get('._15-2L').contains('Показать телефон').should('not.be.visible');
      cy.get('._3Bz1P').click();
      cy.wait(3000);
});

//Оформить заказ
it('add and order', function() {
    cy.get(addBasket).click( {force: true} );
    cy.get(basket).click( {force:true} );
    cy.get('._3Szvf').contains('Оформить заказ').click();
    cy.wait('@ee');
    cy.wait(3000);
    cy.get(fieldPhone).type('1234567891').should('value', '+7 (123) 456-78-91');
    cy.get('body').contains('Отправить смс с кодом подтверждения').click();
    cy.get(fieldCode).type('123456');
    cy.get('body').contains('Отправить код подтверждения').click();
    cy.get('body').contains('Заказ оформлен, спасибо!').should('be.visible');
});

//История заказов
   it('history', function() {
       cy.get(profile).contains('votevitaku@providier.com').click();
       cy.get('._15-2L').contains('История заказов').click();
     //cy.get('._NY4w').contains('Новый').should('be.visible');
});

//Смена пароля
   it('change password', function() {
       cy.get(profile).contains('votevitaku@providier.com').click();
       cy.get('[placeholder="Новый пароль (не менее 6 символов)"]').click().type('123456');
       cy.get('[placeholder="Повтор нового пароля"]').click().type('123456');
       cy.get('._15-2L').contains('Сохранить').click();
       cy.get('._15-2L').contains('Пароль успешно изменен').should('be.visible');
});
});
