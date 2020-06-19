"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _ = require("..");

var _Typography = require("../../Typography");

var _Button = require("../../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Modal',
  component: _.Modal
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.Modal, {
  shape: (0, _addonKnobs.select)('shape', _.ModalShapes, _.ModalShapes.Rectangle),
  className: (0, _addonKnobs.text)('className', 'w-480'),
  isOpen: (0, _addonKnobs.boolean)('isOpen', true),
  closeButton: (0, _addonKnobs.boolean)('closeButton', true)
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-col items-center mb-3-5"
}, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  mode: _Typography.TypographyMode.Dark100,
  tag: "h4",
  type: _Typography.TypographyTypes.Headline4
}, (0, _addonKnobs.text)('Body title', 'Main Title')), /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  mode: _Typography.TypographyMode.Dark50,
  tag: "span",
  type: _Typography.TypographyTypes.Body
}, (0, _addonKnobs.text)('Body subtitle', 'Details'))), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex justify-between"
}, /*#__PURE__*/_react.default.createElement(_Button.Button, {
  type: _Button.ButtonTypes.Secondary,
  onClick: (0, _addonActions.action)('Button Click'),
  shape: _Button.ButtonShapes.Rounded
}, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  tag: "span",
  type: _Typography.TypographyTypes.Button,
  mode: _Typography.TypographyMode.Dark100
}, (0, _addonKnobs.text)('cancel button text', 'Cancel'))), /*#__PURE__*/_react.default.createElement(_Button.Button, {
  type: _Button.ButtonTypes.Primary,
  onClick: (0, _addonActions.action)('Button Click'),
  shape: _Button.ButtonShapes.Rounded
}, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  tag: "span",
  type: _Typography.TypographyTypes.Button,
  mode: _Typography.TypographyMode.Light100
}, (0, _addonKnobs.text)('Log out button text', 'Log out')))));

exports.basic = basic;
basic.story = {
  name: 'Basic'
};