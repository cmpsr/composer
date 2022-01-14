const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    twilioConversation,
    body: { friendlyName },
  } = req;
  const conversation = await twilioConversation.create(friendlyName);
  res.json(conversation);
});

router.get('/', async ({ twilioConversation }, res) => {
  const conversations = await twilioConversation.getConversations();
  res.json(conversations);
});

router.get('/:sid', async (req, res) => {
  const {
    twilioConversation,
    params: { sid },
  } = req;
  const conversation = await twilioConversation.getConversation(sid);
  res.json(conversation);
});

router.post('/add-webhook', async (req, res) => {
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

module.exports = router;
