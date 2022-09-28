import { SignalwireSms } from '.';

const mockSms = {
  code: '200',
  message: 'OK',
  messageId: '123',
};

const mockSendSms = jest.fn().mockReturnValue(mockSms);
const mockCreateClient = jest.fn().mockReturnValue({ send: mockSendSms });

jest.mock('@signalwire/realtime-api', () => ({
  Messaging: {
    Client: function (config) {
      return mockCreateClient(config);
    },
  },
}));

describe('SignalwireSms', () => {
  const config = {
    project: 'project',
    token: 'token',
    contexts: ['context'],
  };

  test('should initialize client', () => {
    new SignalwireSms(config);
    expect(mockCreateClient).toBeCalledTimes(1);
    expect(mockCreateClient).toBeCalledWith(config);
  });

  describe('send', () => {
    const body = 'Hey there!';
    const from = '+12342303790';
    const to = '+12342303791';

    test('should send sms', async () => {
      const signalwireSms = new SignalwireSms(config);
      const messageSent = await signalwireSms.send(body, from, to);
      expect(mockSendSms).toBeCalledTimes(1);
      expect(mockSendSms).toBeCalledWith({ body, from, to });
      expect(messageSent).toStrictEqual(mockSendSms());
    });
  });

});
