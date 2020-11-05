"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useTwilioConversation: true,
  TwilioConversation: true
};
Object.defineProperty(exports, "TwilioConversation", {
  enumerable: true,
  get: function () {
    return _TwilioConversation.default;
  }
});
exports.useTwilioConversation = void 0;

var _TwilioConversation = _interopRequireDefault(require("./TwilioConversation"));

var _TwilioConversation2 = require("../types/TwilioConversation");

Object.keys(_TwilioConversation2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TwilioConversation2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TwilioConversation2[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useTwilioConversation = (accountSid = process.env.TWILIO_ACCOUNT_SID, authToken = process.env.TWILIO_AUTH_TOKEN, serviceId = process.env.TWILIO_CHAT_SERVICE_SID) => new _TwilioConversation.default({
  accountSid,
  authToken,
  serviceId
});

exports.useTwilioConversation = useTwilioConversation;