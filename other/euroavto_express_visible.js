let login = ':nth-child(1) > .form-control'// поле логин
let password = ':nth-child(2) > .form-control' // поле пароль
let basket = '._3L1Qv > ._2-2Tl' // корзина в шапке
let addBasket = ':nth-child(1) > :nth-child(12) > ._1rCPk > .nowrap > ._3Iwt4' //Положить в корзину
let callButton = ':nth-child(1) > :nth-child(12) > ._1rCPk > .nowrap > ._3ZaEA' //кнопка звонка
let profile = '._2JR3u' // личный кабинет(мыло)

describe('EA express visible', function() {
   before('cookie', function() {
       cy.server()
       cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v2/partnames/existing').as('ww');
       cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v1/checkspam/sms?type=alfadetali').as('ee');
});

   it('visit', function() {
       cy.clearCookies()
       cy.visit('https://express.apgrup.ru');
});

   it('auth', function() {
       cy.get(login).type('menufolesu_prod@2mailnext.com').should('value', 'menufolesu_prod@2mailnext.com');
       cy.get(password).type('123456');
       cy.get('._3REB8').contains('Войти').click();
});

   it('search', function() {
       cy.get(':nth-child(1) > :nth-child(1) > ._52eYD').next().click();
       cy.get('._2ZST_').contains('Audi').click();
       cy.get('._2ZST_').contains('A6').click();
       cy.get('._2ZST_').contains('A6 [C7,4G] 2011 - 2018').click();
       cy.get(':nth-child(2) > :nth-child(1) > ._52eYD').next().click();
       cy.get('._2vpgU > .form-control').type('Радиатор кондиционера');
       cy.get('.CFKjt').contains('Радиатор').click();
       cy.get('._NY4w').contains('Применить').click();
       cy.wait(1000);
       cy.get(':nth-child(1) > :nth-child(1) > ._2rfW9').contains('Радиатор').click();
       cy.get('.nmPIX').contains('В корзину').click();
       cy.wait(1000);
       cy.get('.nmPIX').contains('Удалить').click();
       cy.get('.nmPIX').contains('В корзину').should('be.visible');
       cy.get(':nth-child(1) > ._3KXeN').click();
});
});
