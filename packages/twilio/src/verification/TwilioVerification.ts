import twilio from 'twilio';
import { TwilioAuthConfig, VerificationChannel, VerificationStatus } from 'types';

export class TwilioVerification {
  private twilioClient: twilio.Twilio;
  private verificationServiceSid: string;

  constructor(config: TwilioAuthConfig, verificationServiceSid: string) {
    this.twilioClient = twilio(config.accountSid, config.authToken);
    this.verificationServiceSid = verificationServiceSid;
  }

  async start(to: string, channel: VerificationChannel = 'sms', code: string = undefined): Promise<VerificationStatus> {
    const verification = await this.twilioClient.verify.v2.services(this.verificationServiceSid).verifications.create({
      to,
      channel,
      customCode: code,
    });
    return verification.status as VerificationStatus;
  }

  async verify(to: string, code: string): Promise<VerificationStatus> {
    const verification = await this.twilioClient.verify.v2
      .services(this.verificationServiceSid)
      .verificationChecks.create({
        to,
        code,
      });
    return verification.status as VerificationStatus;
  }
}
