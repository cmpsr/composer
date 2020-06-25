"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withInitialSelectedItem = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _ = require(".");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Form/Dropdown/Single-Select',
  component: _.DropdownSingleSelect
};
exports.default = _default;
const options = [{
  value: 1,
  label: 'Option 1'
}, {
  value: 2,
  label: 'Option 2'
}, {
  value: 3,
  label: 'Option 3'
}, {
  value: 4,
  label: 'Option 4'
}, {
  value: 5,
  label: 'Option 5'
}, {
  value: 6,
  label: 'Option 6'
}];

const basic = () => {
  return /*#__PURE__*/_react.default.createElement(_.DropdownSingleSelect, {
    options: options,
    onItemChange: (0, _addonActions.action)('Item changed'),
    invalid: (0, _addonKnobs.boolean)('Invalid', false),
    disabled: (0, _addonKnobs.boolean)('Disabled', false)
  });
};

exports.basic = basic;
basic.story = {
  name: 'Default'
};

const withInitialSelectedItem = () => {
  return /*#__PURE__*/_react.default.createElement(_.DropdownSingleSelect, {
    initialSelectedOption: options[0],
    options: options,
    onItemChange: (0, _addonActions.action)('Item changed'),
    invalid: (0, _addonKnobs.boolean)('Invalid', false),
    disabled: (0, _addonKnobs.boolean)('Disabled', false)
  });
};

exports.withInitialSelectedItem = withInitialSelectedItem;
basic.story = {
  name: 'Default'
};