import { TwilioVerification } from './TwilioVerification';

const mockStartVerification = jest.fn().mockResolvedValue({ status: 'pending' });
const mockVerify = jest.fn().mockResolvedValue({ status: 'approved' });
jest.mock('twilio', () => {
  return jest.fn().mockImplementation(() => {
    return {
      verify: {
        v2: {
          services: jest.fn().mockReturnThis(),
          verifications: {
            create: () => mockStartVerification(),
          },
          verificationChecks: {
            create: () => mockVerify(),
          },
        },
      },
    };
  });
});

describe('TwilioVerification', () => {
  const config = {
    accountSid: 'account_sid',
    authToken: 'auth_token',
  };
  const verificationServiceSid = 'verification_service_sid';

  test('should initialize client', () => {
    const twilioVerification = new TwilioVerification(config, verificationServiceSid);
    expect(twilioVerification).toBeDefined();
    expect(twilioVerification).toBeInstanceOf(TwilioVerification);
  });

  test('should start verification', async () => {
    const twilioVerification = new TwilioVerification(config, verificationServiceSid);
    const status = await twilioVerification.start('+12342303791');
    expect(status).toBe('pending');
    expect(mockStartVerification).toBeCalledTimes(1);
  });

  test('should verify', async () => {
    const twilioVerification = new TwilioVerification(config, verificationServiceSid);
    const status = await twilioVerification.verify('+12342303791', '123456');
    expect(status).toBe('approved');
    expect(mockVerify).toBeCalledTimes(1);
  });
});
