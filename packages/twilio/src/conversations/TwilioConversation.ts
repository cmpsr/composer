import twilio from 'twilio';
import { TwilioConversationAuthConfig, WebhookMethod } from 'types';

class TwilioConversation {
  private config: TwilioConversationAuthConfig;
  private twilioClient: twilio.Twilio;

  constructor(config: TwilioConversationAuthConfig) {
    this.config = config;
    this.twilioClient = twilio(config.accountSid, config.authToken);
  }

  async create(friendlyName: string) {
    const conversation = await this.twilioClient.conversations.v1.conversations.create({
      friendlyName,
    });
    return conversation.toJSON();
  }

  async getConversations() {
    const conversations = await this.twilioClient.conversations.v1.conversations.list();
    return conversations.map((c) => c.toJSON());
  }

  async getConversation(sid: string) {
    const conversation = await this.twilioClient.conversations.v1.conversations(sid).fetch();
    return conversation.toJSON();
  }

  async addSmsParticipant(conversationSid: string, invitedPhone: string, inviterPhone: string) {
    const participant = await this.twilioClient.conversations.v1.conversations(conversationSid).participants.create({
      'messagingBinding.address': invitedPhone,
      'messagingBinding.proxyAddress': inviterPhone,
    });
    return participant.toJSON();
  }

  async addParticipant(conversationSid: string, identity: string) {
    const participant = await this.twilioClient.conversations.v1
      .conversations(conversationSid)
      .participants.create({ identity });
    return participant.toJSON();
  }

  async sendMessage(conversationSid: string, author: string, body: string, attributes?: string) {
    const message = await this.twilioClient.conversations.v1
      .conversations(conversationSid)
      .messages.create({ author, body, attributes });
    return message.toJSON();
  }

  async getMessages(conversationSid: string) {
    const messages = await this.twilioClient.conversations.v1.conversations(conversationSid).messages.list();
    return messages.map((m) => m.toJSON());
  }

  async addConversationWebhook(conversationSid: string, webhook: string, method: WebhookMethod = 'POST') {
    const twilioWebhook = await this.twilioClient.conversations.v1.conversations(conversationSid).webhooks.create({
      'configuration.method': method,
      'configuration.filters': ['onMessageAdded'],
      'configuration.url': webhook,
      target: 'webhook',
    });
    return twilioWebhook.toJSON();
  }

  async getMedia(mediaId: string) {
    const { accountSid, authToken, serviceId } = this.config;
    const url = `https://${accountSid}:${authToken}@mcs.us1.twilio.com/v1/Services/${serviceId}/Media/${mediaId}`;
    let response = await fetch(url);
    if (!response.ok) return undefined;
    const media = await response.json();
    const mediaUrl = media['links']['content_direct_temporary'];
    response = await fetch(mediaUrl);
    if (!response.ok) return undefined;
    const mediaContent = await response.arrayBuffer();
    return mediaContent;
  }
}

export default TwilioConversation;
