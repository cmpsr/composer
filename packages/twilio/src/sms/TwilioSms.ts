import twilio from 'twilio';
import { TwilioAuthConfig } from 'types';

export class TwilioSms {
  private twilioClient: twilio.Twilio;

  constructor(config: TwilioAuthConfig) {
    this.twilioClient = twilio(config.accountSid, config.authToken);
  }

  async send(message: string, from: string, to: string) {
    const sms = await this.twilioClient.messages.create({
      body: message,
      from,
      to,
    });
    return sms;
  }
}
