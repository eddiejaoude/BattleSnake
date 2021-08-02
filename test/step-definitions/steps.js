// steps.js
const pactum = require('pactum');
const { Given, When, Then, Before } = require('cucumber');
const _ = require('lodash');

let spec = pactum.spec();
let store = {};

function tableToJson(table) {
  return table.rawTable.reduce((result, current) => {
    result[current[0]] = JSON.parse(current[1]);
    return result;
  }, {});
}

function tableToArray(table) {
  return table.rawTable.map((item) => JSON.parse(item[0]));
}

Before(() => {
  spec = pactum.spec();
});

Given('I make a GET request to {string}', function (url) {
  spec.get(url);
});

Given(
  'I prepare a POST request with property {string} and with object:',
  function (field, data) {
    const body = tableToJson(data);
    _.set(store, field, body);
  },
);

Given(
  'I prepare a POST request to collection {string} and with object:',
  function (field, data) {
    const body = tableToJson(data);

    existing = _.get(store, field, []);
    existing.push(body);
    _.set(store, field, existing);
  },
);

Given(
  'I prepare a POST request with property {string} and with collection:',
  function (field, data) {
    const body = tableToArray(data);

    _.set(store, field, body);
  },
);

Given(
  'I prepare a POST request with property {string} and value {string}',
  function (field, body) {
    _.set(store, field, body);
  },
);

Given('I make a POST request to {string} with:', function (url, data) {
  const body = tableToJson(data);
  spec.withBody(body).post(url);
});

Given('I make a POST request to {string}', function (url) {
  if (store) {
    spec.withJson(store);
  }

  spec.post(url);

  store = {};
});

When('I receive a response', async function () {
  await spec.toss();
});

Then('response should have a status {int}', async function (code) {
  spec.response().should.have.status(code);
});

Then('response should have the following object:', async function (data) {
  spec.response().should.have.body(tableToJson(data));
});
