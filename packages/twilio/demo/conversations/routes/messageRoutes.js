const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
  const {
    twilioConversation,
    query: { conversationSid },
  } = req;
  const messages = await twilioConversation.getMessages(conversationSid);
  res.json(messages);
});

module.exports = router;
