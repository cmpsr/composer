"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _twilio = _interopRequireDefault(require("twilio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TwilioConversation {
  constructor(config) {
    this.config = config;
    this.twilioClient = (0, _twilio.default)(config.accountSid, config.authToken);
  }

  async create(friendlyName) {
    const conversation = await this.twilioClient.conversations.conversations.create({
      friendlyName
    });
    return conversation.toJSON();
  }

  async getConversations() {
    const conversations = await this.twilioClient.conversations.conversations.list();
    return conversations.map(c => c.toJSON());
  }

  async getConversation(sid) {
    const conversation = await this.twilioClient.conversations.conversations(sid).fetch();
    return conversation.toJSON();
  }

  async addSmsParticipant(conversationSid, invitedPhone, inviterPhone) {
    const participant = await this.twilioClient.conversations.conversations(conversationSid).participants.create({
      messagingBinding: {
        address: invitedPhone,
        proxyAddress: inviterPhone
      }
    });
    return participant.toJSON();
  }

  async addParticipant(conversationSid, identity) {
    const participant = await this.twilioClient.conversations.conversations(conversationSid).participants.create({
      identity
    });
    return participant.toJSON();
  }

  async sendMessage(conversationSid, author, body, attributes) {
    const message = await this.twilioClient.conversations.conversations(conversationSid).messages.create({
      author,
      body,
      attributes
    });
    return message.toJSON();
  }

  async getMessages(conversationSid) {
    const messages = await this.twilioClient.conversations.conversations(conversationSid).messages.list();
    return messages.map(m => m.toJSON());
  }

  async addConversationWebhook(conversationSid, webhook, method = 'POST') {
    const configuration = {
      method: method,
      filters: ['onMessageAdded'],
      url: webhook
    };
    const twilioWebhook = await this.twilioClient.conversations.conversations(conversationSid).webhooks.create({
      configuration,
      target: 'webhook'
    });
    return twilioWebhook.toJSON();
  }

  async getMedia(mediaId) {
    const {
      accountSid,
      authToken,
      serviceId
    } = this.config;
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

var _default = TwilioConversation;
exports.default = _default;