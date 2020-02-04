describe('Main search', function() {
    it('visit apgrup', function() {
        cy.setCookie('guid-216', '{6524511F-44F9-12C7-1FAC-54D62F5374CC}')
        cy.visit("https://apgrup.ru/");
        cy.get('._2Pypd')
            .should('not.be.visible'); // logo
        cy.auth('asp.manager@alfa.ru', '123456');
        cy.asp('АСП', 'склад АСП');
        let re = require('../storage.json');
        Object.keys(re.dataSerch).forEach(function(barcode) {
            cy.log(barcode);
            let flag = false;
            if (barcode == 'brand_our_detail' || barcode == 'brand_other_companies') flag = true;
            cy.search(re.dataSerch[barcode].type, re.dataSerch[barcode].cont, flag);
        });
    });
});