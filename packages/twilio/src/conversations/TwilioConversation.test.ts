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
  };

  test('should initialize client', () => {
    new TwilioConversation(config);
    const twilio = require('twilio');
    expect(twilio).toBeCalledTimes(1);
    expect(twilio).toBeCalledWith(config.accountSid, config.authToken);
  });

  describe('methods calling conversations as an object', () => {
    const twilio = require('twilio');
    beforeAll(() => {
      twilio.mockReturnValue({
        conversations: {
          conversations: mockConversations,
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
          conversationName
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
    const twilio = require('twilio');
    beforeEach(() => {
      twilio().conversations.conversations.mockClear();
    });
    beforeAll(() => {
      twilio.mockReturnValue({
        conversations: {
          conversations: jest.fn().mockReturnValue(mockConversations),
        },
      });
    });
    afterAll(() => {
      twilio.mockReset();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('getConversation', () => {
      test('should return conversation', async () => {
        const twilioConversation = new TwilioConversation(config);
        const returnedConversation = await twilioConversation.getConversation(
          'sid'
        );
        expect(twilio().conversations.conversations).toBeCalledTimes(1);
        expect(twilio().conversations.conversations).toBeCalledWith('sid');
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
          inviterPhone
        );
        expect(twilio().conversations.conversations).toBeCalledWith(
          conversationSid
        );
        expect(mockCreateParticipant).toBeCalledTimes(1);
        expect(mockCreateParticipant).toBeCalledWith({
          messagingBinding: {
            address: invitedPhone,
            proxyAddress: inviterPhone,
          },
        });
        expect(returnedParticipant).toStrictEqual(mockCreateParticipant());
      });
      test('should add participant with identity', async () => {
        const identity = 'identity';
        const twilioConversation = new TwilioConversation(config);
        const returnedParticipant = await twilioConversation.addParticipant(
          conversationSid,
          identity
        );
        expect(twilio().conversations.conversations).toBeCalledWith(
          conversationSid
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
          text
        );
        expect(twilio().conversations.conversations).toBeCalledWith(
          conversationSid
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
          attributes
        );
        expect(twilio().conversations.conversations).toBeCalledWith(
          conversationSid
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
          conversationSid
        );
        expect(twilio().conversations.conversations).toBeCalledWith(
          conversationSid
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
          url
        );
        expect(twilio().conversations.conversations).toBeCalledWith(
          conversationSid
        );
        expect(mockCreateWebhook).toBeCalledTimes(1);
        expect(mockCreateWebhook).toBeCalledWith({
          configuration: {
            method: 'POST',
            filters: ['onMessageAdded'],
            url,
          },
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
          'GET'
        );
        expect(twilio().conversations.conversations).toBeCalledWith(
          conversationSid
        );
        expect(mockCreateWebhook).toBeCalledTimes(1);
        expect(mockCreateWebhook).toBeCalledWith({
          configuration: {
            method: 'GET',
            filters: ['onMessageAdded'],
            url,
          },
          target: 'webhook',
        });
        expect(returnedWebhook).toStrictEqual(mockCreateWebhook());
      });
    });
  });
});
