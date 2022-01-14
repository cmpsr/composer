import express, { Response } from 'express';
import { TypedRequest } from '../getInstance';

const router = express.Router();

router.post('/', async (req: TypedRequest, res: Response) => {
  const {
    twilioConversation,
    body: { conversationSid, author, body, attributes },
  } = req;
  const message = await twilioConversation.sendMessage(
    conversationSid,
    author,
    body,
    attributes
  );
  res.json(message);
});

router.get('/', async (req: TypedRequest<{}, {}, {}, { conversationSid: string }>, res: Response) => {
  const {
    twilioConversation,
    query: { conversationSid },
  } = req;
  const messages = await twilioConversation.getMessages(conversationSid);
  res.json(messages);
});

export default router;
