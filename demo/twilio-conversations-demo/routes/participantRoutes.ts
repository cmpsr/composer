import express, { Response } from 'express';
import { TypedRequest } from '../getInstance';

const router = express.Router();

router.post('/', async (req: TypedRequest, res: Response) => {
  const {
    twilioConversation,
    body: { conversationSid, identity },
  } = req;
  const participant = await twilioConversation.addParticipant(
    conversationSid,
    identity
  );
  res.json(participant);
});

router.post('/sms', async (req: TypedRequest, res: Response) => {
  const {
    twilioConversation,
    body: { conversationSid, invitedPhone, inviterPhone },
  } = req;
  const participant = await twilioConversation.addSmsParticipant(
    conversationSid,
    invitedPhone,
    inviterPhone
  );
  res.json(participant);
});

export default router;
