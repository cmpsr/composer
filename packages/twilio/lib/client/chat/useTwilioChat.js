"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTwilioChat = void 0;

var _react = require("react");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _twilioChat = _interopRequireDefault(require("twilio-chat"));

var _fetchAccessToken = require("../fetchAccessToken");

var _join = require("./channel/join");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useTwilioChat = identity => {
  const [client, setClient] = (0, _react.useState)(null);
  const [channel, setChannel] = (0, _react.useState)(null);
  const [messages, setMessages] = (0, _react.useState)([]);

  const addMessages = messages => {
    setMessages(prevState => [...prevState, ...messages.map(({
      author,
      body,
      sid,
      timestamp
    }) => ({
      author,
      body,
      sid,
      timestamp: (0, _dayjs.default)(timestamp).format('h:mm')
    }))]);
  };

  (0, _react.useEffect)(() => {
    if (!identity) return;
    (0, _fetchAccessToken.fetchAccessToken)(identity).then(_twilioChat.default.create).then(setClient);
  }, [identity]);
  (0, _react.useEffect)(() => {
    if (!client) return;
    (0, _join.join)(client, 'general').then(setChannel);
  }, [client]);
  (0, _react.useEffect)(() => {
    if (!channel) return;
    channel.getMessages(50).then(messages => addMessages(messages.items));
    channel.on('messageAdded', message => addMessages([message]));
  }, [channel]);
  return {
    channel,
    messages
  };
};

exports.useTwilioChat = useTwilioChat;