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

  async availablePhones(
    areaCode: number,
    country: string = 'US',
    mmsEnabled: boolean = true,
    smsEnabled: boolean = true,
    limit: number = 10
  ) {
    const phones = await this.twilioClient
      .availablePhoneNumbers(country)
      .local.list({ areaCode, mmsEnabled, smsEnabled, limit });
    return phones;
  }

  async buy(
    phoneNumber: string,
    friendlyName: string,
    smsUrl: string,
    smsMethod: string
  ) {
    const phone = await this.twilioClient.incomingPhoneNumbers.create({
      phoneNumber,
      friendlyName,
      smsUrl,
      smsMethod,
    });
    return phone;
  }
}
