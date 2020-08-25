"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMultipleMessages = exports.withTime = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Chat/Conversation/Message',
  component: _.Message
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  placement: (0, _addonKnobs.select)('Placement', _.MessagePlacement, _.MessagePlacement.Left),
  backgroundColor: (0, _addonKnobs.select)('BackgroundColor', _.MessageBackgroundColor, _.MessageBackgroundColor.Primary600),
  text: (0, _addonKnobs.text)('Text', "I'm a fancy message")
}));

exports.basic = basic;
basic.story = {
  name: 'Basic'
};

const withTime = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  time: (0, _addonKnobs.text)('Time', "10:23 AM"),
  text: (0, _addonKnobs.text)('Text', "I'm a fancy message")
}));

exports.withTime = withTime;
withTime.story = {
  name: 'With time'
};

const withMultipleMessages = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  text: (0, _addonKnobs.text)('Text 1', "Hi Pau! Welcome Aboard!")
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  time: (0, _addonKnobs.text)('Time 2', "01:32 PM"),
  text: (0, _addonKnobs.text)('Text 2', "We should talk about this deal :)")
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  time: (0, _addonKnobs.text)('Time 3', "02:37 PM"),
  backgroundColor: (0, _addonKnobs.select)('BackgroundColor', _.MessageBackgroundColor, _.MessageBackgroundColor.Secondary600),
  placement: (0, _addonKnobs.select)('Placement', _.MessagePlacement, _.MessagePlacement.Left),
  text: (0, _addonKnobs.text)('Text 3', "Absolutely! I'm really interested.")
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  text: (0, _addonKnobs.text)('Text 4', "Oops, sorry. I'm having some issues, my internet connection is super unstable...")
}));

exports.withMultipleMessages = withMultipleMessages;
withMultipleMessages.story = {
  name: 'With multiple messages'
};