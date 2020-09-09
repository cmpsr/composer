export interface TwilioAuthConfig {
  accountSid: string;
  authToken: string;
  serviceId: string;
}

export type WebhookMethod = 'GET' | 'POST';
