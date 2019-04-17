describe('Brands', function() {
  it('visit', function() {
    cy.clearCookies()
    cy.visit('https://magaz.apgrup.ru')
  });

  it('A-B', function() {
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Acura')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Acura')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Alfa Romeo')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Alfa Romeo')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Aston Martin')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Aston Martin')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Audi')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Audi')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Bentley')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Bentley')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Brilliance')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Brilliance')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('BYD')
      .click();
    cy.get('._444m') // область с результатами
      .contains('BYD')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
  });

  it('C-D', function() {
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Cadillac')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Cadillac')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Changan')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Changan')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Chery')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Chery')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Chevrolet')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Chevrolet')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Chrysler')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Chrysler')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Citroen')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Citroen')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Dacia')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Dacia')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Daewoo')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Daewoo')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Daihatsu')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Daihatsu')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Datsun')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Datsun')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Dodge')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Dodge')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('DongFeng')
      .click();
    cy.get('._444m') // область с результатами
      .contains('DongFeng')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
  });

  it('F-G', function() {
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('FAW')
      .click();
    cy.get('._444m') // область с результатами
      .contains('FAW')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Ferrari')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Ferrari')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Fiat')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Fiat')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Ford')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Ford')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('America')
      .click();
    cy.get('._444m') // область с результатами
      .contains('America')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('GAZ')
      .click();
    cy.get('._444m') // область с результатами
      .contains('GAZ')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Geely')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Geely')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('GM')
      .click();
    cy.get('._444m') // область с результатами
      .contains('GM')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Great Wall')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Great Wall')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
  });

  it('H-I-J', function() {
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Haima')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Haima')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Haval')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Haval')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Hawtai')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Hawtai')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Honda')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Honda')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Hummer')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Hummer')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Hyundai')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Hyundai')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Infiniti')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Infiniti')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Iran')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Iran')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Isuzu')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Isuzu')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Iveco')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Iveco')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Jaguar')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Jaguar')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Jeep')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Jeep')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
  });

  it('K-L-M', function() {
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Kia')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Kia')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Lada')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Lada')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Lancia')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Lancia')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Land Rover')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Land Rover')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('LDV')
      .click();
    cy.get('._444m') // область с результатами
      .contains('LDV')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Lexus')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Lexus')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Lifan')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Lifan')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Lincoln')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Lincoln')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Maserati')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Maserati')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Maybach')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Maybach')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Mazda')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Mazda')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Mercedes')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Mercedes')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Mini')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Mini')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Mitsubishi')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Mitsubishi')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
  });

  it('N-O-P-R-Seat', function() {
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Nissan')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Nissan')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Opel')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Opel')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Peugeot')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Peugeot')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Plymouth')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Plymouth')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Pontiac')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Pontiac')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Porsche')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Porsche')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Ravon')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Ravon')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Renault')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Renault')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Rolls')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Rolls')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Rover')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Rover')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('SAAB')
      .click();
    cy.get('._444m') // область с результатами
      .contains('SAAB')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Scion')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Scion')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Seat')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Seat')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
  });

  it('Skoda-T-U-V-Z', function() {
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Skoda')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Skoda')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Smart')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Smart')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Ssang')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Ssang')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Subaru')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Subaru')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Suzuki')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Suzuki')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('TAGAZ')
      .click();
    cy.get('._444m') // область с результатами
      .contains('TAGAZ')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Toyota')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Toyota')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('UAZ')
      .click();
    cy.get('._444m') // область с результатами
      .contains('UAZ')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('VAZ')
      .click();
    cy.get('._444m') // область с результатами
      .contains('VAZ')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Volvo')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Volvo')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('Vortex')
      .click();
    cy.get('._444m') // область с результатами
      .contains('Vortex')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('VW')
      .click();
    cy.get('._444m') // область с результатами
      .contains('VW')
      .should('be.visible')
    cy.get('._2S9w') // логотип афльа детали
      .click();
    cy.get('#root')
      .contains('Все марки')
      .click();
    cy.get('#root')
      .contains('ZAZ')
      .click();
    cy.get('._444m') // область с результатами
      .contains('ZAZ')
      .should('be.visible');
    cy.get('._2S9w') // логотип афльа детали
      .click();
  });
});
