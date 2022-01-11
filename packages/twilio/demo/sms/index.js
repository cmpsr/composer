require('dotenv').config();
const express = require('express');
const { useTwilioSms } = require('@cmpsr/twilio/lib/sms');

const app = express();
app.use(express.json());

const twilioSms = useTwilioSms();

app.post('/send-sms', async (req, res) => {
  const { message, from, to } = req.body;
  const response = await twilioSms.send(message, from, to);
  console.log(response);
  res.json(response);
});

app.listen(3000, () => console.log('Server running on port 3000'));
