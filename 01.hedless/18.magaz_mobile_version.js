/*var бургер;
бургер = ':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP'*/

describe('mobile version magaz', function () {

  it('visit', function () {
    cy.clearCookies()
    cy.visit('https://magaz.apgrup.ru/');


    //Переход на мобильную версию, убеждаемся что бургер отображается
    cy.get('#root').contains('Мобильная версия')
      .click();
    cy.get(':nth-child(2) > .fvTRC > label > .Ex8kQ')
      .should('be.visible');


    //Идем в раздел личный кабинет и восстанавливаем пароль, проверка регистрации.
    cy.get(':nth-child(2) > .fvTRC > label > .Ex8kQ')
      .click();
    cy.get('.jgX78 > :nth-child(1)')
      .contains('Личный кабинет')
      .click();
    cy.get('#root > :nth-child(1)')
      .contains('Вход')
      .should('be.visible');
    cy.get('#root > :nth-child(1)')
      .contains('Войти')
      .click();
    cy.get('#root > :nth-child(1)')
      .contains('Введите эл. почту')
      .should('be.visible');
    cy.get('#root > :nth-child(1)')
      .contains('Введите пароль')
      .should('be.visible');
    cy.get('#root > :nth-child(1)')
      .contains('Забыли пароль?')
      .click();
    cy.get('#root > :nth-child(1)')
      .contains('Восстановление пароля')
      .should('be.visible');
    cy.get('._29VIl > ._3PTUv > ._1UYcs')
      .click()
      .type('wrong_parole@provider.com');
    cy.get('#root > :nth-child(1)')
      .contains('Восстановить')
      .click();
    cy.get('html')
      .contains('На ваш почтовый ящик было отправлено письмо')
      .should('be.visible');

    //Регистрация
    cy.get(':nth-child(2) > .fvTRC > label > .Ex8kQ')
      .click();
    cy.get('.jgX78 > :nth-child(1)')
      .contains('Личный кабинет')
      .click();
    cy.get('#root > :nth-child(1)')
      .contains('Регистрация')
      .click();
    cy.get('#root > :nth-child(1)')
      .contains('Эл.почта')
      .should('be.visible');
    cy.get('form > :nth-child(1) > ._3PTUv > ._1UYcs')
      .type('gg@ya.ru')
      .should('value', 'gg@ya.ru');
    cy.get('#root > :nth-child(1)')
      .contains('Пароль*')
      .should('be.visible');
    cy.get(':nth-child(2) > ._3PTUv > ._1UYcs')
      .type('111111')
      .should('value', '111111');
    cy.get('form > .Ex8kQ')
      .click();
    cy.get('#root > :nth-child(1)')
      .contains('Вы не согласились с пользовательским соглашением')
      .should('be.visible');
    /*cy.get('._3b2P')
        .contains('checkbox')*/ // хз как поставить галочку в чекбокс


    //Гуляем по разделам
    cy.get(':nth-child(2) > .fvTRC')
      .click();
    cy.get('.jgX78 > :nth-child(1)')
      .contains('Корзина')
      .click();
    cy.get('html')
      .contains('Корзина пуста')
      .should('be.visible');
    cy.get(':nth-child(2) > .fvTRC')
      .click();
    cy.get('.jgX78 > :nth-child(1)')
      .contains('Что с моим заказом?')
      .click();
    cy.wait(2000);
    cy.get('html')
      .contains('Введите номер заказа')
      .should('be.visible');
    cy.get('._3PJOW > .Ex8kQ')
      .click();
    cy.get('.B5Afx > ._3PTUv > ._3cTZx')
      .contains('Введите номер заказа')
      .should('be.visible');
    cy.get('.B5Afx > ._3PTUv > ._1UYcs')
      .type('1234567890')
      .should('value', '1234567890');
    // cy.get('html')
    //   .contains('Проверить')
    //   .click()
    // cy.get('html')
    //   .contains('не найден')
    //   .should('be.visible')


    // бургер-главная страница-все марки
    cy.get(':nth-child(2) > .fvTRC > label > .Ex8kQ')
      .click();
    cy.get('.jgX78 > :nth-child(1)')
      .contains('Главная страница')
      .click();
    cy.get('html')
      .contains('Все марки')
      .should('be.visible')
      .click();
    cy.get('html')
      .contains('ZAZ')
      .should('be.visible');
    cy.get('html')
      .contains('Грузовые')
      .click();
    cy.get('html')
      .contains('MAN')
      .should('be.visible')
      .click();
    cy.get('html')
      .contains('Neoplan')
      .should('be.visible');
    cy.get('._2UU7K')
      .contains('Главная')
      .click();
    cy.get('html')
      .contains('Легковые')
      .click();
    cy.get('html')
      .contains('Audi')
      .should('be.visible')
      .click();
    cy.get('html')
      .contains('A3')
      .should('be.visible');


    // О компании
    cy.get(':nth-child(2) > .fvTRC > label > .Ex8kQ')
      .click();
    cy.get('.jgX78 > :nth-child(1)')
      .contains('О компании')
      .click();
    cy.get('html')
      .contains('Мы рады приветствовать вас')
      .should('be.visible');
    cy.get(':nth-child(2) > .fvTRC > label > .Ex8kQ')
      .click();
    cy.get('.jgX78 > :nth-child(1)')
      .contains('Доставка')
      .click();
    cy.get('html')
      .contains('AlfaDetali осуществляет доставку Товара:')
      .should('be.visible');


    // Как купить?
    cy.get(':nth-child(2) > .fvTRC > label > .Ex8kQ')
      .click();
    cy.get('.jgX78 > :nth-child(1)')
      .contains('Как купить?')
      .click();
    cy.get('html')
      .contains('Процедура покупки товара в интернет-магазине')
      .should('be.visible');


    // Контактная информация
    cy.get(':nth-child(2) > .fvTRC > label > .Ex8kQ')
      .click();
    cy.get('.jgX78 > :nth-child(1)')
      .contains('Контактная информация')
      .click();
    cy.get('html')
      .contains('Адрес: Россия, 198095, Санкт-Петербург')
      .should('be.visible');


    // Возврат и гарантия
    cy.get(':nth-child(2) > .fvTRC > label > .Ex8kQ')
      .click();
    cy.get('.jgX78 > :nth-child(1)')
      .contains('Возврат и гарантия')
      .click();
    cy.get('html')
      .contains('Правила возврата Товара')
      .should('be.visible');


    // Переход на полную версию сайта
    cy.get(':nth-child(2) > .fvTRC > label > .Ex8kQ')
      .click();
    cy.get('.jgX78 > :nth-child(1)')
      .contains('Полная версия сайта')
      .click();
    cy.get('#root')
      .contains('1. Возврат Товара, поврежденного при транспортировке')
      .should('be.visible');
  });
});
