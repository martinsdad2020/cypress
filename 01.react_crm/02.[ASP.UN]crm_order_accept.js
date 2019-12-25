let login = ':nth-child(1) > .form-control'
let password = ':nth-child(2) > .form-control'
let enter = 'p > .btn'
let companies = '.css-11unzgr'
let storages = '.css-11unzgr'
let name = '.active > .panel > .panel-body > form > :nth-child(1) > ._1a95Z > .form-control'
let phone = '.active > .panel > .panel-body > form > :nth-child(2) > ._1a95Z > .form-control'
let para = ':nth-child(15) > :nth-child(2) > a'

// asp.manager@alfa.ru  123456
// 'guid-216', '{6524511F-44F9-12C7-1FAC-54D62F5374CC}'

describe('Create an order', function () {
  beforeEach('cookie', function () {
    cy.setCookie('guid-216', '{6524511F-44F9-12C7-1FAC-54D62F5374CC}')
    cy.server();
    cy.route('GET', 'https://crm.api.apgrup.ru/v1/*')
      .as('ww');
  });

  it('visit apgrup', function () {
    cy.visit("https://apgrup.ru/");

    cy.get(login)
      .click()
      .clear()
      .type('asp.manager@alfa.ru');
    cy.get(password)
      .click()
      .clear()
      .type('123456');
    cy.get(enter)
      .click();
    cy.wait('@ww');
  });

  it('pick ruusian village', function () {
    cy.get('._2Hrbd')
      .contains('Компания')
      .next()
      .click();
    cy.get(companies) // выпадающий список со складами
      .contains('АСП')
      .click();
    cy.get('._2Hrbd')
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('склад АСП')
      .click();
    cy.get('._2JR3u')
      .contains('АСП Пулково')
      .should('be.visible');
    cy.wait(1000);
  });

  it('preorder', function () {
    cy.get('._2Hrbd')
      .contains('Добавить предзаказ')
      .click();
    cy.wait(1000);
    cy.get('.E42Z0')
      .contains('Создать')
      .click();
    cy.get('.E42Z0') // уведомление под полем ввода имя
      .contains('Обязательное поле')
      .should('be.visible');
    cy.get(name) // поле имя
      .type('Roman')
      .should('value', 'Roman');
    cy.get(phone) // поле телефон
      .type('+79992070525')
      .should('value', '+79992070525');
    // cy.get('.active > .panel > .panel-body > form > :nth-child(3) > ._2u9XO > span') // взять селектор слова "Источник" и некстом взять его поле
    //   .next()
    //   .click();
    cy.get('._1a95Z > .select > .select__control > .select__value-container')
      .type('Прямая продажа{enter}');
    // cy.get('.E42Z0') // выбрать на станице "Другое" и кликнуть
    //   .contains('Другое')
    //   .should('not.be.visible')
    // cy.get('.E42Z0')
    //   .contains('Колл-центр')
    //   .should('not.be.visible')
    // cy.get('.E42Z0')
    //   .contains('Прямая продажа')
    //   .click();
    cy.get('.E42Z0')
      .contains('Создать')
      .click();
    cy.wait(1000);
    cy.get('.messengerUpload')
      .contains('Предзаказ №')
      .should('be.visible');
    cy.get('.messengerUpload')
      .contains('Roman')
      .should('be.visible');
    cy.get('#form-description') // поле сообщение*
      .click()
      .type('test');
  });

  it('Search and add detail', function () {
    cy.get('#quickSearch')
      .click();
    cy.get('.partsQuickSearch__content')
      .contains('Свернуть')
      .should('be.visible');
    cy.get(':nth-child(1) > .row > :nth-child(1) > [field="field"] > .form-control') //поле машина
      .click();
    cy.wait(1000);
    cy.get('.modal-body') // список марок в поле поиска
      .contains('BMW')
      .click();
    cy.get('.modal-body')
      .contains('2-Series Grand Tourer')
      .click();
    cy.wait(1000);
    cy.get('.modal-body')
      .contains('Выбрать')
      .click();
    cy.wait(1000);
    cy.get('#filter-original')
      .select('Да');
    // cy.get('[style="margin-bottom: 20px"] > :nth-child(1) > .row > :nth-child(2) > [field="field"] > .form-control') // поле наименование
    //   .click();
    // cy.wait(25000);
    // cy.get('.modal-body')
    //   .contains('Двигатель')
    //   .click();
    // cy.get('.modal-body')
    //   .contains('Башмак')
    //   .click();
    cy.get('.pull-right > .btn-success') // кнопка применить во всплывающем поиске
      .click();
    cy.wait(1000);
    cy.get('.partsQuickSearch__content')
      .contains('Добавить')
      .click({ force: true });
    cy.get('.modal-body > .panel > .panel-body')
      .contains('Добавить')
      .click();
    cy.get('.draggableWindow__close')
      .click({ force: true });
    cy.get('.app__content')
      .contains('BMW')
      .should('be.visible');
    cy.get('.messengerUpload')
      .contains('Создать заказ')
      .click();
    cy.get('.modal-footer')
      .contains('Создать')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('работе')
      .should('be.visible');
  });

  it('close order', function () {
    cy.get('._2JR3u')
      .contains('Мои задачи')
      .click();
    cy.get(':nth-child(2) > .list-group > .list-group-item') // в задачах первое поле с задачей
      .contains('наличие')
      .click();
    cy.wait(1000);
    cy.get('.collectionTable__popover > span') // бургер на странице проверить наличие детали
      .click();
    cy.get('.contextPopover')
      .contains('Подтвердить')
      .click();
    cy.get('.modal-body')
      .contains('Сохранить')
      .click();
    cy.wait(1000);
    cy.get('.alert')
      .contains('№')
      .click();
  });

  it('repay', function(){
    cy.get('span > .fa')
      .click();
    cy.get('.contextPopover')
      .contains('Переоценить')
      .click();
    cy.get('#form-newPrice')
      .type('999');
    cy.get('#form-reason')
      .type('Причина');
    cy.get('.modal-body')
      .contains('Сохранить')
      .click();
    cy.wait(1000);
    cy.get(':nth-child(5) > .currency')
      .contains('999,00')
      .should('be.visible');
    cy.get('span > .fa')
      .click();
    cy.get('.contextPopover')
      .contains('Переоценить')
      .click();
    cy.get('#form-newPrice')
      .type('888');
    cy.get('#form-reason')
      .type('Причина');
    cy.get('.modal-body')
      .contains('Сохранить')
      .click();
    cy.wait(1000);
    cy.get(':nth-child(5) > .currency')
      .contains('888,00')
      .should('be.visible');
   });
  it('add payment', function () {
    cy.get('.app__content')
      .contains('Платежи')
      .click();
    cy.get('.app__content')
      .contains('Добавить платеж')
      .click();
    cy.get(':nth-child(1) > .form__label') // Тип
      .next()
      .click();
    cy.get('[name=""] > .inputAutocomplete > .inputPopup > .inputPopup__popup > div > .inputAutocomplete__popup')
      .contains('карта')
      .click();
    cy.get('#form-summ')
      .type('888')
    cy.get('.modal-body')
      .contains('Создать')
      .click();
    cy.wait(1000);
    cy.get('.tab-pane.active > [template="template"] > [filter-fields="$parent.undefined"] > .collection__wrapper > .collectionTable > .collectionTable__wrapper > .collectionTable__container > .collectionTable__table > .table > tbody > tr > .collectionTable__popover-wrapper > .collectionTable__popover > span') // бургер
      .click();
    cy.get('.contextPopover')
      .contains('Подтвердить')
      .click();
    cy.get('.modal-footer')
      .contains('Подтвердить')
      .click();
    cy.wait(1000);
  });

  it('close order', function () {
    cy.get('.app__content')
      .contains('Прикрепленные')
      .click();
    cy.get('[scope="ctrl.orderScope"] > .panel-body')
      .contains('Добавить')
      .click();
    cy.get('.popup__inner')
      .contains('Создать')
      .click();
    cy.get(':nth-child(2) > .inputBoolean > .inputBoolean__checkbox') // checkbox
      .click();
    cy.get('.modal-footer')
      .contains('Добавить')
      .click();
    cy.get('.modal-content > :nth-child(1) > .modal-footer')
      .contains('Добавить')
      .click();
    cy.wait(1000);
    cy.get('.nav')
      .contains('Расходные')
      .click();
    cy.get('.tab-pane.active > [template="template"] > [filter-fields="$parent.undefined"] > .collection__wrapper > .collectionTable > .collectionTable__wrapper > .collectionTable__container > .collectionTable__table > .table > tbody > tr > :nth-child(2) > a')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Подтвердить')
      .click();
    cy.wait(1000);
    cy.get('.modal-footer')
      .contains('Подтвердить')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Оплатить')
      .click();
    cy.wait(1000);
    cy.get('.modal-footer')
      .contains('Оплатить')
      .click();
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Отгружено')
      .click();
    cy.wait(1000);
    cy.get('.modal-footer')
      .contains('Подтвердить')
      .click();
    cy.wait(1000);
    cy.get('.col-md-8')
      .contains('№')
      .click({ force: true });
    cy.wait(1000);
    cy.get('.app__content')
      .contains('Закрыт')
      .should('be.visible');

  });
});