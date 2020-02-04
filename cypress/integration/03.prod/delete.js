let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let name = '.active > .panel > .panel-body > form > :nth-child(1) > ._1a95Z > .form-control'
let phone = '.active > .panel > .panel-body > form > :nth-child(2) > ._1a95Z > .form-control'
let para = ':nth-child(15) > :nth-child(2) > a'
// ra-nt-office@yandex.ru  superp@ss
// 'guid-1', '%7B153B24F9-C1FC-D813-A0B7-038BD34C6733%7D'

describe('Main search', function () {
  beforeEach('cookie', function () {
    cy.setCookie('guid-1', '%7B153B24F9-C1FC-D813-A0B7-038BD34C6733%7D')
    cy.server();
    cy.route('https://crm.api.apgrup.ru/v1/**')
      .as('ww');
      cy.route('https://notifications.alfa-mt.ru/socket.io/**')
      .as('not');
      cy.route('https://crm.api.alfa-mt.ru/v1/storages/**')
      .as('ww2');
  });

  it('visit apgrup', function () {
    cy.visit("https://alfa-mt.ru/", { onBeforeLoad: (win) => { win.fetch = null } });
cy.wait(1000);
    cy.get(login)
      .click()
      .clear()
      .type('ra-nt-office@yandex.ru');
    cy.get(password)
      .click()
      .clear()
      .type('superp@ss');
    cy.get(enter)
      .click();
      cy.wait('@not');
  });

  it('pick AlfaDetali', function () {
    cy.get('._2Hrbd')
      .contains('Компания')
      .next()
      .click();
    cy.get(companies) // выпадающий список со складами
      .contains('1 АльфаДетали')
      .click();
    cy.get('._2Hrbd')
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('РУССКАЯ')
      .click();
    // cy.get('._2JR3u')
    //   .contains('1')
    //   .click();
    // cy.get('.select__menu-list')
    //   .contains('1')
    //   .click();
    // cy.get('._2JR3u')
    //   .contains('1 АльфаДетали')
    //   .should('be.visible');
      cy.wait('@ww2');
  });

  for (let a=0;a<1000;a++) {
  it('delete', function () {
    cy.get('._2Hrbd')
      .contains('На удаление')
      .click();
    cy.get('tbody > :nth-child(1) > :nth-child(5) > a')
    .click();
    cy.get('.app__content')
    .contains('Подтвердить отмену')
    .click();
    cy.get('.modal-footer')
    .contains('Отменить')
    .click();
    cy.wait('@ww2');
  })
  }
});