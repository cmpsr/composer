# @cmpsr/signalwire

[![npm version](https://img.shields.io/npm/v/@cmpsr/signalwire.svg?style=flat-square)](https://www.npmjs.com/package/@cmpsr/signalwire)

[![npm license](https://img.shields.io/npm/l/@cmpsr/signalwire.svg?style=flat-square)](https://www.npmjs.com/package/@cmpsr/signalwire)

[![npm downloads](https://img.shields.io/npm/dm/@cmpsr/signalwire.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@cmpsr/signalwire)

Wrapper over Signalwire API

- [Features](#features)
- [Installing](#installing)
- [Examples](#examples)
- [API](#api)
- [SMS Instance methods](#sms-instance-methods)
- [Conversation Instance methods](#conversation-instance-methods)
- [Resources](#resources)
- [License](#license)

## Features

- Send sms using the Signalwire API

## Installing

Using npm:

```bash
$ npm install @cmpsr/signalwire
```

Using yarn:

```bash
$ yarn add @cmpsr/signalwire
```

## Examples

### CommonJS usage

```js
const { useSignalwireSms } = require("@cmpsr/signalwire");
```

### ES usage

```js
import { useSignalwireSms } from "@cmpsr/signalwire";
```

Sending a `sms` with ExpressJS

```js
const express = require("express");
const { useSignalwireSms } = require("@cmpsr/signalwire");

const app = express();
app.use(express.json());

const signalwireSms = useSignalwireSms();

app.post("/send-sms", async (req, res) => {
  const { message, from, to } = req.body;
  const response = await signalwireSms.send(message, from, to);
  res.json(response);
});
```

## API

##### useSignalwireSms([, project[, token[, contexts]]])

```js
const project = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const token = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const contexts = ["1", "2"];

const useSignalwireSms = useSignalwireSms(project, token, contexts);
```

###### NOTE

If you don't pass the optional parameters it will take those values from your environment variables, so you may want to create a `.env` file or set global variables into your OS.

```bash
# in your .env file
SIGNALWIRE_PROJECT = ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
SIGNALWIRE_TOKEN = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
SIGNALWIRE_CONTEXTS = 1,2
```

Now, load your variables using the `dotenv` package

```js
require("dotenv").config();
const { useSignalwireSms } = require("@cmpsr/signalwire");
const signalwireSms = useSignalwireSms();
```

### SMS Instance methods

The available instance methods are listed below.

##### signalwireSms#send(message: string, from: string, to: string)

## Resources

- [Changelog](CHANGELOG.md)

## License

[MIT](../../LICENSE.md)
