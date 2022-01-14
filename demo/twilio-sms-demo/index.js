require('dotenv').config();
const express = require('express');
const { useTwilioSms } = require('@cmpsr/twilio/lib/sms');

const app = express();
app.use(express.json());

const twilioSms = useTwilioSms();

app.get('/available-phones', async (req, res) => {
  const { areaCode, country, mmsEnabled, smsEnabled, limit } = req.query;
  const phones = await twilioSms.availablePhones(
    areaCode,
    country,
    mmsEnabled,
    smsEnabled,
    limit
  );
  res.json(phones);
});

app.post('/send-sms', async (req, res) => {
  const { message, from, to } = req.body;
  const response = await twilioSms.send(message, from, to);
  res.json(response);
});

app.post('/buy-phone-number', async (req, res) => {
  const { phoneNumber, friendlyName, smsUrl, smsMethod } = req.body;
  const phone = await twilioSms.buy(
    phoneNumber,
    friendlyName,
    smsUrl,
    smsMethod
  );
  res.json(phone);
});

app.listen(3000, () => console.log('Server running on port 3000'));
