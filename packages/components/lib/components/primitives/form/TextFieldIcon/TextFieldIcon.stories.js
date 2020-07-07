"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabled = exports.withError = exports.rightIcon = exports.leftIcon = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _ErrorField = require("../ErrorField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Form/TextFieldIcon',
  component: _.TextFieldIcon
};
exports.default = _default;

const leftIcon = () => /*#__PURE__*/_react.default.createElement(_.TextFieldIcon, {
  name: "default",
  placeholder: "placeholder",
  iconPosition: "left"
});

exports.leftIcon = leftIcon;
leftIcon.story = {
  name: 'Left icon'
};

const rightIcon = () => /*#__PURE__*/_react.default.createElement(_.TextFieldIcon, {
  name: "default",
  placeholder: "placeholder",
  iconPosition: "right"
});

exports.rightIcon = rightIcon;
rightIcon.story = {
  name: 'Right icon'
};

const withError = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_.TextFieldIcon, {
  name: "default",
  placeholder: "placeholder",
  iconPosition: "right"
}), /*#__PURE__*/_react.default.createElement(_ErrorField.ErrorField, {
  error: "Error"
}));

exports.withError = withError;
withError.story = {
  name: 'with error'
};

const disabled = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_.TextFieldIcon, {
  name: "default",
  placeholder: "placeholder",
  iconPosition: "right",
  disabled: true
}));

exports.disabled = disabled;
disabled.story = {
  name: 'Disabled'
};