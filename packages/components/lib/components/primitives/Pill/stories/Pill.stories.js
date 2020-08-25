"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Pill',
  component: _.Pill
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.Pill, {
  label: (0, _addonKnobs.text)('Label', "TODAY")
});

exports.basic = basic;
basic.story = {
  name: 'Basic'
};