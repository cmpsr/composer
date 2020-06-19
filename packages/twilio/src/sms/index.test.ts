import { useTwilioSms } from '.';
import { TwilioSms } from '.';
jest.mock('twilio');

describe('index', () => {
  test('should create plaid instance', () => {
    const twilioSms = useTwilioSms();
    expect(twilioSms).toBeInstanceOf(TwilioSms);
  });
});
