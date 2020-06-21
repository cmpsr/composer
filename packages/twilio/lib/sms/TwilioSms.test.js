"use strict";

var _ = require(".");

jest.mock('twilio');
const mockSms = {
  account_sid: 'account_sid',
  api_version: '2010-04-01',
  body: 'Hi there!',
  date_created: 'Thu, 30 Jul 2015 20:12:31 +0000',
  date_sent: 'Thu, 30 Jul 2015 20:12:33 +0000',
  date_updated: 'Thu, 30 Jul 2015 20:12:33 +0000',
  direction: 'outbound-api',
  error_code: null,
  error_message: null,
  from: '+14155552345',
  messaging_service_sid: null,
  num_media: '0',
  num_segments: '1',
  price: null,
  price_unit: null,
  sid: 'sid',
  status: 'sent',
  to: '+14155552345',
  uri: '/2010-04-01/Accounts/account_sid/Messages/sid.json'
};
const mockSendSms = jest.fn().mockReturnValue(mockSms);
describe('TwilioSms', () => {
  const config = {
    accountSid: 'account_sid',
    authToken: 'auth_token'
  };
  test('should initialize client', () => {
    new _.TwilioSms(config);

    const twilio = require('twilio');

    expect(twilio).toBeCalledTimes(1);
    expect(twilio).toBeCalledWith(config.accountSid, config.authToken);
  });

  const twilio = require('twilio');

  beforeAll(() => {
    twilio.mockReturnValue({
      messages: {
        create: mockSendSms
      }
    });
  });
  afterAll(() => {
    twilio.mockReset();
  });
  describe('send', () => {
    const body = 'Hey there!';
    const from = '+12342303790';
    const to = '+12342303791';
    test('should send sms', async () => {
      const twilioSms = new _.TwilioSms(config);
      const messageSent = await twilioSms.send(body, from, to);
      expect(mockSendSms).toBeCalledTimes(1);
      expect(mockSendSms).toBeCalledWith({
        body,
        from,
        to
      });
      expect(messageSent).toStrictEqual(mockSendSms());
    });
  });
});