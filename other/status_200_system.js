let login = '#form-email'
let password = '#form-password'
let enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'
let storages = '.sidebar__menu > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup'
let companies = '.sidebar__row'

describe("status", function() {
   before('cookie', function() {
      cy.setCookie('guid-1', '%7B67F7C782-1A21-C70D-DC3F-4C2B6CA27E6B%7D')
      cy.server();
      cy.route('GET', 'https://api.apgrup.ru/app_dev.php/v1/*')
        .as('ww');
   });

   it("Auth", function() {
      cy.visit("https://apgrup.ru")

      cy.get(mail)
          .click()
          .clear()
          .type('ra-nt-office@yandex.ru')
      cy.get(pass)
          .click()
          .clear()
          .type('654321')
      cy.get(enter)
          .click()
      cy.wait(4000)
   });

    it('Prihodnie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Приходные накладные')
          .click( {force:true} )
      cy.get('#content > div')
          .contains('Добавить приходную накладную')
          .should('be.visible')
          .click( {force:true} )
      cy.get('#content > div')
          .contains('Добавить деталь')
          .should('be.visible')
          .click( {force:true} )
      cy.get('body > div.popup_stack.popup_stack--opened > div.modal.popup_stack__wrapper.fade.ng-scope.ng-isolate-scope.in > div > div > div > div > div')
          .contains('Информация о детали')
          .should('be.visible')
      //cy.wait('@SUP').its('status').should('eq', 200)
        //cy.wait(7000)
   })

    it('Na sklade', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('На складе')
          .click( {force:true} )
      cy.get('#content > div')
          .contains('Список деталей на складе')
          .should('be.visible')
      cy.get('#filter-type')
          .select('Легковая')
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div ')
          .click()
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div > div.inputPopup.ng-scope > div > div')
          .contains('Acura')
          .click()
      cy.get('#content > div')
          .contains('Применить')
          .click( {force:true} )
      cy.get('#content > div > ui-view > div > div.collection__wrapper')
          .contains('Acura')
          .should('be.visible')
           //cy.wait('@SUP').its('status').should('eq', 200)
    })

    it('Neocenennie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Неоцененные')
          .click( {force:true} )
      cy.get('#filter-type')
          .select('Легковая')
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-10 > div > div:nth-child(2) > div > div')
          .click()
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-10 > div > div:nth-child(2) > div > div > div.inputPopup.ng-scope > div > div')
          .contains('Audi')
          .click()
      cy.get('#content > div')
          .contains('Применить')
          .click( {force:true} )
      cy.get('#content > div > ui-view > div > div.collection__wrapper')
          .contains('Audi')
          .should('be.visible')
          //cy.wait('@SUP').its('status').should('eq', 200)

    })

    it('Neopoznannie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Неопознанные')
          .click( {force:true} )
      cy.get('#filter-type')
          .select('Легковая')
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div')
          .click()
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div > div.inputPopup.ng-scope > div > div')
          .contains('Audi')
          .click()
      cy.get('#content > div')
          .contains('Применить')
          .click( {force:true} )
      cy.get('#content > div > ui-view > div > div.collection__wrapper')
          .contains('Audi')
          .should('be.visible')
          //cy.wait('@SUP').its('status').should('eq', 200)

    })

    it('V rezerve', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('В резерве')
          .click( {force:true} )
      cy.get('#content > div')
          .contains('0')
          .should('be.visible')
          //cy.wait('@RES').its('status').should('eq', 200)

    })

    it('Ozhidaut podtverzhdeniya', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Ожидают подтверждения')
          .click( {force:true} )
      cy.get('#content > div > ui-view > div')
          .contains('0')
          .should('be.visible')
          //cy.wait('@EMP').its('status').should('eq', 200)
  })

    it('Utilizirovano', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Утилизировано')
          .click( {force:true} )
      cy.get('#filter-isTrashed')
          .select('Да')
      cy.get('#content > div')
          .contains('Применить')
          .click()
      cy.get('#content > div > ui-view > div')
          .contains('BYD')
          .should('be.visible')
          //cy.wait('@RES').its('status').should('eq', 200)

    })

    it('Pretenz sklad', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Претензионный склад')
          .click( {force:true} )
      cy.get('#filter-type')
          .select('Легковая')
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div')
          .click()
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-8 > div > div:nth-child(2) > div > div > div.inputPopup.ng-scope > div > div')
          .contains('Audi')
          .click()
      cy.get('#content > div')
          .contains('Применить')
          .click()
      cy.get('#content > div > ui-view > div > div.collection__wrapper')
          .contains('A3')
          .should('be.visible')
          //cy.wait('@EMP').its('status').should('eq', 200)
    })

    it('Zakazi vse', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Все')
          .click( {force:true} )
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(8) > div > div')
          .click()
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(8) > div > div > div.inputPopup.ng-scope > div > div')
          .contains('Закрыт')
          .click()
      cy.get('#content > div')
          .contains('Применить')
          .click()
      /*cy.get('.collectionTable__container')
          .contains('цука')
          .should('be.visible')*/
          //cy.wait('@EMP').its('status').should('eq', 200)
  })

    it('Zakazi novie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Новые')
          .click( {force:true} )
      cy.get('#content')
          .contains('0')
          .should('be.visible')
          //cy.wait('@RES').its('status').should('eq', 200)

    })

    it('Zakazi zakritie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Закрытые')
          .click( {force:true} )
      /*cy.get('#content > div > ui-view > div')
          .contains('цука')
          .should('be.visible')*/
          //cy.wait('@EMP').its('status').should('eq', 200)
    })

    it('Zakazi pustie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Пустые')
          .click( {force:true} )
      cy.get('#content')
          .contains('Список заказов пуст')
          .should('be.visible')
          //cy.wait('@EMP').its('status').should('eq', 200)
  })

    it('Zakazi na udalenie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('На удаление')
          .click( {force:true} )
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(10) > div > div')
          .click()
      cy.get(':nth-child(10) > [field="field"] > .inputAutocomplete > .inputPopup > .inputPopup__popup > .ng-scope > .inputAutocomplete__popup')
          .contains('Отменено клиентом')
          .click()
      cy.get('#content')
          .contains('Применить')
          .click()
      cy.get('#content')
          .contains('ТЕСТОВЫЙ')
          .should('be.visible')


          //cy.wait('@EMP').its('status').should('eq', 200)
  })

    it('Zakazi moi aktivnie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Мои активные')
          .click( {force:true} )
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(6) > div > div')
          .click()
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(6) > div > div > div.inputPopup.ng-scope > div > div')
          .contains('Программа')
          .click()
      cy.get('#content')
          .contains('Применить')
          .click()
      cy.get('.app__content')
          .contains('Roman')
          .should('be.visible')
          //cy.wait('@RES').its('status').should('eq', 200)

    })

    it('Zakazi moi zakritie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Мои закрытые')
          .click( {force:true} )
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(6) > div > div')
          .click()
      cy.get('#content > div > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(6) > div > div > div.inputPopup.ng-scope > div > div')
          .contains('Программа')
          .click()
      cy.get('#content')
          .contains('Применить')
          .click()
      cy.get('.app__content')
          .contains('Roman')
          .should('be.visible')
          //cy.wait('@EMP').its('status').should('eq', 200)
    })

    it('Zauavki na perem vhod', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Входящие')
          .click( {force:true} )
      cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(1) > div > div')
          .click()
      cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(1) > div > div > div.inputPopup.ng-scope > div')
          .contains('РУССКАЯ ДЕРЕВНЯ')
          .click()
      cy.get('#content')
          .contains('Применить')
          .click()
      /*cy.get('.app__content')
          .contains('Ракушин')
          .should('be.visible')*/

          //cy.wait('@EMP').its('status').should('eq', 200)
  })

    it('Zayavki na perem ishod', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Исходящие')
          .click( {force:true} )
      cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(1) > div > div')
          .click()
      cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div:nth-child(1) > div > div > div.inputPopup.ng-scope > div')
          .contains('склад Д2 AutoOEM')
          .click()
      cy.get('#content')
          .contains('Применить')
          .click()
      cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div')
          .contains('склад Д2 AutoOEM')
          .should('be.visible')
          //cy.wait('@EMP').its('status').should('eq', 200)
  })

    it('Zayavki na perem vozvrat vhod', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Возврат (входящие)')
          .click( {force:true} )
      cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-3 > div > div')
          .click()
      cy.get('#content > div > ui-view > ui-view > div > div.filter.ng-scope > form > div:nth-child(1) > div.col-md-3 > div > div > div.inputPopup.ng-scope > div')
          .contains('РУССКАЯ ДЕРЕВНЯ')
          .click()
      cy.get('#content')
          .contains('Применить')
          .click()
      /*cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div')
          .contains('РУССКАЯ ДЕРЕВНЯ')
          .should('be.visible')*/
          //cy.wait('@EMP').its('status').should('eq', 200)
  })

    it('Zayavki na perem vozvrat ishod', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Возврат (исходящие)')
          .click( {force:true} )
      cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
          .contains('Список заявок на возврат перемещения пуст')
          .should('be.visible')
          //cy.wait('@RES').its('status').should('eq', 200)

    })

    it('Detali ozhudaushie podtverzhdenia', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Детали, ожидающие подтверждения')
          .click( {force:true} )
      cy.get('#content > div > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
          .contains('Список деталей пуст')
          .should('be.visible')
          //cy.wait('@EMP').its('status').should('eq', 200)
    })

    it('Detali k vozvratu partneram', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Детали к возврату партерам')
          .click( {force:true} )
      cy.get('#filter-type')
          .select('Легковая')
      cy.get('#content')
          .contains('Применить')
          .click()
      cy.get('#content > div > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
          .contains('Список деталей пуст')
          .should('be.visible')
          //cy.wait('@EMP').its('status').should('eq', 200)
   })

    it('Novie rashod nakladnie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div > div:nth-child(7) > div:nth-child(2)')
          .contains('Новые')
          .click( {force:true} )
      cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
          .contains('Список расходных накладных пуст')
          .should('be.visible')
          //cy.wait('@EMP').its('status').should('eq', 200)
    })

    it('Podtverzhdennie rash nakladnie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Подтвержденные')
          .click( {force:true} )
      cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
          .contains('Список расходных накладных пуст')
          .should('be.visible')
          //cy.wait('@EMP').its('status').should('eq', 200)
   })

    it('Oplachenie rash nakladnie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Оплаченные')
          .click( {force:true} )
      cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
          .contains('Список расходных накладных пуст')
          .should('be.visible')
          //cy.wait('@RES').its('status').should('eq', 200)

    })

    it('Na otpravku', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('На отправку')
          .click( {force:true} )
      cy.get('#filter-number')
          .click()
          .type('2')
      cy.get('#content')
          .contains('Применить')
          .click()
      cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
          .contains('Хачик')
          .should('be.visible')

})

    it('Otpravlennie', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Отправленные')
          .click( {force:true} )
      cy.get('#content > div > ui-view > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
          .contains('Список расходных накладных пуст')
          .should('be.visible')

})

    it('Vozvrati', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div')
          .contains('Возвраты')
          .click( {force:true} )
      cy.get('#content > div > ui-view > div > div.collection__wrapper > div.collectionTable--padding.collectionTable.ng-scope > div.collectionTable__wrapper > div > div')
          .contains('Список деталей пуст')
          .should('be.visible')

})

    it('Novie remont', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebar__menu > div > div:nth-child(8) > div:nth-child(2)')
          .contains('Новые')
          .click( {force:true} )
      cy.get('#content > div')
          .contains('Добавить заявку на ремонт')
          .click()
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content > div.sidebarWidget__wrapper > div:nth-child(3) > div')
          .contains('Перейти к ремонту')
          .click()
      cy.get('#content > div')
          .contains('Накладная на ремонт')
          .should('be.visible')
      cy.get('#content > div')
          .contains('Удалить')
          .click()
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div.modal-dialog.modal-sm > div > div > div.modal-footer.ng-scope')
          .contains('Удалить')
          .click()
      cy.get('#content > div')
          .contains('Список новых заявок на ремонт')
          .should('be.visible')
          //cy.wait('@EMP').its('status').should('eq', 200)
    })
    /*it('V remonte', function() {
      cy.get(':nth-child(8) > .nav > :nth-child(4) > .ng-binding')

          //cy.wait('@EMP').its('status').should('eq', 200)
    })

    it('Zavershennie', function() {
      cy.get(':nth-child(8) > .nav > :nth-child(5) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
  })

    it('Obrabotannie', function() {
      cy.get(':nth-child(8) > .nav > :nth-child(6) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
  })

    it('Zakritie', function() {
      cy.get(':nth-child(8) > .nav > :nth-child(7) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Po prihodu', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(1) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Po skladu', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(2) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Po prodazham', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(3) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Po peremesheniu vhod', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(4) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@RES').its('status').should('eq', 200)

})

    it('Po peremesheniu ishod', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(5) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Po platezham', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(6) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

     it('Po zakazam', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(7) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Po skladu', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(8) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@RES').its('status').should('eq', 200)
})

    it('Po vozvratom', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(9) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Po neoplachennim detalyam', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(10) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Po remontam', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(11) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Po zadacham', function() {
      cy.get(':nth-child(9) > .nav > :nth-child(12) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

        it('Informacia', function() {
      cy.get(':nth-child(10) > .nav > :nth-child(1) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Sotrudniki', function() {
      cy.get(':nth-child(10) > .nav > :nth-child(2) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Skladi', function() {
      cy.get(':nth-child(10) > .nav > :nth-child(3) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Postavshiki', function() {
      cy.get(':nth-child(10) > .nav > :nth-child(4) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@RES').its('status').should('eq', 200)

})

    it('STO', function() {
      cy.get(':nth-child(10) > .nav > :nth-child(5) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Pokupateli', function() {
      cy.get(':nth-child(10) > .nav > :nth-child(6) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

     it('Scheta', function() {
      cy.get(':nth-child(10) > .nav > :nth-child(7) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('V avito obiavlenia', function() {
      cy.get(':nth-child(11) > .nav > :nth-child(1) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@RES').its('status').should('eq', 200)
})

    it('V direkt', function() {
      cy.get(':nth-child(11) > .nav > :nth-child(2) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('V avito reklama', function() {
      cy.get(':nth-child(11) > .nav > :nth-child(3) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('UTM metki', function() {
      cy.get(':nth-child(11) > .nav > :nth-child(4) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Shabloni obiavlenyi', function() {
      cy.get(':nth-child(11) > .nav > :nth-child(5) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Gruppi fidov', function() {
      cy.get(':nth-child(11) > .nav > :nth-child(6) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Avito magazini', function() {
      cy.get(':nth-child(4) > :nth-child(12) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Assortinemti', function() {
      cy.get(':nth-child(13) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Faili', function() {
      cy.get(':nth-child(14) > .nav > :nth-child(1) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@RES').its('status').should('eq', 200)

})

    it('Shemi', function() {
      cy.get(':nth-child(14) > .nav > :nth-child(2) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Sopostavleniya', function() {
      cy.get(':nth-child(14) > .nav > :nth-child(3) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

     it('Avtoimport', function() {
      cy.get(':nth-child(14) > .nav > :nth-child(4) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Skidki', function() {
      cy.get(':nth-child(15) > .nav > :nth-child(1) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@RES').its('status').should('eq', 200)
})

    it('Nacenki', function() {
      cy.get(':nth-child(15) > .nav > :nth-child(2) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Dobavit predzakaz', function() {
      cy.get(':nth-child(16) > .nav > :nth-child(1) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Spisok predzakazov', function() {
      cy.get(':nth-child(16) > .nav > :nth-child(2) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Spisok povtornih obrashenyi', function() {
      cy.get(':nth-child(16) > .nav > :nth-child(3) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Istoriya zvonkov', function() {
      cy.get(':nth-child(17) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@RES').its('status').should('eq', 200)
})

    it('Zadachi sotrudnikov', function() {
      cy.get(':nth-child(18) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Gruppi polzovatelei', function() {
      cy.get(':nth-child(19) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Prava dostupa', function() {
      cy.get(':nth-child(20) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})

    it('Dobavit kompaniyu', function() {
      cy.get(':nth-child(4) > :nth-child(21) > .ng-binding')
          .click( {force:true} )
          //cy.wait('@EMP').its('status').should('eq', 200)
})*/
})
