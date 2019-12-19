let now = new Date();
let brand = now + 'Brand'
let model = now + 'Model'
let gen = now + 'Gen'

describe('add new car', function(){

    it('login', function(){
       cy.visit('https://admin.apgrup.ru/', { auth: { username: 'admin', password: 'shoh5phief0fae0O' } })
    });

    it('add brand', function(){
       cy.get('.content')
         .contains('Brands')
         .next()
         .contains('Add')
         .click();
       cy.get('.content')
         .contains('Brand title')
         .next()
         .type(brand);
    });
});