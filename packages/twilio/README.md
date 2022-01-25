# @cmpsr/twilio

[![npm version](https://img.shields.io/npm/v/@cmpsr/twilio.svg?style=flat-square)](https://www.npmjs.com/package/@cmpsr/twilio)

[![npm license](https://img.shields.io/npm/l/@cmpsr/twilio.svg?style=flat-square)](https://www.npmjs.com/package/@cmpsr/twilio)

[![npm downloads](https://img.shields.io/npm/dm/@cmpsr/twilio.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@cmpsr/twilio)

Wrapper over Twilio API

- [Features](#features)
- [Installing](#installing)
- [Examples](#examples)
- [API](#api)
- [SMS Instance methods](#sms-instance-methods)
- [Conversation Instance methods](#conversation-instance-methods)
- [Resources](#resources)
- [License](#license)

## Features

- Send sms using pre-registered numbers
- Build conversations with virtual spaces

## Installing

Using npm:

```bash
$ npm install @cmpsr/twilio
```

Using yarn:

```bash
$ yarn add @cmpsr/twilio
```

## Examples

### CommonJS usage

```js
const { useTwilioSms, useTwilioConversation } = require("@cmpsr/twilio");
```

### ES usage

```js
import { useTwilioSms, useTwilioConversation } from "@cmpsr/twilio";
```

Sending a `sms` with ExpressJS

```js
const express = require("express");
const { useTwilioSms } = require("@cmpsr/twilio");

const app = express();
app.use(express.json());

const twilioSms = useTwilioSms();

app.post("/send-sms", async (req, res) => {
  const { message, from, to } = req.body;
  const response = await twilioSms.send(message, from, to);
  res.json(response);
});
```

Creating a `conversation` with ExpressJS

```js
const express = require("express");
const { useTwilioConversation } = require("@cmpsr/twilio");

const app = express();
app.use(express.json());

const twilioConversation = useTwilioConversation();

app.post("/", async (req, res) => {
  const {
    body: { friendlyName },
  } = req;
  const conversation = await twilioConversation.create(friendlyName);
  res.json(conversation);
});
```

## API

##### useTwilioSms([, accountSid[, authToken[, serviceId]]])

```js
const accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const authToken = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const serviceId = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

const twilioSms = useTwilioSms(accountSid, authToken, serviceId);
```

###### NOTE

If you don't pass the optional parameters it will take those values from your environment variables, so you may want to create a `.env` file or set global variables into your OS.

```bash
# in your .env file
TWILIO_ACCOUNT_SID = ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
TWILIO_AUTH_TOKEN = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
TWILIO_CHAT_SERVICE_SID = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Now, load your variables using the `dotenv` package

```js
require("dotenv").config();
const { useTwilioSms } = require("@cmpsr/twilio");
const twilioSms = useTwilioSms();
```

##### useTwilioConversation([, accountSid[, authToken[, serviceId]]])

```js
const accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const authToken = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const serviceId = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

const twilioConversation = useTwilioConversation(
  accountSid,
  authToken,
  serviceId
);
```

###### NOTE

If you don't pass the optional parameters it will take those values from your environment variables, so you may want to create a `.env` file or set global variables into your OS.

```bash
# in your .env file
TWILIO_ACCOUNT_SID = ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
TWILIO_AUTH_TOKEN = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
TWILIO_CHAT_SERVICE_SID = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Now, load your variables using the `dotenv` package

```js
require("dotenv").config();
const { twilioConversation } = require("@cmpsr/twilio");
const twilioConversation = twilioConversation();
```

### SMS Instance methods

The available instance methods are listed below.

##### twilioSms#send(message: string, from: string, to: string)

##### twilioSms#availablePhones(areaCode: number, country: string[, mmsEnabled: boolean[, smsEnabled: boolean[, limit: number]]])

##### twilioSms#buy(phoneNumber: string[, friendlyName: string[, smsUrl: string[, smsMethod: string]]])

### Conversation Instance methods

##### twilioConversation#create(friendlyName: string)

##### twilioConversation#getConversations()

##### twilioConversation#getConversation(sid: string)

##### twilioConversation#addSmsParticipant(conversationSid: string, invitedPhone: string, inviterPhone: string)

##### twilioConversation#addParticipant(conversationSid: string, identity: string)

##### twilioConversation#sendMessage(conversationSid: string, author: string, body: string[, attributes: string])

##### twilioConversation#getMessages(conversationSid: string)

##### twilioConversation#addConversationWebhook(conversationSid: string, webhook: string[, method: 'GET' | 'POST' ])

##### twilioConversation#getMedia(mediaId: string)

## Resources

- [Changelog](CHANGELOG.md)

## License

[MIT](../../LICENSE.md)
