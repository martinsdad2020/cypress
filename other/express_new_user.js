describe('Экспресс новый юзер', function() {
  beforeEach('cookie', function() {
  cy.server()
      cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v2/partnames/existing')
          .as('ww')
      cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v1/checkspam/sms?type=alfadetali')
          .as('ee')
})

      it('visit', function() {
      cy.clearCookies()
      cy.visit('https://express.apgrup.ru');
})

//Авторизация
   it('auth', function() {
      cy.get(':nth-child(1) > .form-control')
      .type('nokenivune@datasoma.com').should('value', 'nokenivune@datasoma.com');
      cy.get(':nth-child(2) > .form-control').click().type('123456');
      cy.get('._3REB8').contains('Войти').click();
})

//Цена город компания
   it('gorod and company', function() {
      cy.get('._2JR3u').contains('0').should('be.visible');
      cy.get('._NY4w').contains(',00').should('not.be.visible');
      cy.get('._2rfW9').contains('Бампер задний').click();
      cy.get('._15-2L').contains('Компания').should('not.be.visible');
      cy.get('._15-2L').contains('Город').should('not.be.visible');
      cy.get('._15-2L').contains('Показать телефон').should('not.be.visible');
})

})
