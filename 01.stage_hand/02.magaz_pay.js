describe("магаз самовывоз", function () {

  it("visit", function () {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("https://magaz.apgrup.ru")

    //Покупаем деталь ауди
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Audi')
      .should('be.visible')
      .click();
    cy.get('._20fvB')
      .contains('Купить')
      .click();
    cy.get('._2lT_o')
      .contains('Товар успешно добавлен')
      .should('be.visible');
    cy.get('._2lT_o')
      .contains('Перейти в корзину')
      .click();
    cy.get('#root')
      .contains('Корзина')
      .should('be.visible');
    //Оформляем доставку
    cy.get('#root')
      .contains('Оформить заказ')
      .click();
    cy.get('._3eTHD')
      .contains('Самовывоз')
      .click();
    cy.get('#root')
      .contains('Забрать отсюда')
      .click();
    cy.get('#root')
      .contains('Артикул')
      .should('be.visible');
    cy.get('#root')
      .contains('Отправить смс')
      .click();
    cy.get('#root')
      .contains('Введите')
      .should('be.visible');
    cy.get('._26W7Q > .dmvaJ > ._2EEno > .aEtUW')
      .clear()
      .type('1234567890')
      .should('value', '+7 (123) 456-78-90');
    cy.get('#root')
      .contains('Отправить смс')
      .click({ force: true });
    cy.wait(1000);
    cy.get('._26W7Q > .dmvaJ > ._2EEno > .aEtUW')
      .click({ force: true })
      .type('123456');
    cy.get('._39Hhf')
      .click({ force: true });
    cy.get(':nth-child(4) > .iFdeK')
      .contains('Подтвердить заказ')
      .click({ force: true });
    cy.get('#root')
      .contains('Спасибо за ваш заказ!')
      .should('be.visible');
    cy.get('#root')
      .contains('Оплатить онлайн')
      .click();
    cy.get('.pay-container')
      .contains('Яндекс')
      .click();
    cy.get('#pay-form-submit')
      .contains('Продолжить')
      .click();
    cy.get('#payButton')
      .click();
  });
});
