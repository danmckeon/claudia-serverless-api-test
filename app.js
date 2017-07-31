let ApiBuilder = require('claudia-api-builder');
let api = new ApiBuilder();

module.exports = api;

api.get('/hello', () => {
  return 'hello world';
})

api.get('/greet', (request) => {
  let superb = require('superb');
  return request.queryString.name + ' is ' + superb();
})
