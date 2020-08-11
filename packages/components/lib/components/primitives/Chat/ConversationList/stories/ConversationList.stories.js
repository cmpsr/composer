"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withEmptyConversations = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Chat/ConversationList',
  component: _.ConversationList
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-3"
}, /*#__PURE__*/_react.default.createElement(_.ConversationList, {
  selectedConversationId: (0, _addonKnobs.text)('selectedConversationId', ''),
  conversations: [{
    id: (0, _addonKnobs.text)('First Conversation id', '1'),
    title: (0, _addonKnobs.text)('First Conversation title', 'Pau Teruel'),
    description: (0, _addonKnobs.text)('First Conversation description', 'Description'),
    message: (0, _addonKnobs.text)('First Conversation message', 'Message'),
    messageClassName: (0, _addonKnobs.text)('First Conversation messageClassName', 'not-italic'),
    time: (0, _addonKnobs.text)('First Conversation time', '10:20 PM'),
    avatarText: (0, _addonKnobs.text)('First Conversation avatarText', 'PT'),
    isHighlighted: (0, _addonKnobs.boolean)('First Conversation isHighlighted', false),
    isError: (0, _addonKnobs.boolean)('First Conversation isError', false),
    unreadMessages: (0, _addonKnobs.number)('First Conversation unreadMessages', 3),
    onClick: (0, _addonActions.action)('First Conversation on click')
  }, {
    id: (0, _addonKnobs.text)('Second Conversation id', '2'),
    title: (0, _addonKnobs.text)('Second Conversation title', 'John Cena'),
    description: (0, _addonKnobs.text)('Second Conversation description', 'Description'),
    message: (0, _addonKnobs.text)('Second Conversation message', 'Message'),
    messageClassName: (0, _addonKnobs.text)('Second Conversation messageClassName', 'italic'),
    time: (0, _addonKnobs.text)('Second Conversation time', '10:20 PM'),
    avatarText: (0, _addonKnobs.text)('Second Conversation avatarText', 'PT'),
    isHighlighted: (0, _addonKnobs.boolean)('Second Conversation isHighlighted', true),
    isError: (0, _addonKnobs.boolean)('Second Conversation isError', false),
    unreadMessages: (0, _addonKnobs.number)('Second Conversation unreadMessages', 5),
    onClick: (0, _addonActions.action)('Second Conversation on click')
  }]
}));

exports.basic = basic;
basic.story = {
  name: 'With basic'
};

const withEmptyConversations = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.ConversationList, {
  conversations: [],
  emptyCaseElement: /*#__PURE__*/_react.default.createElement("div", {
    className: "p-5 text-light-100 bg-fill-primary-900"
  }, "You don't have any conversation yet")
}));

exports.withEmptyConversations = withEmptyConversations;
withEmptyConversations.story = {
  name: 'With empty conversation'
};