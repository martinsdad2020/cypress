let login = ':nth-child(1) > .form-control';
let password = ':nth-child(2) > .form-control';
let enter = 'p > .btn';
let companies = '.css-11unzgr';
let storages = '.css-11unzgr';
let name = '.active > .panel > .panel-body > form > :nth-child(1) > ._1a95Z > .form-control'
let phone = '.active > .panel > .panel-body > form > :nth-child(2) > ._1a95Z > .form-control'
let para = ':nth-child(15) > :nth-child(2) > a';
let side = '._2Hrbd';

describe('Create an order', function () {
  beforeEach('cookie', function () {
    cy.setCookie('guid-1', '{693E078B-9FA4-3103-092F-8EFF68DC5CA7}')
  });

  it('visit apgrup', function () {
    cy.visit("https://apgrup.ru/");

    cy.get(login)
      .click()
      .clear()
      .type('ra-nt-office@yandex.ru');
    cy.get(password)
      .click()
      .clear()
      .type('superp@ss');
    cy.get(enter)
      .click();
    cy.wait(1000);
  });

  it('pick ruusian village', function () {
    cy.get('._2Hrbd')
      .contains('Компания')
      .next()
      .click();
    cy.get(companies) // выпадающий список со складами
      .contains('АльфаДетали')
      .click();
    cy.get('._2Hrbd')
      .contains('Склад')
      .next()
      .click();
    cy.get(storages) // выпадающий список со складами
      .contains('РУССКАЯ')
      .click();
    cy.wait(500);
  });

  // it('prihod nakladnie', function () {
  //   cy.get(side)
  //     .contains('Приходные накладные')
  //     .click();
  //   cy.get('.LcD1z')
  //     .contains('Добавить приходную накладную')
  //     .click();
  //   cy.wait(500);
  //   cy.get('label')
  //     .eq(4)
  //     .contains('Поставщик')
  //     .next()
  //     .click();
  //   cy.get('.css-11unzgr')
  //     .contains('ВОСТОК')
  //     .click();
  //   cy.get('.modal-body')
  //     .contains('Сохранить')
  //     .click();
  //   cy.wait(500);
  //   cy.get('.modal-footer')
  //     .contains('Закрыть')
  //     .click();
  //   cy.get('body')
  //     .contains('Нет прав')
  //     .should('not.be.visible');
  // });

  // it('na sklade', function () {
  //   cy.get(side)
  //     .contains('На складе')
  //     .click();
  //   cy.wait(3000);
  //   // cy.get('#filter-type')
  //   //   .select('Легковая');
  //   // 
  //   cy.get(':nth-child(1) > :nth-child(1) > .form-control')
  //     .click();
  //   cy.get('.modal-body')
  //     .contains('Audi')
  //     .click();
  //   cy.get('.modal-body')
  //     .contains('Выбрать')
  //     .click();
  //   cy.get('.E42Z0')
  //     .contains('Применить')
  //     .click();
  //   cy.wait(500);
  //   cy.get('._2WIgO')
  //     .contains('Audi')
  //     .should('be.visible');
  //   cy.get('.E42Z0')
  //     .contains('Нет прав')
  //     .should('not.be.visible');
  // });

    it('neocenennie', function (){
      cy.get(side)
        .contains('Неоцененные')
        .click();
      // cy.get('#filter-type')
      //   .select('Легковая');
      // cy.get('.E42Z0')
      //   .contains('Машина')
      //   .next()
      //   .click();
      cy.get(':nth-child(1) > :nth-child(1) > .form-control')
        .click();
      cy.get('.modal-body')
        .contains('Audi')
        .click();
      cy.get('.modal-body')
        .contains('Выбрать')
        .click();
      cy.get('.E42Z0')
        .contains('Применить')
        .click();
      cy.wait(500);
      cy.get('._2WIgO')
        .contains('Audi')
        .should('be.visible');
      cy.get('.E42Z0')
        .contains('Нет прав')
        .should('not.be.visible');
    });

    it('neopoznannie', function (){
        cy.get(side)
          .contains('Неопознанные')
          .click();
        // cy.get('#filter-type')
        //   .select('Легковая');
      cy.get(':nth-child(1) > :nth-child(1) > .form-control')
        .click();
      cy.get('.modal-body')
        .contains('Audi')
        .click();
      cy.get('.modal-body')
        .contains('Выбрать')
        .click();
      cy.get('.E42Z0')
        .contains('Применить')
        .click();
      cy.wait(500);
      cy.get('._2WIgO')
        .contains('Audi')
        .should('be.visible');
      cy.get('.E42Z0')
        .contains('Нет прав')
        .should('not.be.visible');
      });

      it('v rezerve', function (){
        cy.get(side)
          .contains('В резерве')
          .click();
        cy.wait(1000);
        // cy.get('.E42Z0')
        //   .contains('Деталь')
        //   .next()
        //   .click();
        cy.get(':nth-child(3) > ._1Cd4l')
          .next()
          .click();
        cy.get('.css-11unzgr')
          .contains('Филихин')
          .click();
        cy.get('.E42Z0')
          .contains('Применить')
          .click();
        cy.wait(500);
        cy.get('.E42Z0')
          .contains('Honda')
          .should('not.be.visible');
        cy.get('.E42Z0')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('ozhidaut podtverzhdenia', function (){
        cy.get(side)
          .contains('Ожидают подтверждения')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Группа')
          .next()
          .click();
        cy.get('.inputAutocomplete__popup')
          .contains('Двигатель')
          .click();
        cy.get('.app__content')
          .contains('Наименование')
          .next()
          .click();
        cy.wait(500);
        cy.get('.inputAutocomplete__popup')
          .contains('Воздуховод')
          .click();
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
        cy.get('.pull-right > .btn-success')
          .click();
        cy.wait(500);
        cy.get('.collectionTable__container')
          .contains('Fiat')
          .should('be.visible');
        cy.get('.collectionTable__container')
          .contains('BMW')
          .should('not.be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('vse', function (){
        cy.get(side)
          .contains('Все')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список заказов')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('novie', function (){
        cy.get(side)
          .contains('Новые')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список новых заказов')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('zakritie', function (){
        cy.get(side)
          .contains('Закрытые')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список закрытых заказов')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('pustie', function (){
        cy.get(side)
          .contains('Пустые')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список пустых заказов')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('na udalenie', function (){
        cy.get(side)
          .contains('На удаление')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список отмененных заказов')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('moi aktivnie', function (){
        cy.get(side)
          .contains('Мои активные')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список активных заказов')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });
     
      it('moi zakritie', function (){
        cy.get(side)
          .contains('Мои закрытые')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список закрытых заказов')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('vhodyashie', function (){
        cy.get(side)
          .contains('Входящие')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список входящих заявок на перемещение')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('ishodyashie', function (){
        cy.get(side)
          .contains('Исходящие')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список исходящих заявок на перемещение')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('vozvrat vhodyashie', function (){
        cy.get(side)
          .contains('Возврат (входящие)')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список входящих заявок на возврат перемещения')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('vozvrat ishodyashie', function (){
        cy.get(side)
          .contains('Возврат (исходящие)')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список исходящих заявок на возврат перемещения')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('detali ozhidaushie podtverzhdenia', function (){
        cy.get(side)
          .contains('Детали, ожидающие подтверждения')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список деталей, ожидающих подтверждения')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('detali ozhodaushie podtverzhdenia', function (){
        cy.get(side)
          .contains('Детали, ожидающие подтверждения')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список деталей, ожидающих подтверждения')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('detali k vozvratu parneram', function (){
        cy.get(side)
          .contains('Детали к возврату партнерам')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список деталей к возврату партнерам')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('novie rashod nakl', function (){
        cy.get(side)
          .contains('Подтвержденные')
          .prev()
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список новых расходных накладных')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('podtverzhdennie rash nakl', function (){
        cy.get(side)
          .contains('Подтвержденные')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список подтвержденных расходных накладных')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('oplachennie rash nakl', function (){
        cy.get(side)
          .contains('Оплаченные')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список оплаченных расходных накладных')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('na otpravku rash nakl', function (){
        cy.get(side)
          .contains('На отправку')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список на отправку расходных накладных')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('otpravlennie rash nakl', function (){
        cy.get(side)
          .contains('Отправленные')
          .click();
        cy.wait(500);
        cy.get('.app__content')
          .contains('Список отправленных расходных накладных')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('information', function (){
        cy.get(side)
          .contains('Информация')
          .click();
        cy.wait(500);
        cy.get('.E42Z0')
          .contains('ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ')
          .should('be.visible');
        cy.get('.E42Z0')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('postavshiki', function (){
        cy.get(side)
          .contains('Поставщики')
          .click();
        cy.wait(500);
        cy.get('.E42Z0')
          .contains('Добавить поставщика')
          .should('be.visible');
        cy.get('.E42Z0')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('pokupateli', function (){
        cy.get(side)
          .contains('Покупатели')
          .click();
        cy.wait(500);
        cy.get('.E42Z0')
          .contains('Добавить покупателя')
          .should('be.visible');
        cy.get('.E42Z0')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('scheta', function (){
        cy.get(side)
          .contains('Счета')
          .click();
        cy.wait(500);
        cy.get('.E42Z0')
          .contains('Список банковских счетов')
          .should('be.visible');
        cy.get('.E42Z0')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('predzakaz', function (){
        cy.get(side)
          .contains('Добавить предзаказ')
          .click();
        cy.wait(500);
        cy.get(name) // поле имя
          .type('Roman')
          .should('value', 'Roman');
        cy.get(phone) // поле телефон
          .type('+79992070525')
          .should('value', '+79992070525');
        cy.get('._1a95Z > .select > .select__control > .select__value-container')
          .type('Прямая продажа{enter}{enter}');
        cy.wait(1000);
        cy.get('.messengerUpload')
          .contains('Предзаказ №')
          .should('be.visible');
        cy.get('.messengerUpload')
          .contains('Roman')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });

        it('spisok predzakazov', function (){
        cy.get(side)
          .contains('Список предзаказов')
          .click();
        cy.wait(500);
        cy.get('.E42Z0')
          .contains('Список предзаказов')
          .should('be.visible');
        cy.get('.E42Z0')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('spisok povtornih obrasheniy', function (){
        cy.get(side)
          .contains('Список повторных обращений')
          .click();
        cy.wait(1000);
        cy.get('.E42Z0')
          .contains('Повторные обращение')
          .should('be.visible');
        cy.get('.E42Z0')
          .contains('Нет прав')
          .should('not.be.visible');
        cy.get('.E42Z0')
          .contains('60')
          .click();
        cy.get('.E42Z0')
          .contains('Нет прав')
          .should('not.be.visible');
      });

      it('istoriya zvonkov', function (){
        cy.get(side)
          .contains('История звонков')
          .click();
        cy.wait(1000);
        cy.get('.E42Z0')
          .contains('История звонков')
          .should('be.visible');
          cy.get('.E42Z0')
          .contains('Нет прав')
          .should('not.be.visible');
        cy.get('.E42Z0')
          .contains('56')
          .click();
        cy.wait(1000);
        cy.get('.E42Z0')
          .contains('Входящий звонок')
          .should('be.visible');
        cy.get('.app__content')
          .contains('Нет прав')
          .should('not.be.visible');
      });
});