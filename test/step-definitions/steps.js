// steps.js
const pactum = require('pactum');
const { Given, When, Then, Before } = require('cucumber');

let spec = pactum.spec();

function tableToJson(table) {
  return table.rawTable.reduce((result, current) => {
    result[current[0]] = JSON.parse(current[1]);
    return result;
  }, {});
}

Before(() => {
  spec = pactum.spec();
});

Given('I make a GET request to {string}', function (url) {
  spec.get(url);
});

Given('I make a POST request to {string} with:', function (url, data) {
  const body = tableToJson(data);
  spec.withBody(body).post(url);
});

When('I receive a response', async function () {
  await spec.toss();
});

Then('response should have a status {int}', async function (code) {
  spec.response().should.have.status(code);
});

Then('response should have the following data:', async function (data) {
  spec.response().should.have.body(tableToJson(data));
});
