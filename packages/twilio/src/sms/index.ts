import { TwilioSms } from './TwilioSms';

const useTwilioSms = (
  accountSid = process.env.TWILIO_ACCOUNT_SID,
  authToken = process.env.TWILIO_AUTH_TOKEN
): TwilioSms => {
  return new TwilioSms({ accountSid, authToken });
};

export { TwilioSms, useTwilioSms };
