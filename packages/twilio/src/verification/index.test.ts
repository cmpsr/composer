import { useTwilioVerification } from './index';
import { TwilioVerification } from './TwilioVerification';

jest.mock('twilio');

describe('index', () => {
  test('should create a twilio verification instance', () => {
    const twilioVerification = useTwilioVerification();
    expect(twilioVerification).toBeInstanceOf(TwilioVerification);
  });
});
