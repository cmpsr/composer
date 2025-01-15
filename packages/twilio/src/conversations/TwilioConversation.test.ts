import TwilioConversation from './TwilioConversation';
jest.mock('twilio');

const conversation = {
  accountSid: 'account_sid',
  chatServiceSid: 'chat_service_sid',
  messagingServiceSid: 'messaging_service_sid',
  sid: 'sid',
  friendlyName: 'Conversation Name',
  attributes: '{}',
  dateCreated: '2020-04-21T16:39:45.000Z',
  dateUpdated: '2020-04-21T16:39:45.000Z',
  url: 'https://conversations.twilio.com/v1/Conversations/sid',
  links: {
    participants:
      'https://conversations.twilio.com/v1/Conversations/sid/Participants',
    messages: 'https://conversations.twilio.com/v1/Conversations/sid/Messages',
    webhooks: 'https://conversations.twilio.com/v1/Conversations/sid/Webhooks',
  },
  toJSON: () => {
    return conversation;
  },
};
const participant = {
  sid: 'sid',
  accountSid: 'account_sid',
  attributes: '{}',
  conversationSid: 'conversation_sid',
  dateCreated: '2020-04-21T16:39:45.000Z',
  dateUpdated: '2020-04-21T16:39:45.000Z',
  identity: 'identity',
  messagingBinding: {
    address: 'invited phone',
    proxyAddress: 'inviter phone',
  },
  toJSON: () => {
    return participant;
  },
};
const message = {
  accountSid: 'account_sid',
  conversationSid: 'conservation_sid',
  sid: 'sid',
  identity: 'sender',
  attributes: '{}',
  messagingBinding: null,
  dateCreated: '2020-04-23T13:16:38.000Z',
  dateUpdated: '2020-04-23T13:16:38.000Z',
  url: 'https://conversations.twilio.com/v1/Conversations/sid/Participants/sid',
  toJSON: () => {
    return message;
  },
};
const webhook = {
  accountSid: 'account_sid',
  conservationSid: 'conversation_sid',
  sid: 'sid',
  dateCreated: '2020-04-23T13:16:38.000Z',
  dateUpdated: '2020-04-23T13:16:38.000Z',
  url: 'https://conversations.twilio.com/v1/Conversations/sid/Webhooks/sid',
  toJSON: () => {
    return webhook;
  },
};
const mockListConversations = jest.fn().mockReturnValue([conversation]);
const mockFetchConversation = jest.fn().mockReturnValue(conversation);
const mockCreateConversation = jest.fn().mockReturnValue(conversation);
const mockCreateParticipant = jest.fn().mockReturnValue(participant);
const mockListMessages = jest.fn().mockReturnValue([message]);
const mockCreateMessage = jest.fn().mockReturnValue(message);
const mockCreateWebhook = jest.fn().mockReturnValue(webhook);
const mockConversations = {
  list: mockListConversations,
  fetch: mockFetchConversation,
  create: mockCreateConversation,
  participants: {
    create: mockCreateParticipant,
  },
  messages: {
    list: mockListMessages,
    create: mockCreateMessage,
  },
  webhooks: {
    create: mockCreateWebhook,
  },
};

