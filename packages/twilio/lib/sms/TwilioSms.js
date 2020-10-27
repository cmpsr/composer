"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwilioSms = void 0;

var _twilio = _interopRequireDefault(require("twilio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TwilioSms {
  constructor(config) {
    this.twilioClient = (0, _twilio.default)(config.accountSid, config.authToken);
  }

  async send(message, from, to) {
    const sms = await this.twilioClient.messages.create({
      body: message,
      from,
      to
    });
    return sms;
  }

}

exports.TwilioSms = TwilioSms;