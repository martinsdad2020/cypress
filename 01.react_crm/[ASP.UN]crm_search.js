let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let name = '.active > .panel > .panel-body > form > :nth-child(1) > ._1a95Z > .form-control'
let phone = '.active > .panel > .panel-body > form > :nth-child(2) > ._1a95Z > .form-control'
let para = ':nth-child(15) > :nth-child(2) > a'

// asp.manager@alfa.ru  123456
// 'guid-216', '{6524511F-44F9-12C7-1FAC-54D62F5374CC}'

describe('Maint search', function () {
  beforeEach('cookie', function () {
    cy.setCookie('guid-216', '{6524511F-44F9-12C7-1FAC-54D62F5374CC}')
    cy.server();
    cy.route('https://crm.api.apgrup.ru/v1/*')
      .as('ww');
    cy.route('https://crm.api.apgrup.ru/v1/parts/search/*')
      .as('sear');
  });

  it('visit apgrup', function () {
    cy.visit("https://apgrup.ru/", { onBeforeLoad: (win) => { win.fetch = null } });

    cy.get(login)
      .click()
      .clear()
      .type('asp.manager@alfa.ru');
    cy.get(password)
      .click()
      .clear()
      .type('123456');
    cy.get(enter)
      .click();
    cy.wait('@ww');
  });

  it('pick asp pulkovo', function () {
    cy.get('._2Hrbd')
      .contains('Компания')
      .next()
      .click();
    cy.get(companies) // выпадающий список со складами
      .contains('АСП')
      .click();
    cy.get('._2Hrbd')
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('склад АСП')
      .click();
    cy.get('._2JR3u')
      .contains('АСП Пулково')
      .should('be.visible');
      cy.wait('@ww');
  });

  it('search by barcode our detail', function () {
    cy.get('.input-group > .form-control')
      .type('00081307170018')
      .should('value', '00081307170018');
    cy.get('.input-group-btn > .btn')  
      .click(); 
      cy.wait('@sear');
    cy.contains('Volvo');   
  });

  it('search by barcode other companies', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('00413302926990')
      .should('value', '00413302926990');
    cy.get('.input-group-btn > .btn')  
      .click(); 
      cy.wait('@sear');
    cy.contains('Mazda');   
  });

  it('search by inv our detail', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('АСП113')
      .should('value', 'АСП113');
    cy.get('.input-group-btn > .btn')  
      .click(); 
      cy.wait('@sear');
    cy.contains('Volvo');
  });  

  it('search by inv other companies', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('T034012')
      .should('value', 'T034012');
    cy.get('.input-group-btn > .btn')  
      .click(); 
      cy.wait('@sear');
    cy.contains('Mazda');   
  });

  it('search by original our detail', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('30698618')
      .should('value', '30698618');
    cy.get('.input-group-btn > .btn')  
      .click(); 
      cy.wait('@sear');
    cy.contains('Volvo');   
  });

  it('search by original other companies', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('KD5351W21')
      .should('value', 'KD5351W21');
    cy.get('.input-group-btn > .btn')  
      .click(); 
      cy.wait('@sear');
    cy.contains('Mazda');   
  });

  it('search by brand our detail', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('Volvo')
      .should('value', 'Volvo');
    cy.get('.input-group-btn > .btn') 
      .click(); 
      cy.wait('@sear'); 
    cy.get('.collectionTable__container')  
      .contains('Volvo')
      .should('be.visible');   
  });

  it('search by brand other companies', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('Mazda')
      .should('value', 'Mazda');
    cy.get('.input-group-btn > .btn') 
      .click(); 
      cy.wait('@sear'); 
    cy.get('.collectionTable__container')  
      .contains('Mazda')
      .should('be.visible');   
  });
});