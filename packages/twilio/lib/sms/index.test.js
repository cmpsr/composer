"use strict";

var _ = require(".");

jest.mock('twilio');
describe('index', () => {
  test('should create plaid instance', () => {
    const twilioSms = (0, _.useTwilioSms)();
    expect(twilioSms).toBeInstanceOf(_.TwilioSms);
  });
});