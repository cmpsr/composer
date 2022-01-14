import dotenv from 'dotenv';
import { Request } from 'express';
import { useTwilioConversation } from '@cmpsr/twilio/lib/conversations';

dotenv.config();

const twilioConversation = useTwilioConversation();

export interface TypedRequest<A = any, B = any, C = any, D = any> extends Request<A, B, C, D> {
  twilioConversation: typeof twilioConversation
}

export default twilioConversation