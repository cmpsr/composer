"use strict";

var _ = require("./");

var _client = require("./client");

jest.mock('plaid');
describe('index', () => {
  test('should create plaid instance', () => {
    const plaid = (0, _.getPlaidInstance)({
      publicToken: 'public token'
    });
    expect(plaid).toBeInstanceOf(_client.Plaid);
  });
});