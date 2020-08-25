"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fullWidth = exports.withIcon = exports.withText = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../../Icon");

var _action = require("../../Icon/icons/action");

var _ = require("..");

var _Typography = require("../../Typography");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Link/PrimaryButton',
  component: _.Link
};
exports.default = _default;

const withText = () => /*#__PURE__*/_react.default.createElement("span", {
  className: "flex"
}, /*#__PURE__*/_react.default.createElement(_.Link, {
  url: (0, _addonKnobs.text)('Url', '#'),
  type: (0, _addonKnobs.select)('Type', _.LinkTypes, _.LinkTypes.Primary),
  className: (0, _addonKnobs.text)('ClassName', 'flex-grow-0')
}, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  tag: "span",
  type: _Typography.TypographyTypes.Link
}, (0, _addonKnobs.text)('Text', "Primary Link"))));

exports.withText = withText;
withText.story = {
  name: 'With text'
};

const withIcon = () => /*#__PURE__*/_react.default.createElement("span", {
  className: "flex"
}, /*#__PURE__*/_react.default.createElement(_.Link, {
  url: (0, _addonKnobs.text)('Url', '#'),
  type: (0, _addonKnobs.select)('Type', _.LinkTypes, _.LinkTypes.Primary)
}, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  tag: "span",
  type: _Typography.TypographyTypes.Link
}, (0, _addonKnobs.text)('Text', 'Primary Link')), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
  className: "fill-current",
  width: 20,
  height: 20
}, /*#__PURE__*/_react.default.createElement(_action.favorite, {
  type: "filled"
}))));

exports.withIcon = withIcon;
withIcon.story = {
  name: 'With icon'
};

const fullWidth = () => /*#__PURE__*/_react.default.createElement(_.Link, {
  url: (0, _addonKnobs.text)('Url', '#'),
  type: (0, _addonKnobs.select)('Type', _.LinkTypes, _.LinkTypes.Primary)
}, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  tag: "span",
  type: _Typography.TypographyTypes.Link
}, (0, _addonKnobs.text)('Text', 'Primary Link')));

exports.fullWidth = fullWidth;
fullWidth.story = {
  name: 'Full width'
};