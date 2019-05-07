process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Book = require('../app_dev.php/v1');

//Подключаем dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Наш основной блок
describe('Books', () => {
    beforeEach((done) => { //Перед каждым тестом чистим базу
        Book.remove({}, (err) => { 
           done();         
        });     
    });
/*
  * Тест для /GET 
  */
  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/v1')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

});
