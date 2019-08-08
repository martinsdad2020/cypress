let login = '#form-email'
let password = '#form-password'
let enter = '.ng-valid-email.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > [ng-class="{inProgress: loading}"] > .inputAutocomplete__popup'
let companies = '.sidebar__row'
let side = '.sidebar__menu'
let nameRule = '.form-group > .form-control' // Поле с названием скидки
let andOrButton = '.iyw9I' // Кнопка И/ИЛИ
let block = '._1nEHy > :nth-child(1)' // Создать блок
let condition = '._1nEHy > :nth-child(3)' // Кнопка условие
let fieldCondition = '.css-1hwfws3' // Открыть список с условиями

describe ('rule_template', function() {
    before('cookie', function () {
        cy.setCookie('guid-1', '%7B67F7C782-1A21-C70D-DC3F-4C2B6CA27E6B%7D')
        cy.server();
        cy.route('https://crm.api.apgrup.ru/v1/**')
          .as('ww');
});
 
 it('visit apgrup', function () {
    cy.visit("https://apgrup.ru");
    cy.get(login).click().clear().type('ra-nt-office@yandex.ru');
    cy.get(password).click().clear().type('654321');
    cy.get(enter).click();
    cy.wait('@ww');
    cy.wait('@ww');
  });

  it('pick ruusian village', function () {
    cy.get('.sidebar__label').contains('Компания').next().click();
    cy.get(companies).contains('АльфаДетали').click();
    cy.get('.sidebar__label').contains('Склад').next().click();
    cy.get(storages).contains('РУССКАЯ').click();
    cy.wait(1000);
  });

  it('discounts', function() {
     cy.get(side).contains('Шаблоны правил').click();
     cy.get('.app__content').contains('Добавить шаблон правил').click();
     cy.get(nameRule).type('Test1234567890Тест!@#$%^&*()_+|}{?><":').should('be.visible');
     cy.get(andOrButton).contains('ИЛИ').click();
     cy.get(andOrButton).contains('И').should('be.visible');
     cy.get(block).click();
     cy.get('.app__content').contains('ИЛИ').should('be.visible');
     cy.get(condition).click();
     cy.get(fieldCondition).click();
     cy.get('.css-11unzgr') // Область поля с уловиями 
       .contains('Город').click();
     cy.get('.app__content').contains('равно').click();
     cy.get('.css-11unzgr').contains('не равно').click();
     cy.get('.app__content').contains('не равно').should('be.visible');
     cy.get('.css-1tehwa7-control > .css-1hwfws3') // Открыть список со странами
       .click();
     cy.get('[style="position: relative; height: 300px; overflow: auto; will-change: transform; direction: ltr;"]') // Список со странами
       .contains('Россия').click();
     cy.get('.css-1lwklm9-indicatorContainer > .css-19bqh2r') // Открыть список городов
       .click();
     cy.get('.css-11unzgr') // Список с городами
       .contains('Москва').click();
     cy.get('.app__content').contains('Россия - Москва').should('be.visible');
     cy.get('.app__content').contains('Создать').click();
     cy.get('.app__content').contains('Редактирование шаблона').should('be.visible');
     cy.get(condition).click();
     cy.get(fieldCondition).click();
     cy.get('.css-11unzgr').contains('Грузовая').click();
     cy.get('._1nqaO > .form-control') // Открыть поле грузовая
       .select('Нет');
     cy.get('.app__content').contains('Сохранить').click();
     cy.get('.app__content').contains('Успешно сохранено').should('be.visible');
  });
});