"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondaryIconAlignment = exports.withTextIcon = exports.withIcon = exports.withText = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("..");

var _Icon = require("../../Icon");

var _action = require("../../Icon/icons/action");

var _Typography = require("../../Typography");

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Button/SecondaryButton',
  component: _.Button
};
exports.default = _default;

const withText = () => /*#__PURE__*/_react.default.createElement(_.Button, {
  type: (0, _addonKnobs.select)('Type', _Button.ButtonTypes, _Button.ButtonTypes.Secondary),
  onClick: (0, _addonActions.action)('button action click'),
  shape: (0, _addonKnobs.select)('Shape', _Button.ButtonShapes, _Button.ButtonShapes.Rectangle),
  disabled: (0, _addonKnobs.boolean)('Disabled', false)
}, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  tag: "span",
  type: _Typography.TypographyTypes.Button
}, (0, _addonKnobs.text)('Text', 'Secondary Button')));

exports.withText = withText;
withText.story = {
  name: 'With text'
};

const withIcon = () => /*#__PURE__*/_react.default.createElement(_.Button, {
  type: (0, _addonKnobs.select)('Type', _Button.ButtonTypes, _Button.ButtonTypes.Secondary),
  onClick: (0, _addonActions.action)('button action click'),
  shape: (0, _addonKnobs.select)('Shape', _Button.ButtonShapes, _Button.ButtonShapes.Rectangle),
  disabled: (0, _addonKnobs.boolean)('Disabled', false)
}, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
  className: "fill-current",
  width: 20,
  height: 20
}, /*#__PURE__*/_react.default.createElement(_action.favorite, {
  type: "filled"
})));

exports.withIcon = withIcon;
withIcon.story = {
  name: 'With icon'
};

const withTextIcon = () => /*#__PURE__*/_react.default.createElement(_.Button, {
  type: (0, _addonKnobs.select)('Type', _Button.ButtonTypes, _Button.ButtonTypes.Secondary),
  onClick: (0, _addonActions.action)('button action click'),
  shape: (0, _addonKnobs.select)('Shape', _Button.ButtonShapes, _Button.ButtonShapes.Rectangle),
  disabled: (0, _addonKnobs.boolean)('Disabled', false)
}, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
  className: "fill-current",
  width: 20,
  height: 20
}, /*#__PURE__*/_react.default.createElement(_action.favorite, {
  type: "filled"
})), /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  tag: "span",
  type: _Typography.TypographyTypes.Button,
  className: "mx-1"
}, (0, _addonKnobs.text)('Text', 'Secondary Button')));

exports.withTextIcon = withTextIcon;
withTextIcon.story = {
  name: 'With text and icon'
};

const secondaryIconAlignment = () => /*#__PURE__*/_react.default.createElement(_.Button, {
  type: (0, _addonKnobs.select)('Type', _Button.ButtonTypes, _Button.ButtonTypes.Secondary),
  onClick: (0, _addonActions.action)('button action click'),
  shape: (0, _addonKnobs.select)('Shape', _Button.ButtonShapes, _Button.ButtonShapes.Rectangle),
  disabled: (0, _addonKnobs.boolean)('Disabled', false)
}, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  tag: "span",
  type: _Typography.TypographyTypes.Button,
  className: "mx-1"
}, (0, _addonKnobs.text)('Text', 'Secondary Button')), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
  className: "fill-current",
  width: 20,
  height: 20
}, /*#__PURE__*/_react.default.createElement(_action.favorite, {
  type: "filled"
})));

exports.secondaryIconAlignment = secondaryIconAlignment;
secondaryIconAlignment.story = {
  name: 'With text and icon alignment'
};