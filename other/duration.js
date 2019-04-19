let allTime = 0;
let cycle = 100;
describe('api test', function() {
  it('1', function() {
    for(let i = 0; i < cycle; i++){
    cy.request({
      url: 'https://alfadetali.ru/action/login',
      method:'POST'
    }).then((response) => {
      expect(response.status).to.have.eq(200)
      let timeDur = response.duration
      allTime = (allTime + response.duration)
      console.log(i + ' ' + timeDur + ' ' + allTime)
    })
  }
  });
  it('1', function() {
    let sredneeTime = allTime/cycle
    console.log('среднее ввемя ответа при ' + cycle + ' запросов = ' + sredneeTime)
    assert.isOk(sredneeTime < 400, 'roma krutoy ' + sredneeTime);
});
});
