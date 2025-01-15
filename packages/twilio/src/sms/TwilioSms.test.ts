import { TwilioSms } from '.';
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
  uri: '/2010-04-01/Accounts/account_sid/Messages/sid.json',
};
const mockSendSms = jest.fn().mockReturnValue(mockSms);
const mockListPhones = jest.fn();
const mockAvailablePhoneNumbers = jest.fn().mockReturnValue({
  local: {
    list: mockListPhones,
  },
});
const mockCreatePhone = jest.fn();
const mockIncomingPhoneNumbers = {
  create: mockCreatePhone,
};

describe('TwilioSms', () => {
  const config = {
    accountSid: 'account_sid',
    authToken: 'auth_token',
  };

  test('should initialize client', () => {
    new TwilioSms(config);
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const twilio = require('twilio');
    expect(twilio).toBeCalledTimes(1);
    expect(twilio).toBeCalledWith(config.accountSid, config.authToken);
  });

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const twilio = require('twilio');
  beforeAll(() => {
    twilio.mockReturnValue({
      messages: {
        create: mockSendSms,
      },
      availablePhoneNumbers: mockAvailablePhoneNumbers,
      incomingPhoneNumbers: mockIncomingPhoneNumbers,
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
      const twilioSms = new TwilioSms(config);
      const messageSent = await twilioSms.send(body, from, to);
      expect(mockSendSms).toBeCalledTimes(1);
      expect(mockSendSms).toBeCalledWith({ body, from, to });
      expect(messageSent).toStrictEqual(mockSendSms());
    });
  });

  describe('availablePhones', () => {
    const areaCode = 301;
    test('should call available phones with given country', () => {
      const country = 'ES';
      const twilioSms = new TwilioSms(config);
      twilioSms.availablePhones(areaCode, country);
      expect(mockAvailablePhoneNumbers).toBeCalledTimes(1);
      expect(mockAvailablePhoneNumbers).toBeCalledWith(country);
    });
    test('should call available phones with default country', () => {
      const twilioSms = new TwilioSms(config);
      twilioSms.availablePhones(areaCode);
      expect(mockAvailablePhoneNumbers).toBeCalledTimes(1);
      expect(mockAvailablePhoneNumbers).toBeCalledWith('US');
    });
    test('should call list with given filters', () => {
      const twilioSms = new TwilioSms(config);
      const country = 'ES';
      const mmsEnabled = false;
      const smsEnabled = false;
      const limit = 20;
      twilioSms.availablePhones(
        areaCode,
        country,
        mmsEnabled,
        smsEnabled,
        limit,
      );
      expect(mockListPhones).toBeCalledTimes(1);
      expect(mockListPhones).toBeCalledWith({
        areaCode,
        mmsEnabled,
        smsEnabled,
        limit,
      });
    });
    test('should call list with default filters', () => {
      const twilioSms = new TwilioSms(config);
      twilioSms.availablePhones(areaCode);
      expect(mockListPhones).toBeCalledTimes(1);
      expect(mockListPhones).toBeCalledWith({
        areaCode,
        mmsEnabled: true,
        smsEnabled: true,
        limit: 10,
      });
    });
    test('should return phones list', async () => {
      const mockList = [
        {
          friendlyName: 'Friendly name',
          phoneNumber: '(234) 230-3790',
        },
      ];
      mockListPhones.mockReturnValueOnce(mockList);
      const twilioSms = new TwilioSms(config);
      const phones = await twilioSms.availablePhones(areaCode);
      expect(phones).toStrictEqual(mockList);
    });
  });

  describe('buy', () => {
    const phoneNumber = '+12342303790';
    const friendlyName = 'Friendly name';
    const smsUrl = 'SMS url';
    const smsMethod = 'POST';

    test('should create and return phone', async () => {
      const mockPhone = {
        friendlyName: 'Friendly name',
        phoneNumber: '(234) 230-3790',
      };
      mockCreatePhone.mockReturnValueOnce(mockPhone);
      const twilioSms = new TwilioSms(config);
      const phone = await twilioSms.buy(
        phoneNumber,
        friendlyName,
        smsUrl,
        smsMethod,
      );
      expect(mockCreatePhone).toBeCalledTimes(1);
      expect(mockCreatePhone).toBeCalledWith({
        phoneNumber,
        friendlyName,
        smsUrl,
        smsMethod,
      });
      expect(phone).toStrictEqual(mockPhone);
    });
  });
});
