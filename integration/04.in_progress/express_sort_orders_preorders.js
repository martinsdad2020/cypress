let login = ':nth-child(1) > .form-control'// поле логин
let password = ':nth-child(2) > .form-control' // поле пароль
let basket = '._3L1Qv > ._2-2Tl' // корзина в шапке
let addBasket = ':nth-child(1) > :nth-child(13) > ._1rCPk > .nowrap > ._3Iwt4' //Положить в корзину
let callButton = ':nth-child(2) > :nth-child(13) > ._1rCPk > .nowrap > ._3ZaEA' //кнопка звонка
let profile = '._2JR3u' // личный кабинет(мыло)
let sort = 'tbody > :nth-child(1) > :nth-child(1)'

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

   it('sorting orders', function() {
     cy.get('.GynOK')
       .contains('menufolesu_prod@2mailnext.com')
       .click();
     cy.get('.nmPIX')
       .contains('История')
       .click();
     cy.get('tbody > :nth-child(1) > :nth-child(3)') // первое поле статус
       .contains('Новый')
       .should('be.visible');
     cy.get('._2R0XK > thead > tr > :nth-child(3) > ._2VmXN') // кнопка статус
       .click();
     cy.wait(3000);
     cy.get('tbody > :nth-child(1) > :nth-child(3)')
       .contains('Закрыт')
       .should('be.visible');
     cy.get('._2R0XK > thead > tr > :nth-child(3) > ._2VmXN')
       .click();
     cy.wait(3000);
     cy.get('tbody > :nth-child(1) > :nth-child(3)')
       .contains('Новый')
       .should('be.visible');
  });

  it('sorting preorders', function() {
    cy.get('.GynOK')
      .contains('menufolesu_prod@2mailnext.com')
      .click();
    cy.get('.nmPIX')
      .contains('Предзаказы')
      .click();
    cy.get('tbody > :nth-child(1) > :nth-child(3)')
      .contains('В заказе')
      .should('be.visible');
    cy.get('._2R0XK > thead > tr > :nth-child(3) > ._2VmXN')
      .click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3)')
      .contains('В заказе')
      .should('be.visible');
    cy.get('._2R0XK > thead > tr > :nth-child(3) > ._2VmXN')
      .click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3)')
      .contains('Новый')
      .should('be.visible');
  });
});
