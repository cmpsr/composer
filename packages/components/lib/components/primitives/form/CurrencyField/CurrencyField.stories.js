"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _TextField = require("../TextField");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Form/CurrencyField',
  component: _.CurrencyField
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.CurrencyField, {
  name: "default",
  placeholder: (0, _addonKnobs.text)('Placeholder', 'placeholder'),
  disabled: (0, _addonKnobs.boolean)('Disabled', false),
  invalid: (0, _addonKnobs.boolean)('Invalid', false),
  inputMode: (0, _addonKnobs.select)('Input mode', _TextField.InputMode, _TextField.InputMode.Numeric)
});

exports.basic = basic;
basic.story = {
  name: 'Default'
};