let login = ':nth-child(1) > .form-control'// поле логин
let password = ':nth-child(2) > .form-control' // поле пароль
let basket = '._3L1Qv > ._2-2Tl' // корзина в шапке
let addBasket = ':nth-child(1) > :nth-child(13) > ._1rCPk > .nowrap > ._3Iwt4' //Положить в корзину
let callButton = ':nth-child(2) > :nth-child(13) > ._1rCPk > .nowrap > ._3ZaEA' //кнопка звонка
let profile = '._2JR3u' // личный кабинет(мыло)

describe('express sto', function() {
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

   it('create preorder', function() {
     cy.get('body')
       .contains('Создать обращение')
       .click();
     cy.get('.form-control')
       .type('Здравствуйте, хотел бы приобрести левую фару для бмв х5 2013 года')
     cy.get('#app')
       .contains('Отправить')
       .click();
     cy.get('._NY4w')
       .contains('Здравствуйте, хотел бы приобрести левую фару для бмв х5 2013 года')
       .should('be.visible');
   });
});