describe('TwilioConversation', () => {
  const config = {
    accountSid: 'account_sid',
    authToken: 'auth_token',
    serviceId: 'service_id',
  };

  test('should initialize client', () => {
    new TwilioConversation(config);
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const twilio = require('twilio');
    expect(twilio).toBeCalledTimes(1);
    expect(twilio).toBeCalledWith(config.accountSid, config.authToken);
  });

  describe('methods calling conversations as an object', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const twilio = require('twilio');
    beforeAll(() => {
      twilio.mockReturnValue({
        conversations: {
          v1: {
            conversations: mockConversations,
          },
        },
      });
    });
    afterAll(() => {
      twilio.mockReset();
    });

    describe('getConversations', () => {
      test('should returns list of conversations', async () => {
        const twilioConversation = new TwilioConversation(config);
        const conversations = await twilioConversation.getConversations();
        expect(mockListConversations).toBeCalledTimes(1);
        expect(conversations).toStrictEqual(mockListConversations());
      });
    });

    describe('createConversation', () => {
      test('should create conversation', async () => {
        const conversationName = 'New conversation name';
        const twilioConversation = new TwilioConversation(config);
        const returnedConversation = await twilioConversation.create(
          conversationName,
        );
        expect(mockCreateConversation).toBeCalledTimes(1);
        expect(mockCreateConversation).toBeCalledWith({
          friendlyName: conversationName,
        });
        expect(returnedConversation).toStrictEqual(mockCreateConversation());
      });
    });
  });

  describe('methods calling conversations as a function', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const twilio = require('twilio');
    beforeEach(() => {
      twilio().conversations.v1.conversations.mockClear();
    });
    beforeAll(() => {
      twilio.mockReturnValue({
        conversations: {
          v1: {
            conversations: jest.fn().mockReturnValue(mockConversations),
          },
        },
      });
    });
    afterAll(() => {
      twilio.mockReset();
    });

    describe('getConversation', () => {
      test('should return conversation', async () => {
        const twilioConversation = new TwilioConversation(config);
        const returnedConversation = await twilioConversation.getConversation(
          'sid',
        );
        expect(twilio().conversations.v1.conversations).toBeCalledTimes(1);
        expect(twilio().conversations.v1.conversations).toBeCalledWith('sid');
        expect(mockFetchConversation).toBeCalledTimes(1);
        expect(returnedConversation).toStrictEqual(mockFetchConversation());
      });
    });

    describe('Add participant', () => {
      const conversationSid = 'sid';
      test('should add participant with phone number', async () => {
        const invitedPhone = '+12342303790';
        const inviterPhone = '+12342303791';
        const twilioConversation = new TwilioConversation(config);
        const returnedParticipant = await twilioConversation.addSmsParticipant(
          conversationSid,
          invitedPhone,
          inviterPhone,
        );
        expect(twilio().conversations.v1.conversations).toBeCalledWith(
          conversationSid,
        );
        expect(mockCreateParticipant).toBeCalledTimes(1);
        expect(mockCreateParticipant).toBeCalledWith({
          'messagingBinding.address': invitedPhone,
          'messagingBinding.proxyAddress': inviterPhone,
        });
        expect(returnedParticipant).toStrictEqual(mockCreateParticipant());
      });
      test('should add participant with identity', async () => {
        const identity = 'identity';
        const twilioConversation = new TwilioConversation(config);
        const returnedParticipant = await twilioConversation.addParticipant(
          conversationSid,
          identity,
        );
        expect(twilio().conversations.v1.conversations).toBeCalledWith(
          conversationSid,
        );
        expect(mockCreateParticipant).toBeCalledTimes(1);
        expect(mockCreateParticipant).toBeCalledWith({ identity });
        expect(returnedParticipant).toStrictEqual(participant);
      });
    });

    describe('sendMessage', () => {
      test('should send message with author', async () => {
        const conversationSid = 'conversationSid';
        const authorSid = 'author_sid';
        const text = 'message';
        const twilioConversation = new TwilioConversation(config);
        const returnedMessage = await twilioConversation.sendMessage(
          conversationSid,
          authorSid,
          text,
        );
        expect(twilio().conversations.v1.conversations).toBeCalledWith(
          conversationSid,
        );
        expect(mockCreateMessage).toBeCalledTimes(1);
        expect(mockCreateMessage).toBeCalledWith({
          author: authorSid,
          body: text,
        });
        expect(returnedMessage).toStrictEqual(mockCreateMessage());
      });
      test('should send message attributes', async () => {
        const conversationSid = 'conversationSid';
        const authorSid = 'author_sid';
        const text = 'message';
        const attributes = '{type: "META.CONVERSATION.START"}';
        const twilioConversation = new TwilioConversation(config);
        const returnedMessage = await twilioConversation.sendMessage(
          conversationSid,
          authorSid,
          text,
          attributes,
        );
        expect(twilio().conversations.v1.conversations).toBeCalledWith(
          conversationSid,
        );
        expect(mockCreateMessage).toBeCalledTimes(1);
        expect(mockCreateMessage).toBeCalledWith({
          author: authorSid,
          body: text,
          attributes,
        });
        expect(returnedMessage).toStrictEqual(mockCreateMessage());
      });
    });

    describe('getMessages', () => {
      test('should fetch messages from conversation', async () => {
        const conversationSid = 'conversationSid';
        const twilioConversation = new TwilioConversation(config);
        const returnedMessages = await twilioConversation.getMessages(
          conversationSid,
        );
        expect(twilio().conversations.v1.conversations).toBeCalledWith(
          conversationSid,
        );
        expect(mockListMessages).toBeCalledTimes(1);
        expect(mockListMessages).toBeCalledWith();
        expect(returnedMessages).toStrictEqual(mockListMessages());
      });
    });

    describe('addConversationWebhook', () => {
      const conversationSid = 'conversationSid';
      test('should create webhook in twilio', async () => {
        const twilioConversation = new TwilioConversation(config);
        const url = 'url';
        const returnedWebhook = await twilioConversation.addConversationWebhook(
          conversationSid,
          url,
        );
        expect(twilio().conversations.v1.conversations).toBeCalledWith(
          conversationSid,
        );
        expect(mockCreateWebhook).toBeCalledTimes(1);
        expect(mockCreateWebhook).toBeCalledWith({
          'configuration.method': 'POST',
          'configuration.filters': ['onMessageAdded'],
          'configuration.url': url,
          target: 'webhook',
        });
        expect(returnedWebhook).toStrictEqual(mockCreateWebhook());
      });
      test('should use given method', async () => {
        const twilioConversation = new TwilioConversation(config);
        const url = 'url';
        const returnedWebhook = await twilioConversation.addConversationWebhook(
          conversationSid,
          url,
          'GET',
        );
        expect(twilio().conversations.v1.conversations).toBeCalledWith(
          conversationSid,
        );
        expect(mockCreateWebhook).toBeCalledTimes(1);
        expect(mockCreateWebhook).toBeCalledWith({
          'configuration.method': 'GET',
          'configuration.filters': ['onMessageAdded'],
          'configuration.url': url,
          target: 'webhook',
        });
        expect(returnedWebhook).toStrictEqual(mockCreateWebhook());
      });
    });
  });

  describe('getMedia', () => {
    const mediaId = 'media_id';
    const mediaContentUrl = 'https://media.us1.twilio.com/long_media_url';
    const media = {
      sid: mediaId,
      service_sid: 'service_id',
      date_created: '2020-09-08T02:17:37.373103-07:00',
      date_upload_updated: '2020-09-08T02:17:37.378269-07:00',
      date_updated: '2020-09-08T02:17:37.373103-07:00',
      links: {
        content: '/v1/Services/service_id/Media/media_id/Content',
        content_direct_temporary: mediaContentUrl,
      },
      size: 10117,
      content_type: 'image/jpeg',
      filename: null,
      author: null,
      message_sid: 'message_id',
      channel_sid: 'channel_id',
      url: '/v1/Services/service_id/Media/media_id',
      is_multipart_upstream: false,
    };
    const originalFetch = global.fetch;
    const mockFetch = jest.fn().mockReturnValue({
      ok: true,
      json: () => media,
      arrayBuffer: () => Buffer.from('buffer'),
    });
    beforeAll(() => {
      global.fetch = mockFetch;
    });
    afterAll(() => {
      global.fetch = originalFetch;
    });

    test('should call fetch with twilio mcs url', () => {
      const twilioConversation = new TwilioConversation(config);
      twilioConversation.getMedia(mediaId);
      const expectedUrl = `https://${config.accountSid}:${config.authToken}@mcs.us1.twilio.com/v1/Services/${config.serviceId}/Media/${mediaId}`;
      expect(mockFetch).toBeCalledWith(expectedUrl);
    });
    test('should return undefined if request fails', async () => {
      mockFetch.mockReturnValueOnce({ ...mockFetch(), ok: false });
      const twilioConversation = new TwilioConversation(config);
      const media = await twilioConversation.getMedia(mediaId);
      expect(media).not.toBeDefined();
    });
    test('should fetch media from content temporary url', async () => {
      const twilioConversation = new TwilioConversation(config);
      await twilioConversation.getMedia(mediaId);
      expect(mockFetch).toBeCalledWith(mediaContentUrl);
    });
    test('should return undefined if media content request fails', async () => {
      const fetchResult = mockFetch();
      mockFetch
        .mockReturnValueOnce({ ...fetchResult })
        .mockReturnValueOnce({ ...fetchResult, ok: false });
      const twilioConversation = new TwilioConversation(config);
      const media = await twilioConversation.getMedia(mediaId);
      expect(mockFetch).toBeCalledWith(mediaContentUrl);
      expect(media).not.toBeDefined();
    });
    test('should return media content', async () => {
      const twilioConversation = new TwilioConversation(config);
      const media = await twilioConversation.getMedia(mediaId);
      expect(media).toStrictEqual(mockFetch().arrayBuffer());
    });
  });
});
