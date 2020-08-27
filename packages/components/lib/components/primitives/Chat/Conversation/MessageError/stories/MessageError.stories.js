"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withOnErrorClick = exports.withMultipleErrors = exports.withRight = exports.withLeft = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _Message = require("../../Message");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Chat/Conversation/MessageError',
  component: _.MessageError
};
exports.default = _default;

const withLeft = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.MessageError, {
  placement: (0, _addonKnobs.select)('Placement', _Message.MessagePlacement, _Message.MessagePlacement.Left),
  errorText: (0, _addonKnobs.text)('Error Text', "I'm an error"),
  text: (0, _addonKnobs.text)('Text', "I'm a fancy message")
}));

exports.withLeft = withLeft;
withLeft.story = {
  name: 'With error on left'
};

const withRight = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.MessageError, {
  placement: (0, _addonKnobs.select)('Placement', _Message.MessagePlacement, _Message.MessagePlacement.Right),
  errorText: (0, _addonKnobs.text)('Error Text', "I'm an error"),
  text: (0, _addonKnobs.text)('Text', "I'm a fancy message")
}));

exports.withRight = withRight;
withRight.story = {
  name: 'With error on right'
};

const withMultipleErrors = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.MessageError, {
  placement: (0, _addonKnobs.select)('First Placement', _Message.MessagePlacement, _Message.MessagePlacement.Right),
  errorText: (0, _addonKnobs.text)('First Error Text', "I'm on the right side!"),
  text: (0, _addonKnobs.text)('First Text', "I'm a fancy message :)")
}), /*#__PURE__*/_react.default.createElement(_.MessageError, {
  placement: (0, _addonKnobs.select)('Second Placement', _Message.MessagePlacement, _Message.MessagePlacement.Left),
  errorText: (0, _addonKnobs.text)('Second Error Text', "I'm on the left side!"),
  text: (0, _addonKnobs.text)('Second Text', "I'm a fancy message :(")
}));

exports.withMultipleErrors = withMultipleErrors;
withMultipleErrors.story = {
  name: 'With multiple errors'
};

const withOnErrorClick = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.MessageError, {
  errorText: (0, _addonKnobs.text)('Error Text', "I'm an error"),
  text: (0, _addonKnobs.text)('Text', "I'm a fancy message"),
  onErrorClick: (0, _addonActions.action)('Call on error click')
}));

exports.withOnErrorClick = withOnErrorClick;
withOnErrorClick.story = {
  name: 'With on error click'
};