"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withErrorIcon = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Chat/ConversationSummary',
  component: _.ConversationSummary
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.ConversationSummary, {
  id: "1",
  title: (0, _addonKnobs.text)('title', 'Pau Teruel'),
  description: (0, _addonKnobs.text)('description', '2003 Acura TL'),
  message: (0, _addonKnobs.text)('message', 'My car broke down! Can I talk to someone please'),
  time: (0, _addonKnobs.text)('time', '10:21 AM'),
  avatarText: (0, _addonKnobs.text)('avatarText', ''),
  isHighlighted: (0, _addonKnobs.boolean)('isHighlighted', false),
  isActive: (0, _addonKnobs.boolean)('isActive', false),
  unreadMessages: (0, _addonKnobs.number)('unreadMessages', 3),
  onClick: (0, _addonActions.action)('On click')
}));

exports.basic = basic;
basic.story = {
  name: 'With basic'
};

const withErrorIcon = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.ConversationSummary, {
  id: "1",
  title: (0, _addonKnobs.text)('title', 'Pau Teruel'),
  description: (0, _addonKnobs.text)('description', '2003 Acura TL'),
  message: (0, _addonKnobs.text)('message', 'My car broke down! Can I talk to someone please'),
  time: (0, _addonKnobs.text)('time', '10:21 AM'),
  avatarText: (0, _addonKnobs.text)('avatarText', ''),
  isHighlighted: (0, _addonKnobs.boolean)('isHighlighted', false),
  isActive: (0, _addonKnobs.boolean)('isActive', false),
  isError: true
}));

exports.withErrorIcon = withErrorIcon;
withErrorIcon.story = {
  name: 'With error icon'
};