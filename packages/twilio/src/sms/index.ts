import { TwilioSms } from './TwilioSms';

export const useTwilioSms = (
  accountSid = process.env.TWILIO_ACCOUNT_SID,
  authToken = process.env.TWILIO_AUTH_TOKEN,
  serviceId = process.env.TWILIO_CHAT_SERVICE_SID
): TwilioSms => {
  return new TwilioSms({ accountSid, authToken, serviceId });
};

export { TwilioSms };
export * from 'types/TwilioConversation';
