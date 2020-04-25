describe('Selectel', function() {
    it('visit', function() {
        cy.visit('https://my.selectel.ru/login/')
        cy.server()
        cy.route('GET', '**/auth')
            .as('auth');
        cy.get('.login-form')
            .contains('Вход в панель управления')
            .should('be.visible');

        // авторизация с пустыми полями
        // cy.get('.login-form')
        //     .contains('Войти в панель')
        //     .click();
        // cy.get(':nth-child(1) > .md-input-messages-animation > .md-input-message-animation')
        //     .contains('Обязательное поле')
        //     .should('be.visible');
        // cy.get(':nth-child(2) > .md-input-messages-animation > .md-input-message-animation')
        //     .contains('Обязательное поле')
        //     .should('be.visible');

        // // Авторизация только с заполненным полем логина
        // cy.get('#login')
        //     .clear()
        //     .type('119326')
        //     .should('value', '119326');
        // cy.get('.login-form')
        //     .contains('Войти в панель')
        //     .click();
        // cy.get(':nth-child(2) > .md-input-messages-animation > .md-input-message-animation')
        //     .contains('Обязательное поле')
        //     .should('be.visible');

        // // вход с несуществующим логином и паролем
        // cy.get('#login')
        //     .clear()
        //     .type('1193264')
        //     .should('value', '1193264');
        // cy.get('#password')
        //     .type('3Jr8FRtS');
        // cy.get('.login-form')
        //     .contains('Войти в панель')
        //     .click();
        // cy.get('.login-form')
        //     .contains('Неправильный логин или пароль')
        //     .should('be.visible');

        // вход с существующим логином и паролем
        cy.get('#login')
            .clear()
            .type('119326')
            .should('value', '119326');
        cy.get('#password')
            .clear()
            .type('3Jr8FRtS');
        cy.get('.login-form')
            .contains('Войти в панель')
            .click()
            .wait('@auth')
            .then($auth => {
                assert.isOk($auth.response.body.status == 'success', 'actual result:' + $auth.response.body.status)
            });
        cy.get('body')
            .contains('Продолжить регистрацию')
            .click();
        cy.get('.layout-row.flex > .layout-column.flex')
            .contains('Регистрация')
            .should('be.visible');
        cy.get('.sp-header')
            .contains('119326')
            .should('be.visible');

        // выбрать страну
        cy.get('.md-whiteframe-z1 > button.ng-scope')
            .type('Россия');
        cy.get('#md-option-36-0')
            .click();

        // выбрать тип аккаунта
        cy.get('#radio_30')
            .should('have.attr', 'aria-checked', 'true')
        cy.get('#radio_30')
            .should('have.attr', 'aria-label', 'Физическое лицо');

        // поставить галку в чекбокс
        cy.get('.ng-pristine > .md-container')
            .click()
            // cy.get('.ng-pristine > .md-container')
            //     .click();
            // cy.get('.layout-row.flex > .layout-column.flex')
            //     .contains('Заполнить анкету клиента')
            //     .click();

        // Проверка регистрации с пустыми полями(фио)
        // cy.get('.layout-row.flex > .layout-column.flex')
        //     .contains('Подтвердить номер телефона')
        //     .click();
        // cy.get('.l-mt-s > .md-input-invalid > .md-input-messages-animation > .md-input-message-animation')
        //     .contains('Необходимо заполнить это поле')
        //     .should('be.visible');
        // cy.get(':nth-child(2) > .md-input-invalid > .md-input-messages-animation > .md-input-message-animation')
        //     .contains('Необходимо заполнить это поле')
        //     .should('be.visible');
        // cy.get('.phone_w_code > .md-input-invalid > .md-input-messages-animation > .md-input-message-animation')
        //     .contains('Введите номер телефона')
        //     .should('be.visible');
        // cy.get('.f-danger')
        //     .contains('Проверьте отмеченные поля')
        //     .should('be.visible');

        // // Проверка полей ФИО на минимальное количество символом
        // cy.get('.sp-content-layout')
        //     .contains('Фамилия')
        //     .next()
        //     .type('И')
        //     .should('value', 'И');
        // cy.get('.sp-content-layout')
        //     .contains('Имя')
        //     .next()
        //     .type('З')
        //     .should('value', 'З');
        // cy.get('.sp-content-layout')
        //     .contains('Отчество')
        //     .next()
        //     .type('П')
        //     .should('value', 'П');
        // cy.get('#input_40')
        //     .type('0000000000')
        //     .should('value', '000 000-00-00');
        // cy.get('.md-container') // checkbox
        //     .click();
        // cy.get('.layout-row.flex > .layout-column.flex')
        //     .contains('Подтвердить номер телефона')
        //     .click();
        // cy.get('.l-mt-s > .md-input-invalid')
        //     .contains('Поле может содержать только')
        //     .should('be.visible');
        // cy.get(':nth-child(2) > .md-input-invalid')
        //     .contains('Поле может содержать только')
        //     .should('be.visible');
        // cy.get(':nth-child(3) > .md-input-has-value')
        //     .contains('Поле может содержать только')
        //     .should('be.visible');
        // cy.get('.f-danger')
        //     .contains('Проверьте отмеченные поля')
        //     .should('be.visible');

        // // Проверка полей ФИО на латинские символы
        // cy.get('.sp-content-layout')
        //     .contains('Фамилия')
        //     .next()
        //     .clear()
        //     .type('Pupkin')
        //     .should('value', 'Pupkin');
        // cy.get('.sp-content-layout')
        //     .contains('Имя')
        //     .next()
        //     .clear()
        //     .type('Ivan')
        //     .should('value', 'Ivan');
        // cy.get('.sp-content-layout')
        //     .contains('Отчество')
        //     .next()
        //     .clear()
        //     .type('Olegovich')
        //     .should('value', 'Olegovich');
        // cy.get('#input_40')
        //     .should('value', '000 000-00-00');
        // cy.get('.layout-row.flex > .layout-column.flex')
        //     .contains('Подтвердить номер телефона')
        //     .click();
        // cy.get('.l-mt-s > .md-input-invalid')
        //     .contains('Поле может содержать только')
        //     .should('be.visible');
        // cy.get(':nth-child(2) > .md-input-invalid')
        //     .contains('Поле может содержать только')
        //     .should('be.visible');
        // cy.get(':nth-child(3) > .md-input-has-value')
        //     .contains('Поле может содержать только')
        //     .should('be.visible');
        // cy.get('.f-danger')
        //     .contains('Проверьте отмеченные поля')
        //     .should('be.visible');

        // // Проверка полей ФИО на спецсимволы и числа
        // cy.get('.sp-content-layout')
        //     .contains('Фамилия')
        //     .next()
        //     .clear()
        //     .type('@$')
        //     .should('value', '@$');
        // cy.get('.sp-content-layout')
        //     .contains('Имя')
        //     .next()
        //     .clear()
        //     .type('190')
        //     .should('value', '190');
        // cy.get('.sp-content-layout')
        //     .contains('Отчество')
        //     .next()
        //     .clear()
        //     .type('&*')
        //     .should('value', '&*');
        // cy.get('#input_40')
        //     .should('value', '000 000-00-00');
        // cy.get('.layout-row.flex > .layout-column.flex')
        //     .contains('Подтвердить номер телефона')
        //     .click();
        // cy.get('.l-mt-s > .md-input-invalid')
        //     .contains('Поле может содержать только')
        //     .should('be.visible');
        // cy.get(':nth-child(2) > .md-input-invalid')
        //     .contains('Поле может содержать только')
        //     .should('be.visible');
        // cy.get(':nth-child(3) > .md-input-has-value')
        //     .contains('Поле может содержать только')
        //     .should('be.visible');
        // cy.get('.f-danger')
        //     .contains('Проверьте отмеченные поля')
        //     .should('be.visible');

        // // Проверка полей ФИО на валидные значения
        // cy.get('.sp-content-layout')
        //     .contains('Фамилия')
        //     .next()
        //     .clear()
        //     .type('Пупкин Иванов-младший')
        //     .should('value', 'Пупкин Иванов-младший');
        // cy.get('.sp-content-layout')
        //     .contains('Имя')
        //     .next()
        //     .clear()
        //     .type('Иван Пробел-Тире')
        //     .should('value', 'Иван Пробел-Тире');
        // cy.get('.sp-content-layout')
        //     .contains('Отчество')
        //     .next()
        //     .clear()
        //     .type('Олегович Один-Два')
        //     .should('value', 'Олегович Один-Два');
        // cy.get('#input_40')
        //     .should('value', '000 000-00-00');
        // cy.get('.layout-row.flex > .layout-column.flex')
        //     .contains('Подтвердить номер телефона')
        //     .click();
        // cy.get('.sp-content-layout')
        //     .contains('Поле может содержать только')
        //     .should('not.be.visible');
        // cy.get('.md-input-message-animation')
        //     .contains('Мы не смогли отправить смс с кодом на указанный номер.')
        // cy.get('.f-danger')
        //     .contains('Проверьте отмеченные поля')
        //     .should('be.visible');

        // // создание тикета
        // cy.get('a.ng-binding')
        //     .click();
        // cy.get('.layout-row.flex > .layout-column.flex')
        //     .contains('Новый тикет')
        //     .should('be.visible');
    });
})