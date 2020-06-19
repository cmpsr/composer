"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _TextField = require("../../TextField");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Form/ExpandableTextField',
  component: _.ExpandableTextField
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.ExpandableTextField, {
  onChange: (0, _addonActions.action)('On change'),
  placeholder: (0, _addonKnobs.text)('placeholder', 'Placeholder'),
  shape: (0, _addonKnobs.select)('shape', _TextField.InputShapes, _TextField.InputShapes.Rounded)
});

exports.basic = basic;
basic.story = {
  name: 'Default'
};