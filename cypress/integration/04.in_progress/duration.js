let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let name = '.active > .panel > .panel-body > form > :nth-child(1) > ._1a95Z > .form-control'
let phone = '.active > .panel > .panel-body > form > :nth-child(2) > ._1a95Z > .form-control'
let para = ':nth-child(15) > :nth-child(2) > a'
let aspmanag = 'asp.manager@alfa.ru'
let allTime = 0;
let cycle = 3;
let aspmanag = 'asp.manager@alfa.ru'
let req = 'https://crm.api.apgrup.ru/v1/storages/34/parts/search/notsold?fields%5B%5D=id&fields%5B%5D=photos&fields%5B%5D=partGroup.id&fields%5B%5D=partGroup.title&fields%5B%5D=partName.id&fields%5B%5D=partName.title&fields%5B%5D=brands.id&fields%5B%5D=brands.brand.id&fields%5B%5D=brands.brand.cargo&fields%5B%5D=brands.brand.title&fields%5B%5D=brands.brand.titleTranslit&fields%5B%5D=brands.model.id&fields%5B%5D=brands.model.title&fields%5B%5D=brands.model.titleTranslit&fields%5B%5D=brands.generation.id&fields%5B%5D=brands.generation.title&fields%5B%5D=brands.generation.titleTranslit&fields%5B%5D=kod&fields%5B%5D=invNumber&fields%5B%5D=barcode&fields%5B%5D=used&fields%5B%5D=original&fields%5B%5D=actualSellingPrice&fields%5B%5D=actualPurchasePrice&fields%5B%5D=notes&fields%5B%5D=company.id&fields%5B%5D=company.name&fields%5B%5D=storage.id&fields%5B%5D=storage.title&actions%5B%5D=addToTransferRequest&actions%5B%5D=addToReserve&actions%5B%5D=addToRepair&offset=0&limit=50&sort=actualSellingPrice&order=desc&brand=32&context%5Bstorage%5D=34'

describe('api test', function() {
    beforeEach('cookie', function() {
        cy.setCookie('guid-216', '{6524511F-44F9-12C7-1FAC-54D62F5374CC}')
        cy.server();
        cy.route('https://crm.api.apgrup.ru/v1/**')
            .as('ww');
    });
    for (let i = 0; i < cycle; i++) {
        it('visit apgrup', function() {
            cy.visit("https://apgrup.ru/", { onBeforeLoad: (win) => { win.fetch = null } });
            cy.aspManager(login, aspmanag, password, enter)
        });
        it('huy', function() {
            cy.request({
                url: req,
                method: 'GET'
                    // auth: { username: 'asp.manager@alfa.ru', password: '123456' }
            }).then((response) => {
                expect(response.status).to.have.eq(200)
                let timeDur = response.duration
                allTime = (allTime + response.duration)
                    // assert.isOk(timeDur < 100, timeDur + 'пизда')
                    // console.log(i + ' ' + timeDur + ' ' + allTime)
            })

        });
    }
    it('1', function() {
        let sredneeTime = allTime / cycle
            // console.log(sredneeTime < 400)
            // console.log('среднее ввемя ответа при ' + cycle + ' запросов = ' + sredneeTime)
        assert.isOk(sredneeTime < 5000, 'failed' + sredneeTime);
    });
});
од