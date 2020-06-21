"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withError = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _ = require(".");

var _ErrorField = require("../ErrorField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Form/TextFieldButton',
  component: _.TextFieldButton
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.TextFieldButton, {
  name: "default",
  placeholder: "placeholder",
  onClick: (0, _addonActions.action)('button action click')
});

exports.basic = basic;
basic.story = {
  name: 'Default'
};

const withError = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_.TextFieldButton, {
  name: "default",
  placeholder: "placeholder",
  className: "border-outline-system-error",
  onClick: (0, _addonActions.action)('button action click')
}), /*#__PURE__*/_react.default.createElement(_ErrorField.ErrorField, {
  error: "Error"
}));

exports.withError = withError;
withError.story = {
  name: 'With error'
};