describe('Brands', function() {
    it('visit', function() {
        cy.clearCookies()
        cy.visit('https://magaz.apgrup.ru')
    });
    let re = require('../magaz_brand.json')
    for (let brand of re.dataBrand.cont) {
        it(`Check ${brand}`, function() {
            // console.log(re[brand])
            // console.log(brand)
            // console.log(re.dataBrand.cont)
            cy.magazBrand(brand)
        })
    }
});