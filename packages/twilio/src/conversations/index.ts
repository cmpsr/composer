import TwilioConversation from './TwilioConversation';

export const useTwilioConversation = (
  accountSid: string = process.env.TWILIO_ACCOUNT_SID,
  authToken: string = process.env.TWILIO_AUTH_TOKEN
) => {
  return new TwilioConversation({ accountSid, authToken });
};

export { TwilioConversation };
