"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useTwilioChat = require("client/chat/useTwilioChat");

var _ChatMessage = require("../ChatMessage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ChatWindow = ({
  className,
  identity
}) => {
  const {
    channel,
    messages
  } = (0, _useTwilioChat.useTwilioChat)(identity);
  const [message, setMessage] = (0, _react.useState)('');

  const onMessageChanged = event => setMessage(event.target.value);

  const onMessageKeyPress = event => {
    if (event.key === 'Enter') {
      channel.sendMessage(message);
      setMessage('');
    }
  };

  (0, _react.useEffect)(() => {
    const node = document.getElementById('chatWindowEnd');
    if (node) node.scrollIntoView();
  }, [messages]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('flex-1 flex flex-col bg-white overflow-hidden h-full w-full', className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "border-b flex px-6 py-2 items-center flex-none overflow-hidden"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-grey-darkest mb-1 font-extrabold"
  }, "#general"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-grey-dark text-sm truncate"
  }, "Test channel for composer."))), /*#__PURE__*/_react.default.createElement("div", {
    className: "px-6 py-4 flex-1 overflow-y-scroll h-full"
  }, messages.map((message, i) => /*#__PURE__*/_react.default.createElement(_ChatMessage.ChatMessage, _extends({
    key: i
  }, message))), /*#__PURE__*/_react.default.createElement("span", {
    id: "chatWindowEnd"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "pb-6 px-4 flex-none"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex rounded-lg border-2 border-grey overflow-hidden"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-3xl text-grey border-r-2 border-grey p-2"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "fill-current h-6 w-6 block",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
  }))), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "w-full px-4",
    placeholder: "Message #general",
    onKeyPress: onMessageKeyPress,
    onChange: onMessageChanged,
    value: message
  }))));
};

var _default = ChatWindow;
exports.default = _default;