"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withButtonsAndContentLeft = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _ = require(".");

var _primitives = require("../../../primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Navigation/Navigation6',
  component: _.Navigation6
};
exports.default = _default;

const withButtonsAndContentLeft = () => /*#__PURE__*/_react.default.createElement(_.Navigation6, {
  style: {}
}, {
  logo: /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "https://www.google.com"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    asset: {
      title: '',
      url: 'https://images.ctfassets.net/o9153kt66j4s/6jk4DaIRMlx1CyOXIiLN5F/acebc0468bf2df33d069774c8e8e5bf6/Composer_-_white.svg',
      contentType: 'image'
    }
  })),
  content: [/*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "0"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "1"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "2"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "3"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "4"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "5"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Link
  }, "Link"))],
  secondaryContent: [/*#__PURE__*/_react.default.createElement(_primitives.Button, {
    type: _primitives.ButtonTypes.Primary,
    onClick: (0, _addonActions.action)('button action click'),
    key: "0"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Button
  }, "Sign up")), /*#__PURE__*/_react.default.createElement(_primitives.Button, {
    type: _primitives.ButtonTypes.Secondary,
    onClick: (0, _addonActions.action)('button action click'),
    key: "1"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Button
  }, "Log in"))]
});

exports.withButtonsAndContentLeft = withButtonsAndContentLeft;
withButtonsAndContentLeft.story = {
  name: 'With buttons and content left'
};