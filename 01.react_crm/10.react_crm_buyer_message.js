let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let name = '#form-name'
let phone = '#form-phone'
let para = ':nth-child(15) > :nth-child(2) > a'

describe('Create an order', function () {
  beforeEach('cookie', function () {
    cy.setCookie('guid-191', '{5BA16FE0-DB4C-B041-4D74-7B3CDD9BC1CF}')
    cy.server();
    cy.route('GET', 'https://crm.api.apgrup.ru/v1/*')
      .as('ww');
  });

  it('visit apgrup', function () {
    cy.visit("https://apgrup.ru/");

    cy.get(login)
      .click()
      .clear()
      .type('jinda.project@gmail.com');
    cy.get(password)
      .click()
      .clear()
      .type('123456');
    cy.get(enter)
      .click();
    cy.wait('@ww');
  });

  it('pick BitAuto', function () {
    cy.get('._2Hrbd')
      .contains('Компания')
      .next()
      .click();
    cy.get(companies) // выпадающий список со складами
      .contains('БитАвто')
      .click();
    cy.get('._2Hrbd')
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('Склад')
      .click();
    cy.wait(1000);
  });

  it('preorder', function () {
    cy.get('._2Hrbd')
      .contains('Добавить предзаказ')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Повторное')
      .click();
    cy.get(name) // поле имя
      .type('Roman')
      .should('value', 'Roman');
    cy.get(phone) // поле телефон
      .type('79992070525')
      .should('value', '+79992070525');
    cy.get('#form-message')
      .type('Сообщение')
    cy.get('.app__content')
      .contains('Создать')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Roman')
      .should('be.visible');
    cy.get('.app__content')
      .contains('+79992070525')
      .should('be.visible');
    cy.get('.app__content')
      .contains('Сообщение')
      .should('be.visible'); 
    cy.get('.app__content')
      .contains('Петров')
      .should('be.visible');
    cy.get('.app__content')
      .contains('работе')
      .should('be.visible');
    cy.get('.app__content')
      .contains('+79992070525')
      .should('be.visible');
    cy.get('.app__content')
      .contains('2019')
      .should('be.visible');
    cy.get('#form-comment')
      .type('Тестовый коммент')
      .should('value', 'Тестовый коммент');
    cy.get('tbody > :nth-child(11) > :nth-child(2)')
      .contains('№')
      .should('not.be.visible');
    cy.get('.app__content')
      .contains('Сменить')
      .click();
    cy.get('.modal-body > .panel > .panel-body')
      .contains('Ответственный')
      .next()
      .click();
    cy.get('.inputAutocomplete__popup')
      .contains('Азов')
      .click();
    cy.get('#form-changeCause')
      .type('Первая причина это ты')
      .should('value', 'Первая причина это ты') 
    cy.get('.popup__inner')
      .contains('Сохранить')
      .click();
    cy.wait(2000);
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .contains('Азов')
      .should('be.visible');
    cy.get('.app__content') 
      .contains('Прикрепить')
      .should('not.be.visible');
    cy.get('.app__content') 
      .contains('Сменить')
      .click();
    cy.get('.modal-body > .panel > .panel-body')
      .contains('Ответственный')
      .next()
      .click();
    cy.get('.inputAutocomplete__popup')
      .contains('Петров')
      .click();
    cy.get('.modal-body')
      .contains('Сохранить')
      .click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .contains('Петров')
      .should('be.visible');
    cy.get('.app__content')
      .contains('Прикрепить')
      .click();
    cy.get('.modal-body')
      .contains('Выбрать')
      .click();
    cy.get('.app__content')
      .contains('Прикрепить')
      .should('not.be.visible');
    cy.get('.app__content')
      .contains('Сменить')
      .should('not.be.visible');
    cy.get('tbody > :nth-child(11) > :nth-child(2)')
      .contains('№')
      .should('be.visible');
    cy.get(':nth-child(12) > .text > div')
      .contains('Тестовый коммент')
      .should('be.visible');   
  });
});