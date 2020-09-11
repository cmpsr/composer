import { TwilioAuthConfig, WebhookMethod } from 'types';
declare class TwilioConversation {
    private config;
    private twilioClient;
    constructor(config: TwilioAuthConfig);
    create(friendlyName: string): Promise<any>;
    getConversations(): Promise<any[]>;
    getConversation(sid: string): Promise<any>;
    addSmsParticipant(conversationSid: string, invitedPhone: string, inviterPhone: string): Promise<any>;
    addParticipant(conversationSid: string, identity: string): Promise<any>;
    sendMessage(conversationSid: string, author: string, body: string, attributes?: string): Promise<any>;
    getMessages(conversationSid: string): Promise<any[]>;
    addConversationWebhook(conversationSid: string, webhook: string, method?: WebhookMethod): Promise<any>;
    getMedia(mediaId: string): Promise<ArrayBuffer>;
}
export default TwilioConversation;
//# sourceMappingURL=TwilioConversation.d.ts.map