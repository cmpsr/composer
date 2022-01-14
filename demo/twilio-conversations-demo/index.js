require('dotenv').config();
const express = require('express');
const { useTwilioConversation } = require('@cmpsr/twilio/lib/conversations');

const conversationRoutes = require('./routes/conversationRoutes');
const participantsRoutes = require('./routes/participantRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
app.use(express.json());

const twilioConversation = useTwilioConversation();

app.use((req, res, next) => {
  req.twilioConversation = twilioConversation;
  next();
});

app.use('/conversations', conversationRoutes);
app.use('/participants', participantsRoutes);
app.use('/messages', messageRoutes);

app.get('/media/:id', async (req, res) => {
  const mediaContent = await twilioConversation.getMedia(req.params.id);
  res.send(mediaContent);
});

app.listen(3000, () => console.log('Server running on port 3000'));
