let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let side = '._2Hrbd'

// asp.add.detail@alfa.ru 123456
// guid-219', '{EDC2DD64-DFC5-1614-D955-1D77A0F51365}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min)
  return rand;
};

let randProvider = randomInteger(0, 49).toFixed(0); // поставщик
let randGroup = randomInteger(0, 17).toFixed(0); // группа
let randName = randomInteger(0, 10).toFixed(0); // наименование
let randProducer = randomInteger(0, 500).toFixed(0); // производитель
let randColor = randomInteger(0, 7).toFixed(0); // цвет
let randRate = randomInteger(0, 4).toFixed(0); // рейтинг
let randDefect = randomInteger(0, 24).toFixed(0); // рейтинг
let randBrand = randomInteger(0, 88).toFixed(0); // бренд
let randModel = randomInteger(0, 1).toFixed(0);  // модель
let randGen = randomInteger(0, 0).toFixed(0);  // поколение

describe('add new detail', function () {
  beforeEach('cookie', function () {
    cy.setCookie('guid-219', '{EDC2DD64-DFC5-1614-D955-1D77A0F51365}')
  });
 
  it("visit apgrup", function () {
    cy.visit("https://apgrup.ru/");
    cy.get(login)
      .click()
      .type('asp.add.detail@alfa.ru');
    cy.get(password)
      .click()
      .type('123456');
    cy.get(enter)
      .click();
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
    cy.get('._2JR3u')
      .contains('АСП')
      .should('be.visible');
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
      .should('not.be.visible');  
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
      .should('be.visible');
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

  it('add new detail', function () {
    cy.get(side)
      .contains('Приходные накладные')
      .click();
    cy.wait(1000);
    cy.get('button')
      .contains('Добавить')
      .click();
    cy.wait(1000);

// поставщик
    cy.get('._3uesc > .css-2b097c-container') 
      .type('Запкар{enter}{enter}');
    cy.wait(1000);
    cy.get('.modal-footer')
      .contains('Закрыть')
      .click();
    cy.get('.E42Z0')
      .contains('Добавить деталь')
      .click();
    cy.wait(1000);

// группа
    cy.get('.modal-body')
      .contains('Группа')
      .next()
      .click();
    cy.wait(500);
    cy.get('.css-11unzgr')
      .eq(0)
      .children()
      .eq(randGroup)
      .click();

// наименование
    cy.get('.modal-body')
      .contains('Наименование')
      .next()
      .type('а{enter}');

// количество
    cy.get('.modal-body')
      .contains('Количество')
      .next()
      .type('1');
   
// оригинальный номер
    cy.get('.modal-body')
      .contains('Оригинальный номер')
      .next()
      .type('Gh84');
    
// стеллаж
    cy.get('.modal-body')
      .contains('Стеллаж')
      .next()
      .type('Y7');
     
// секция
    cy.get('.modal-body')
      .contains('Секция')
      .next()
      .type('I9');

// описание повреждений
    cy.get('.modal-body')
      .contains('Описание повреждений')
      .next()
      .type('Вмятина');

// примечание
    cy.get('.modal-body')
      .contains('Примечание')
      .next()
      .type('Заметка');

// внутренний комментарий
    cy.get('.modal-body')
      .contains('Внутренний комментарий')
      .next()
      .type('коммент');

// цвет
    cy.get('.modal-body')
      .contains('Цвет')
      .next()
      .type('Белый{enter}{enter}')
    cy.wait(500);
  });

  it('add new car', function () {
// отображается коммен
    cy.get('.modal-body') 
      .contains('коммент')
      .should('be.visible');

    cy.get('form > :nth-child(1) > :nth-child(2) > ._3uesc > .css-2b097c-container > .css-1tehwa7-control > .css-1hwfws3')
      .type('Opel{enter}');

    // cy.get('#selectMenu') // список с марками
    //   .eq(8)
    //   .children()
    //   .eq(randBrand)
    //   .click();
    cy.get(':nth-child(3) > ._3uesc > .css-2b097c-container > .css-1tehwa7-control > .css-1hwfws3')
      .type('Omega{enter}');
    cy.get(':nth-child(2) > .col-sm-8 > ._3uesc > .css-2b097c-container > .css-1tehwa7-control > .css-1hwfws3')
      .type('Omega A{enter}');
    // cy.get('#carPiсker-model')
    //   .click();
    // cy.get('.inputAutocomplete__popup') // список с моделями
    //   .eq(9)
    //   .children()
    //   .eq(randModel)
    //   .click();
    // cy.get('#carPiсker-generation')
    //   .click()
    // cy.get('.inputAutocomplete__popup') // список с моделями
    //   .eq(10)
    //   .children()
    //   .eq(randGen)
    //   .click();
    cy.get(':nth-child(1) > .panel-body')
      .contains('Добавить')
      .click();
    cy.get('.modal-body')
      .contains('Omega A 1986 - 1994')
      .should('be.visible');
    cy.get('._3Bz1P > .fa')
      .click();
    // cy.get('tbody > tr.ng-scope > :nth-child(3)') // область для проверки поколения авто на видимость после добавления к детали в окне ред.
    //   .contains('A3 [8PA] 2004 - 2013')
    //   .should('be.visible');
  });

  it('submit detail', function () {
    cy.get('thead > tr > :nth-child(2) > ._1jidx > ._3o-8L')
      .click();
    cy.get('.E42Z0')
      .contains('Подтвердить')
      .click();
    cy.wait(1000);
    cy.get('.E42Z0')
      .contains('Отменить')
      .should('be.visible');
  });

  it('add price', function () {
    cy.get('._2WIgO > .table > tbody > tr > :nth-child(2) > a')
      .click();
    cy.wait(1000)
    cy.get('.app__content')
      .contains('Оценить')
      .click();
    cy.get('#form-purchasePrice')
      .type('777');
    cy.get('#form-sellingPrice')
      .type('777');
    cy.get('.popup__inner')
      .contains('Сохранить')
      .click();
    cy.wait(500);
  });

  it('check data', function(){
    cy.get('.app__content')
      .contains('Нет прав')
      .should('not.be.visible');
    cy.get('.app__content')
      .contains('Y7')
      .should('be.visible');
    cy.get('.app__content')
      .contains('I9')
      .should('be.visible');
    cy.get('.app__content')
      .contains('GH84')
      .should('be.visible');
    cy.get('.app__content')
      .contains('Запкар')
      .should('be.visible'); 
    cy.get('.app__content')
      .contains('Заметка')
      .should('be.visible'); 
    cy.get('.app__content')
      .contains('коммент')
      .should('be.visible');
    cy.get('.app__content')
      .contains('Вмятина')
      .should('be.visible');
    cy.get('.app__content')
      .contains('Белый')
      .should('be.visible');
    cy.get('.app__content')
      .contains('Opel Omega A 1986 - 1994')
      .should('be.visible');     
    cy.get('.app__content')
      .contains('777,00')
      .should('be.visible');     
    
    cy.get('.partModels__item')
      .contains('Открыть в магазине')
      .click({ force: true });
  });

   it('other', function(){
    cy.get(side)
      .contains('На складе')
      .click();
    cy.get('.E42Z0') 
      .contains('Нет прав')
      .should('not.be.visible');
    cy.get(side)
      .contains('Неоцененные')
      .click();
    cy.get('.E42Z0') 
      .contains('Нет прав')
      .should('not.be.visible');
    cy.get(side)
      .contains('Неопознанные')
      .click();
    cy.get('.E42Z0') 
      .contains('Нет прав')
      .should('not.be.visible');
    cy.get(side)
      .contains('Поставщики')
      .click();
    cy.get('.E42Z0') 
      .contains('Нет прав')
      .should('not.be.visible');
   });
});