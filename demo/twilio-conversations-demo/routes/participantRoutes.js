const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
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

router.post('/sms', async (req, res) => {
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

module.exports = router;
