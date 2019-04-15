let login = ':nth-child(1) > .form-control'// поле логин
let password = ':nth-child(2) > .form-control' // поле пароль
let basket = '._3L1Qv > ._2-2Tl' // корзина в шапке
let addBasket = ':nth-child(1) > :nth-child(12) > ._1rCPk > .nowrap > ._3Iwt4' //Положить в корзину
let callButton = ':nth-child(1) > :nth-child(12) > ._1rCPk > .nowrap > ._3ZaEA' //кнопка звонка
let profile = '._2JR3u' // личный кабинет(мыло)

describe('SMOKE PRESS', function() {
  before('cookie', function() {
  });

  it('visit', function() {
    cy.clearCookies()
    cy.visit('https://express.alfadetali.ru/')
  });

  it('auth', function() {
    cy.get(login)
      .type('ngrak@yandex.ru')
      .should('value', 'ngrak@yandex.ru');
    cy.get(password)
      .type('123456'); // wrong password
    cy.get('#app')
      .contains('Войти')
      .click();
  });

  it('check', function() {
    cy.get(':nth-child(1) > :nth-child(13) > ._1rCPk > .nowrap > .btn') // add button
      .click();
    cy.get('.tuVoQ')
      .contains('1')
      .should('be.visible');
    cy.get(':nth-child(1) > :nth-child(13) > ._1rCPk > .nowrap > .btn')
      .click();
    cy.get('.tuVoQ')
      .contains('0')
      .should('be.visible');
    cy.get('._NY4w')
      .contains('бампер')
      .click();
    cy.get('.nmPIX')
      .contains('Санкт-Петербург')
      .should('be.visible');
    cy.get('.nmPIX')
      .contains('В корзину')
      .click();
    cy.get('.nmPIX')
      .contains('Удалить')
      .click();
    cy.get('.nmPIX')
      .contains('В корзину')
      .click();
    cy.get('.H3dL2 > ._7RFH7 > ._2-2Tl')
      .click();
    cy.get('._16iw4')
      .click();
  });

  it('search', function() {
    cy.get(':nth-child(1) > :nth-child(1) > ._52eYD') // car
      .next()
      .click();
    cy.get('._2ZST_')
      .contains('Acura')
      .click();
    cy.get('._2ZST_')
      .contains('MDX')
      .click();
    cy.get('._2ZST_')
      .contains('7')
      .click();
    cy.get(':nth-child(2) > :nth-child(1) > ._52eYD') // details
      .next()
      .click();
    cy.get('._2ZST_')
      .contains('Двигатель')
      .click();
    cy.get('._2ZST_')
      .contains('Выбрать')
      .click();
    cy.get(':nth-child(3) > div > ._52eYD') // bu
      .next()
      .select('Да');
    cy.get(':nth-child(4) > div > ._52eYD') // original
      .next()
      .select('Да');
    cy.get(':nth-child(5) > div > ._52eYD') // city
      .next()
      .click();
    cy.get('._1mdYs')
      .contains('Санкт-Петербург')
      .click();
    cy.get('._NY4w')
      .contains('Применить')
      .click();
    cy.get('._NY4w')
      .contains('рампа')
      .should('be.visible');
    cy.get('._NY4w')
      .contains('Очистить')
      .click();
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(1) > ._52eYD') // car
      .next()
      .click();
    cy.get('._2ZST_')
      .contains('Hummer')
      .click();
    cy.get('._2ZST_')
      .contains('H3')
      .click();
    cy.get('._2ZST_')
      .contains('5')
      .click();
    cy.get(':nth-child(2) > :nth-child(1) > ._52eYD') // details
      .next()
      .click()
    cy.get('._2vpgU > .form-control')
      .type('Фара левая');
    cy.get('._2ZST_')
      .contains('Фара')
      .click();
    cy.get('._NY4w')
      .contains('Применить')
      .click();
    cy.get(':nth-child(1) > :nth-child(1) > ._2rfW9') // euroavto search result
      .contains('КСЕНОН')
      .should('be.visible');
    cy.get('._1rCPk > .btn')
      .click();
    cy.wait(1000);
    cy.get('.tuVoQ')
      .contains('2')
      .should('be.visible');
  });

  it('order', function() {
    cy.get('.tuVoQ')
      .click();
    cy.get('#app')
      .contains('Корзина')
      .should('be.visible');
    cy.get('#app')
      .contains('бампер')
      .should('be.visible');
    cy.get('#app')
      .contains('Оформить')
      .click();
    cy.get('#app')
      .contains('Итого к оплате:')
      .should('be.visible');
    cy.get('.tuVoQ')
      .click();
    cy.get(':nth-child(1) > :nth-child(13) > ._1rCPk > .btn')
      .click();
    cy.get(':nth-child(2) > :nth-child(13) > ._1rCPk > .btn')
      .click();
    cy.get('#app')
      .contains('Оформить заказ')
      .should('not.be.visible');
  });

  it('history', function() {
    cy.get('._3_FkZ')
      .click();
    cy.get('._NY4w')
      .contains('Применить')
      .should('be.visible');
    cy.get('._2JR3u')
      .contains('ngrak@yandex.ru')
      .click();
    cy.get('.nmPIX')
      .contains('История заказов')
      .click();
    cy.get('#app')
      .contains('Закрыт')
      .should('be.visible');
    cy.get('._2JR3u')
      .contains('ngrak@yandex.ru')
      .click();
    cy.get('.nmPIX')
      .contains('Предзаказы')
      .click();
    cy.get('#app')
      .contains('Отменен')
      .should('be.visible');
    cy.get('#app')
      .contains('Создать')
      .click();
    cy.get('.form-control')
      .type('ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ')
      .should('be.visible');
    cy.get('._3_FkZ')
      .click();
    cy.get('._2JR3u')
      .contains('Создать обращение')
      .click();
    cy.get('#app')
      .contains('Создать предзаказ')
      .should('be.visible');
  });
});
