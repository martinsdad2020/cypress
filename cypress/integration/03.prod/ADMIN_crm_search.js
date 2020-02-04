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
  });

  it('visit apgrup', function () {
    cy.visit("https://alfa-mt.ru/");

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
  });

  it('pick AlfaDetali', function () {
    cy.get('._2Hrbd')
      .contains('Компания')
      .next()
      .click();
    cy.get(companies) // выпадающий список со складами
      .contains('АльфаДетали')
      .click();
    cy.get('._2Hrbd')
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('РУССКАЯ')
      .click();
    cy.get('._2JR3u')
      .contains('1')
      .click();
    cy.get('.select__menu-list')
      .contains('Альфа')
      .click();
    cy.get('._2JR3u')
      .contains('АльфаДетали')
      .should('be.visible');
    cy.wait(500);
  });

  it('search by barcode our detail', function () {
    cy.get('.input-group > .form-control')
      .type('00081307170018')
      .should('value', '00081307170018');
    cy.get('.input-group-btn > .btn')  
      .click(); 
    cy.wait(30000);
    cy.contains('Volvo');   
  });

  it('search by barcode other companies', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('00413302926990')
      .should('value', '00413302926990');
    cy.get('.input-group-btn > .btn')  
      .click(); 
    cy.wait(30000);
    cy.contains('Mazda');   
  });

  it('search by inv our detail', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('АСП113')
      .should('value', 'АСП113');
    cy.get('.input-group-btn > .btn')  
      .click(); 
    cy.wait(30000);
    cy.contains('Volvo');
  });  

  it('search by inv other companies', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('T034012')
      .should('value', 'T034012');
    cy.get('.input-group-btn > .btn')  
      .click(); 
    cy.wait(30000);
    cy.contains('Mazda');   
  });

  it('search by original our detail', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('30698618')
      .should('value', '30698618');
    cy.get('.input-group-btn > .btn')  
      .click(); 
    cy.wait(40000);
    cy.contains('Volvo');   
  });

  it('search by original other companies', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('KD5351W21')
      .should('value', 'KD5351W21');
    cy.get('.input-group-btn > .btn')  
      .click(); 
    cy.wait(40000);
    cy.contains('Mazda');   
  });

  it('search by brand our detail', function () {
    cy.get('.input-group > .form-control')
      .clear()
      .type('Volvo')
      .should('value', 'Volvo');
    cy.get('.input-group-btn > .btn') 
      .click(); 
    cy.wait(30000); 
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
    cy.wait(30000); 
    cy.get('.collectionTable__container')  
      .contains('Mazda')
      .should('be.visible');   
  });
});