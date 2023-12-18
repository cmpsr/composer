import { useTwilioSms } from '.';
import { TwilioSms } from '.';
jest.mock('twilio');

describe('index', () => {
  test('should create twilio instance', () => {
    const twilioSms = useTwilioSms();
    expect(twilioSms).toBeInstanceOf(TwilioSms);
  });
});
