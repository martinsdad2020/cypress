describe("магаз", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://alfadetali.ru")

})
// Шапка
     it('head', function() {
        cy.get('._1yU2')
            .contains('О компании')
            .click()
        cy.get('._2LAa')
            .contains('Мы рады приветствовать вас на сайте нашей компании.')
            .should('be.visible')
        cy.get('._1yU2')
            .contains('Доставка')
            .click()
        cy.get('._2LAa')
            .contains('AlfaDetali осуществляет доставку Товара:')
            .should('be.visible')
        cy.get('._1yU2')
            .contains('Как купить')
            .click()
        cy.get('._2LAa')
            .contains('Процедура покупки товара в интернет-магазине')
            .should('be.visible')
        cy.get('._1yU2')
            .contains('Что с моим заказом?')
            .click()
        cy.get('._11Gk')
            .contains('Что с моим заказом?')
            .should('be.visible')
        cy.get('._1yU2')
            .contains('Контакты')
            .click()
        cy.get('._2LAa')
            .contains('Контакты')
            .should('be.visible')
})

//Вход с невалидной почтой
    it('neverniy parol', function() {
      cy.get('._1yzC')
            .contains('Вход / Регистрация')
            .click()
        cy.get('._11Gk')
            .contains('Вход')
            .should('be.visible')
        cy.get('div:nth-child(1) > label > input')
            .click()
            .clear()
            .type('invalid@u.ru')
            .should('value', 'invalid@u.ru')
        cy.get('div:nth-child(2) > label > input')
            .click()
            .clear()
            .type('123456')
            .should('value', '123456')
        cy.get('form > button')
            .click()
        cy.get('._32Go')
            .contains('Пользователь с такой почтой не найден')
            .should('be.visible')
            .click()

})
//Вход с валидной почтой
   it('login', function() {
        cy.get('div:nth-child(1) > label > input')
            .click()
            .clear()
            .type('nwh17007@cndps.com')
            .should('value', 'nwh17007@cndps.com')
        cy.get('div:nth-child(2) > label > input')
            .click()
            .clear()
            .type('123456')
            .should('value', '123456')
        cy.get('form > button')
            .click()
        cy.get('._2VzW')
            .contains('Личный кабинет')
            .should('be.visible')
        cy.get(':nth-child(2) > ._28FG > ._2VzW')
            .contains('Выход')
            .click( {force:true} )
})

//Восстановление пароля
    it('zabil parol', function() {
        cy.get(':nth-child(2) > .Qx_1 > ._2-kc')
            .click()
        cy.get('._1rlq')
            .contains('Забыли пароль?')
            .click()
        cy.get('._1rlq')
            .contains('Восстановление пароля')
            .should('be.visible')
        cy.get('._2WYl')
            .click()
            .clear()
            .type('eti11194@cndps.com')
            .should('value', 'eti11194@cndps.com')
        cy.get('form > ._2sMB')
            .click()
            cy.wait(2000)
        cy.get('._2-A2')
            .contains('На ваш почтовый ящик было отправлено письмо со ссылкой на восстановление пароля.')
            .should('be.visible')
})
//Регистрация(поля)
    it('registration', function() {
        cy.get(':nth-child(2) > .Qx_1')
            .contains('Вход')
            .click()
        cy.get('[href="/register"]')
         .click()
        cy.get('.vrDY')
            .contains('Эл.почта*')
            .should('be.visible')
        cy.get(':nth-child(1) > ._1kfX > ._2WYl')
            .click()
            .clear()
            .type('invalid@u.ru')
            .should('value', 'invalid@u.ru')
        cy.get('.vrDY')
            .contains('Пароль*')
            .should('be.visible')
        cy.get(':nth-child(2) > ._1kfX > ._2WYl')
            .click()
            .clear()
            .type('invalid@u.ru')
            .should('value', 'invalid@u.ru')
        cy.get('form > ._2sMB')
            .click()
        cy.get('.vrDY')
            .contains('Вы не согласились с пользовательским соглашением ')
            .should('be.visible')
})

//нижняя часть
   it('footer', function() {
        cy.get('._2Ylg')
            .contains('О компании')
            .click()
        cy.get('._2LAa')
            .contains('Мы рады приветствовать вас на сайте нашей компании.')
            .should('be.visible')

        cy.get('._2Ylg')
            .contains('Доставка')
            .click()
        cy.get('._2LAa')
            .contains('AlfaDetali осуществляет доставку Товара:')
            .should('be.visible')

        cy.get('._2Ylg')
            .contains('Как купить')
            .click()
        cy.get('._2LAa')
            .contains('Процедура покупки товара в интернет-магазине')
            .should('be.visible')

        cy.get('._2Ylg')
            .contains('Что с моим заказом?')
            .click()
        cy.get('._11Gk')
            .contains('Что с моим заказом?')
            .should('be.visible')

        cy.get('._2Ylg')
            .contains('Новости')
            .click()
        cy.get('._11Gk')
            .contains('Новости и статьи')
            .should('be.visible')

        cy.get('._2Ylg')
            .contains('Контактная информация')
            .click()
        cy.get('._2LAa')
            .contains('Контакты')
            .should('be.visible')

        cy.get('._2Ylg')
            .contains('Возврат и гарантия')
            .click()
        cy.get('._2LAa')
            .contains('Правила возврата Товара')
            .should('be.visible')
})


// переход на мобильную версию и обратно
    it('mobile', function() {
        cy.get('._4wOR')
            .contains('Мобильная версия')
            .click()
        cy.get(':nth-child(2) > ._1H3n > ._2SZT')
            .contains('Страница')
            .should('be.visible')
        cy.get(':nth-child(2) > ._1WjC > label > ._3Zzt')
            .click()
        cy.get('._3w0n > :nth-child(1)')
          .contains('Полная версия сайта')
          .click()
        cy.get('._1rlq')
          .contains('Вся информация, представленная на сайте alfadetali.ru')
          .should('be.visible')
});

//авторизация с правильной почтой и неправильным паролем
     it('wrong password', function() {
        cy.get('._1yzC')
            .contains('Вход / Регистрация')
            .click()
        cy.get('._11Gk')
            .contains('Вход')
            .should('be.visible')
        cy.get('div:nth-child(1) > label > input')
            .click()
            .clear()
            .type('nwh17007@cndps.com')
        cy.get('div:nth-child(2) > label > input')
            .click()
            .type('1234567')
        cy.get('form > button')
            .click()
        cy.get('._32Go')
            .contains('Неверный пароль')
            .should('be.visible')
});
});