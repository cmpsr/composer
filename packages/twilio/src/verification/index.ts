import { TwilioVerification } from './TwilioVerification';

export const useTwilioVerification = (
  accountSid = process.env.TWILIO_ACCOUNT_SID,
  authToken = process.env.TWILIO_AUTH_TOKEN,
  verificationServiceSid = process.env.TWILIO_VERIFICATION_SERVICE_SID,
): TwilioVerification => new TwilioVerification({ accountSid, authToken }, verificationServiceSid);

export { TwilioVerification };
