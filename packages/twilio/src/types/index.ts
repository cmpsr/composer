export interface TwilioAuthConfig {
  accountSid: string;
  authToken: string;
}

export interface TwilioConversationAuthConfig extends TwilioAuthConfig {
  serviceId: string;
}

export type WebhookMethod = 'GET' | 'POST';

export type VerificationChannel = 'sms' | 'whatsapp';

export type VerificationStatus = 'pending' | 'approved' | 'cancelled';
