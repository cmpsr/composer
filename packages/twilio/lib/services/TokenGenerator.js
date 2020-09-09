"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _twilio = _interopRequireDefault(require("twilio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AccessToken = _twilio.default.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

const TokenGenerator = (identity, deviceId) => {
  const appName = 'ComposerTwilioChat'; // Create a unique ID for the client on their current device

  const endpointId = appName + ':' + identity + ':' + deviceId; // Create a "grant" which enables a client to use Chat as a given user,
  // on a given device

  const chatGrant = new ChatGrant({
    serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
    endpointId: endpointId
  }); // Create an access token which we will sign and return to the client,
  // containing the grant we just created

  const token = new AccessToken(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_API_KEY, process.env.TWILIO_API_SECRET, {
    identity
  });
  token.addGrant(chatGrant);
  return token;
};

var _default = {
  generate: TokenGenerator
};
exports.default = _default;