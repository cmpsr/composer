"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _TextField = require("../TextField");

var _ = require(".");

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Form/SearchField',
  component: _.SearchField
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.SearchField, {
  type: (0, _addonKnobs.text)('type', 'search'),
  name: (0, _addonKnobs.text)('name', 'default'),
  placeholder: (0, _addonKnobs.text)('placeholder', 'Placeholder'),
  iconPosition: (0, _addonKnobs.select)('iconPosition', _.IconPosition, _.IconPosition.Left),
  shape: (0, _addonKnobs.select)('shape', _TextField.InputShapes, _TextField.InputShapes.SemiRounded),
  disabled: (0, _addonKnobs.boolean)('disabled', false),
  onChange: (0, _addonActions.action)('Input changed')
});

exports.basic = basic;
basic.story = {
  name: 'Default'
};