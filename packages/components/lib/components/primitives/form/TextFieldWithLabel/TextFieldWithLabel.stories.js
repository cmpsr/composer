"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _TextField = require("../TextField");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Form/TextFieldWithLabel',
  component: _.TextFieldWithLabel
};
exports.default = _default;

const base = () => /*#__PURE__*/_react.default.createElement(_.TextFieldWithLabel, {
  label: (0, _addonKnobs.text)('Label', 'LABEL'),
  name: "default",
  placeholder: (0, _addonKnobs.text)('Placeholder', 'placeholder'),
  disabled: (0, _addonKnobs.boolean)('Disabled', false),
  invalid: (0, _addonKnobs.boolean)('Invalid', false),
  required: (0, _addonKnobs.boolean)('Required', false),
  shape: (0, _addonKnobs.select)('Shape', _TextField.InputShapes, _TextField.InputShapes.SemiRounded),
  onChange: (0, _addonActions.action)('on change'),
  maxLength: (0, _addonKnobs.number)('Max length', 33)
});

exports.base = base;
base.story = {
  name: 'Default'
};