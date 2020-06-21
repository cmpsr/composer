"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useTwilioSms: true,
  TwilioSms: true
};
Object.defineProperty(exports, "TwilioSms", {
  enumerable: true,
  get: function () {
    return _TwilioSms.TwilioSms;
  }
});
exports.useTwilioSms = void 0;

var _TwilioSms = require("./TwilioSms");

var _TwilioConversation = require("../types/TwilioConversation");

Object.keys(_TwilioConversation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TwilioConversation[key];
    }
  });
});

const useTwilioSms = (accountSid = process.env.TWILIO_ACCOUNT_SID, authToken = process.env.TWILIO_AUTH_TOKEN) => {
  return new _TwilioSms.TwilioSms({
    accountSid,
    authToken
  });
};

exports.useTwilioSms = useTwilioSms;