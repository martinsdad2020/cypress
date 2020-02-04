describe("магаз", function() {

  it("visit", function() {
    cy.clearCookies()
    cy.visit("https://alfadetali.ru")

  });
  // Шапка
  it('head', function() {
    cy.get('._1Aqxs')
      .contains('О компании')
      .click();
    cy.get('#root')
      .contains('Мы рады приветствовать вас на сайте нашей компании.')
      .should('be.visible');
    cy.get('._1Aqxs')
      .contains('Доставка')
      .click();
    cy.get('#root')
      .contains('AlfaDetali осуществляет доставку Товара:')
      .should('be.visible');
    cy.get('._1Aqxs')
      .contains('Как купить')
      .click();
    cy.get('#root')
      .contains('Процедура покупки товара в интернет-магазине')
      .should('be.visible');
    cy.get('._1Aqxs')
      .contains('Что с моим заказом?')
      .click();
    cy.get('#root')
      .contains('Что с моим заказом?')
      .should('be.visible');
    cy.get('._1Aqxs')
      .contains('Контакты')
      .click();
    cy.get('#root')
      .contains('Контакты')
      .should('be.visible');
  });

  //Вход с невалидной почтой
  it('invalid pass', function() {
    cy.get('#root')
      .contains('Вход / Регистрация')
      .click();
    cy.get('#root')
      .contains('Вход')
      .should('be.visible');
    cy.get('div:nth-child(1) > label > input')
      .clear()
      .type('invalid@u.ru')
      .should('value', 'invalid@u.ru');
    cy.get('div:nth-child(2) > label > input')
      .clear()
      .type('123456')
      .should('value', '123456');
    // cy.get('form > button')
    //   .click();
    // cy.wait(2000);
    // cy.get('#root')
    //   .contains('Пользователь с такой почтой не найден')
    //   .should('be.visible');

  });
  //Вход с валидной почтой
  it('login', function() {
    cy.get('form > :nth-child(1) > ._2EEno > .aEtUW')
      .clear()
      .type('nwh17007@cndps.com')
      .should('value', 'nwh17007@cndps.com');
    cy.get(':nth-child(2) > ._2EEno > .aEtUW')
      .clear()
      .type('123456')
      .should('value', '123456');
    // cy.get('form > button')
    //   .click();
    // cy.get('#root')
    //   .contains('Личный кабинет')
    //   .click();
    // cy.get(':nth-child(2) > ._1PAks > ._30vQ8')
    //   .contains('Выход')
    //   .click({
    //     force: true
    //   });
  });

  //Восстановление пароля
  it('forget password', function() {
    cy.get('#root')
      .contains('Вход / Регистрация')
      .click();
    cy.get('#root')
      .contains('Забыли пароль?')
      .click();
    cy.get('#root')
      .contains('Восстановление пароля')
      .should('be.visible');
    cy.get('.aEtUW')
      .clear()
      .type('eti11194@cndps.com')
      .should('value', 'eti11194@cndps.com');
    cy.get('#root')
      .contains('Восстановить')
      .click();
    cy.wait(2000);
    cy.get('#root')
      .contains('На ваш почтовый ящик было отправлено')
      .should('be.visible');
  })
  //Регистрация(поля)
  it('registration', function() {
    cy.get('#root')
      .contains('Вход')
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
  it('footer', function() {
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
  it('mobile', function() {
    cy.get('._2MwC6')
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
    cy.wait(2000);
    cy.get('#root')
      .contains('Правила возврата Товара')
      .should('be.visible');
  });
});