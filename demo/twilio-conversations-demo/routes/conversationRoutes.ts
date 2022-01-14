import express, { Response } from 'express';
import { TypedRequest } from '../getInstance';

const router = express.Router();

router.post('/', async (req: TypedRequest, res: Response) => {
  const {
    twilioConversation,
    body: { friendlyName },
  } = req;
  const conversation = await twilioConversation.create(friendlyName);
  res.json(conversation);
});

router.get('/', async ({ twilioConversation }: TypedRequest, res: Response) => {
  const conversations = await twilioConversation.getConversations();
  res.json(conversations);
});

router.get('/:sid', async (req: TypedRequest, res: Response) => {
  const {
    twilioConversation,
    params: { sid },
  } = req;
  const conversation = await twilioConversation.getConversation(sid);
  res.json(conversation);
});

router.post('/add-webhook', async (req: TypedRequest, res: Response) => {
  const {
    twilioConversation,
    body: { sid, webhook, method },
  } = req;
  const twilioWebhook = await twilioConversation.addConversationWebhook(
    sid,
    webhook,
    method
  );
  res.json(twilioWebhook);
});


export default router;
