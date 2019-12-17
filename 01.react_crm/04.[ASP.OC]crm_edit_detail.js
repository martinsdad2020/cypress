let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let side = '._2Hrbd'

// asp.oc.detali@alfa.ru 123456
// 'guid-217', '{CC975CB2-EC25-A787-9CB4-F8127B0868C5}'

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min)
  return rand;
};

let randColor = randomInteger(0, 7).toFixed(0); // цвет

describe('edit detail', function () {
    beforeEach('cookie', function () {
      cy.setCookie('guid-217', '{CC975CB2-EC25-A787-9CB4-F8127B0868C5}')
      cy.server();
      cy.route('GET', 'https://crm.api.apgrup.ru/v1/*')
        .as('ww');
    });
  
    it("visit apgrup", function () {
      cy.visit("https://apgrup.ru/");
      cy.get(login)
        .click()
        .type('asp.oc.detali@alfa.ru');
      cy.get(password)
        .click()
        .type('123456');
      cy.get(enter)
        .click();
      cy.wait('@ww');
    });
  
    it('pick ruusian village', function () {
      cy.get(side)
        .contains('Компания')
        .next()
        .click();
      cy.get(companies) // выпадающий список со складами
        .contains('АСП')
        .click();
      cy.get(side)
        .contains('Склад')
        .next()
        .click();
      cy.get(storages) // выпадающий список со складами
        .contains('склад АСП')
        .click();
    });
  it('visible', function(){
    cy.get('._3-DYD')
      .contains('Компания')
      .should('be.visible');
    cy.get('._3-DYD')
      .contains('Склад')
      .should('be.visible');
    cy.get(side)
      .contains('Приходные накладные')
      .should('be.visible');
    cy.get(side)
      .contains('Список деталей')
      .should('be.visible');
    cy.get(side)
      .contains('На складе')
      .should('be.visible');
    cy.get(side)
      .contains('Неоцененные')
      .should('be.visible');
    cy.get(side)
      .contains('Неопознанные')
      .should('be.visible');
    cy.get(side)
      .contains('В резерве')
      .should('not.be.visible');
    cy.get(side)
      .contains('Ожидают подтверждения')
      .should('be.visible');  
    cy.get(side)
      .contains('Утилизировано')
      .should('not.be.visible');
    cy.get(side)
      .contains('Претензионный склад')
      .should('not.be.visible');
    cy.get(side)
      .contains('Заказы')
      .should('not.be.visible');
    cy.get(side)
      .contains('Все')
      .should('not.be.visible');
    cy.get(side)
      .contains('Новые')
      .should('not.be.visible');
    cy.get(side)
      .contains('Закрытые')
      .should('not.be.visible');
    cy.get(side)
      .contains('Пустые')
      .should('not.be.visible');
    cy.get(side)
      .contains('На удаление')
      .should('not.be.visible');
    cy.get(side)
      .contains('Мои активные')
      .should('not.be.visible');
    cy.get(side)
      .contains('Мои закрытые')
      .should('not.be.visible');
    cy.get(side)
      .contains('Заявки на перемещение')
      .should('not.be.visible');
    cy.get(side)
      .contains('Входящие')
      .should('not.be.visible');
    cy.get(side)
      .contains('Закрытые')
      .should('not.be.visible');
    cy.get(side)
      .contains('Пустые')
      .should('not.be.visible');
    cy.get(side)
      .contains('Возврат (входящие)')
      .should('not.be.visible');
    cy.get(side)
      .contains('Возврат (исходящие)')
      .should('not.be.visible');
    cy.get(side)
      .contains('Детали, ожидающие подтверждения')
      .should('not.be.visible');
    cy.get(side)
      .contains('Детали к возврату партнерам')
      .should('not.be.visible');
    cy.get(side)
      .contains('Расходные накладные')
      .should('not.be.visible');
    cy.get(side)
      .contains('Подтвержденные')
      .should('not.be.visible');
    cy.get(side)
      .contains('Оплаченные')
      .should('not.be.visible');
    cy.get(side)
      .contains('На отправку')
      .should('not.be.visible');
    cy.get(side)
      .contains('Отправленные')
      .should('not.be.visible');
    cy.get(side)
      .contains('Возвраты')
      .should('not.be.visible');
    cy.get(side)
      .contains('Заявки на ремонт')
      .should('not.be.visible');
    cy.get(side)
      .contains('Проверенные')
      .should('not.be.visible');
    cy.get(side)
      .contains('В ремонте')
      .should('not.be.visible');
    cy.get(side)
      .contains('Завершенные')
      .should('not.be.visible');
    cy.get(side)
      .contains('Обработанные')
      .should('not.be.visible');
    cy.get(side)
      .contains('Закрытые')
      .should('not.be.visible');
    cy.get(side)
      .contains('Отчеты')
      .should('not.be.visible');
    cy.get(side)
      .contains('По приходу')
      .should('not.be.visible');
    cy.get(side)
      .contains('По складу')
      .should('not.be.visible');
    cy.get(side)
      .contains('По продажам')
      .should('not.be.visible');
    cy.get(side)
      .contains('По перемещению (входящие заявки)')
      .should('not.be.visible');
    cy.get(side)
      .contains('По перемещению (исходящие заявки)')
      .should('not.be.visible');
    cy.get(side)
      .contains('По платежам')
      .should('not.be.visible');
    cy.get(side)
      .contains('По заказам')
      .should('not.be.visible');
    cy.get(side)
      .contains('По складу (без учета продаж)')
      .should('not.be.visible');
    cy.get(side)
      .contains('По возвратам')
      .should('not.be.visible');
    cy.get(side)
      .contains('По неоплаченным деталям')
      .should('not.be.visible');
    cy.get(side)
      .contains('По ремонтам')
      .should('not.be.visible');
    cy.get(side)
      .contains('По задачам')
      .should('not.be.visible');
    // cy.get(side)
    //   .contains('Компания')
    //   .should('not.be.visible');
    cy.get(side)
      .contains('Информация')
      .should('not.be.visible');
    cy.get(side)
      .contains('Сотрудники')
      .should('not.be.visible');
    cy.get(side)
      .contains('Склады')
      .should('not.be.visible');
    cy.get(side)
      .contains('Поставщики')
      .should('not.be.visible');
    cy.get(side)
      .contains('СТО')
      .should('not.be.visible');
    cy.get(side)
      .contains('Покупатели')
      .should('not.be.visible');
    cy.get(side)
      .contains('Счета')
      .should('not.be.visible');
    cy.get(side)
      .contains('Выгрузка')
      .should('not.be.visible');
    cy.get(side)
      .contains('Ассортименты')
      .should('not.be.visible');
    cy.get(side)
      .contains('Шаблоны правил')
      .should('not.be.visible');
    cy.get(side)
      .contains('Импорт')
      .should('not.be.visible');
    cy.get(side)
      .contains('Файлы')
      .should('not.be.visible');
    cy.get(side)
      .contains('Схемы')
      .should('not.be.visible');
    cy.get(side)
      .contains('Сопоставления')
      .should('not.be.visible');
    cy.get(side)
      .contains('Автоимпорт')
      .should('not.be.visible');
    cy.get(side)
      .contains('Скидки')
      .should('not.be.visible');
    cy.get(side)
      .contains('Наценки')
      .should('not.be.visible');
    cy.get(side)
      .contains('Конечная цена ждя клиента (свои детали)')
      .should('not.be.visible'); 
    cy.get(side)
      .contains('Конечная цена для клиента (детали партнеров)')
      .should('not.be.visible');
    cy.get(side)
      .contains('Системные Наценки')
      .should('not.be.visible');
    cy.get(side)
      .contains('Колл-центр')
      .should('not.be.visible');
    cy.get(side)
      .contains('Добавить предзаказ')
      .should('not.be.visible');
    cy.get(side)
      .contains('Список предзаказов')
      .should('not.be.visible');
    cy.get(side)
      .contains('Список повторных обращений')
      .should('not.be.visible');
    cy.get(side)
      .contains('История звонков')
      .should('not.be.visible');
    cy.get(side)
      .contains('Задачи сотрудников')
      .should('not.be.visible');
    cy.get(side)
      .contains('Группы пользователей')
      .should('not.be.visible');
    cy.get(side)
      .contains('Права доступа')
      .should('not.be.visible');
    cy.get(side)
      .contains('Системные настройки')
      .should('not.be.visible');
    cy.get(side)
      .contains('Шаблоны правил')
      .should('not.be.visible');
    cy.get(side)
      .contains('Добавить компанию')
      .should('not.be.visible');
  });
  it('edit', function () {
    // cy.get('._2Hrbd')
    //   .contains(new RegExp(['^',слово, '$', ].join(''), 'i'))
    cy.get(side)
      .contains('Неоцененные')
      .click();
    cy.get('.E42Z0')  
      .contains('Нет прав')
      .should('not.be.visible');
    cy.get('.E42Z0')
      .contains('Диск')
      .click();
    cy.get('.app__content') 
      .contains('Нет прав')
      .should('not.be.visible');
    cy.wait(1000);
    cy.get(side)
      .contains('Неопознанные')
      .click();
    cy.get('.E42Z0')  
      .contains('Нет прав')
      .should('not.be.visible');
    cy.get('.E42Z0')
      .contains('Кузов')
      .click();
    cy.get('.app__content') 
      .contains('Нет прав')
      .should('not.be.visible');
    cy.wait(1000);
    cy.get(side)
      .contains('Ожидают подтверждения')
      .click();
    cy.get('.E42Z0')  
      .contains('Нет прав')
      .should('not.be.visible');
    cy.get('.E42Z0')
      .contains('Двигатель')
      .click();
    cy.get('.app__content') 
      .contains('Нет прав')
      .should('not.be.visible');

    cy.get(side)
      .contains('На складе')
      .click();
    cy.get('.E42Z0')
      .contains('Нет прав')
      .should('not.be.visible');
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .contains('а')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Нет прав')
      .should('not.be.visible');

    cy.get('.app__content') // оцениваем
      .contains('Оценить')
      .should('be.visible')
      .click();
    cy.get('#form-purchasePrice')
      .type('1390')
      .should('value', '1 390');
    cy.get('#form-sellingPrice')
      .type('2700')
      .should('value', '2 700');
    cy.get('#form-estimationReason')
      .type('Первая причина это ты')
      .should('value', 'Первая причина это ты');
    cy.get('.popup__inner')
      .contains('Сохранить')
      .click();

    cy.get('.app__content') // нет кнопки добавить в резерв в детале
      .contains('Добавить в резерв')
      .should('not.be.visible');
    cy.get('.app__content')
      .contains('Утилизировать') // нет кнопки утилизировать в детале
      .should('not.be.visible');
    cy.get('.app__content')
      .contains('На претензионный склад') // нет кнопки на претензионный склад в детале
      .should('not.be.visible');

    cy.get('.app__content') // инвентаризируем и отменяем
      .contains('Инвентаризировать')
      .click();
    cy.get('.modal-footer')
      .contains('Инвентаризировать')
      .click();
    cy.get('.app__content')
      .contains('Отменить инвентаризацию') 
      .click();
    cy.get('.modal-footer')
      .contains('Отменить инвентаризацию')
      .click();
    cy.get('.app__content') 
      .contains('Инвентаризировать')
      .should('be.visible');

    cy.get('.app__content')
      .contains('Изменить')
      .click();
    cy.wait(1000);
    cy.get('#form-kod') // поле ориг номер
      .clear()
      .type('hsfdg5784')
      .should('value', 'hsfdg5784');
    cy.get('#form-rack') // поле стеллаж
      .clear()
      .type('hfF5')
      .should('value', 'hfF5');
    cy.get('#form-section') // поле секция
      .clear()
      .type('21')
      .should('value', '21');
    // cy.get(':nth-child(10) > .form__label') // производитель
    //   .next()
    //   .click();
    cy.get('#form-defects')
      .clear()
      .type('дефекты')
      .should('value', 'дефекты');
    cy.get('#form-notes')
      .clear()
      .type('Примечание')
      .should('value', 'Примечание');
    cy.get('#form-comment')
      .clear()
      .type('коммент')
      .should('value', 'коммент');

    cy.get('.modal-body')  // цвет
      .contains('Цвет')
      .next()
      .click();
    cy.get('.inputAutocomplete__popup')
      .eq(4)
      .children()
      .eq(randColor)
      .click();

    cy.get('#form-gtd')
      .clear()
      .type('GDT1')
      .should('value', 'GDT1');
    cy.get('.modal-body') // страна
      .contains('Страна')
      .next()
      .click();
    cy.get('.inputAutocomplete')
      .contains('Россия')
      .click();

    cy.get('.modal-body')
      .contains('Сохранить')
      .click();
    cy.wait(1000);
    cy.get('.modal-body')
      .contains('успешно сохранена')
      .should('be.visible');
  });

  it('models', function () {
    cy.get('#carPiсker-brand')
      .click();
    cy.get('form.ng-pristine > :nth-child(1) > :nth-child(2) > .inputAutocomplete > .inputPopup > .inputPopup__popup > div > .inputAutocomplete__popup') // список с марками
      .contains('Aston Martin')
      .click();
    cy.get('#carPiсker-model')
      .click();
    cy.get('.inputAutocomplete__popup') // список с моделями
      .contains('DB9')
      .click();
    cy.get('#carPiсker-generation')
      .click();
    cy.get('.inputAutocomplete__popup') // список с моделями
      .contains('DB9 2003 - 2016')
      .click();
    cy.get(':nth-child(2) > .col-sm-4 > .btn')
      .click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(2) > :nth-child(3)')
      .contains('DB9 2003 - 2016')
      .should('be.visible');
    cy.get(':nth-child(2) > .table > tbody > :nth-child(2) > .w1 > a > .glyphicon') // удалить авто
      .click();
    cy.wait(1000);
    cy.get('.modal-body')
      .contains('DB9 2003 - 2016')
      .should('not.be.visible');
    cy.get(':nth-child(4) > .panel-heading')
      .next()
      .click();
    cy.get('.ng-pristine > .row > .col-sm-8 > .inputAutocomplete > .inputPopup > .inputPopup__popup')
      .contains('На запчасти')
      .click();
    cy.get(':nth-child(4) > .panel-body')
      .contains('Добавить')
      .click();
    cy.wait(1000);
    cy.get('.modal-body')
      .contains('На запчасти')
      .should('be.visible');
    cy.get(':nth-child(4) > .table > tbody > tr > .w1 > a > .glyphicon')
      .click();
    cy.wait(1000);
    cy.get('.modal-body')
      .contains('На запчасти')
      .should('not.be.visible');
    cy.get('.popup__close')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Нет прав')
      .should('not.be.visible');
    cy.get('.app__content')
      .contains('Печать штрихкода')
      .click();
  });
});