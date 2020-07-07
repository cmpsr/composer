"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _RadioButton = require("../RadioButton");

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Form/RadioButton',
  component: _RadioButton.RadioButton
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_RadioButton.RadioButton, {
  name: (0, _addonKnobs.text)('name', 'name'),
  value: (0, _addonKnobs.text)('value', 'default'),
  label: (0, _addonKnobs.text)('label', 'Option'),
  onChange: (0, _addonActions.action)('Radio clicked'),
  disabled: (0, _addonKnobs.boolean)('disabled', false),
  checked: (0, _addonKnobs.boolean)('checked', false)
}));

exports.basic = basic;
basic.story = {
  name: 'Default'
};