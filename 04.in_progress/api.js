describe('api test', function() {
  it('1', function() {
    cy.request({
      url: 'https://alfadetali.ru/action/login',
      method:'POST',
    }).then((response) => {
      let body = response.body
      console.log(JSON.stringify(body) + ' llkjjn')
      console.log(response.body.token + ' это токен')
      expect(response.status).to.have.eq(200)
      assert.isString(response.body.token, JSON.stringify(body))
      assert.notEqual(null, response.body.token, JSON.stringify(body))
      assert.equal(null, response.body.city, JSON.stringify(body))
    })
  });
});
