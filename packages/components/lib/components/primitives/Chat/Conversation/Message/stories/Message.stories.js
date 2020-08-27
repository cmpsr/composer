"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMultipleMessages = exports.withTime = exports.withColors = exports.withRight = exports.withLeft = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Chat/Conversation/Message',
  component: _.Message
};
exports.default = _default;

const withLeft = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  placement: (0, _addonKnobs.select)('Placement', _.MessagePlacement, _.MessagePlacement.Left),
  text: (0, _addonKnobs.text)('Text', "I'm a fancy message")
}));

exports.withLeft = withLeft;
withLeft.story = {
  name: 'With left placement'
};

const withRight = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  placement: (0, _addonKnobs.select)('Placement', _.MessagePlacement, _.MessagePlacement.Right),
  text: (0, _addonKnobs.text)('Text', "I'm a fancy message")
}));

exports.withRight = withRight;
withRight.story = {
  name: 'With right placement'
};

const withColors = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  backgroundColor: (0, _addonKnobs.select)('BackgroundColor', _.MessageBackgroundColor, _.MessageBackgroundColor.Primary600),
  text: (0, _addonKnobs.text)('Text', "I'm a primary 25 color")
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  backgroundColor: (0, _addonKnobs.select)('BackgroundColor', _.MessageBackgroundColor, _.MessageBackgroundColor.Secondary600),
  text: (0, _addonKnobs.text)('Text', "I'm a secondary 25 color")
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  backgroundColor: (0, _addonKnobs.select)('BackgroundColor', _.MessageBackgroundColor, _.MessageBackgroundColor.Black100),
  text: (0, _addonKnobs.text)('Text', "I'm a black 10 color")
}));

exports.withColors = withColors;
withColors.story = {
  name: 'With colors'
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
  text: "Hi Pau! Welcome Aboard!"
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  time: "01:32 PM",
  text: "We should talk about this deal :)"
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  time: "02:37 PM",
  backgroundColor: _.MessageBackgroundColor.Secondary600,
  placement: _.MessagePlacement.Left,
  text: "Absolutely! I'm really interested."
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  text: "Oops, sorry. I'm having some issues, my internet connection is super unstable..."
}));

exports.withMultipleMessages = withMultipleMessages;
withMultipleMessages.story = {
  name: 'With multiple messages'
};