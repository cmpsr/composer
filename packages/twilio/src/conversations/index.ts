import TwilioConversation from './TwilioConversation';

export const useTwilioConversation = (
  accountSid: string = process.env.TWILIO_ACCOUNT_SID,
  authToken: string = process.env.TWILIO_AUTH_TOKEN,
  serviceId: string = process.env.TWILIO_CHAT_SERVICE_SID,
) => new TwilioConversation({ accountSid, authToken, serviceId });

export { TwilioConversation };
