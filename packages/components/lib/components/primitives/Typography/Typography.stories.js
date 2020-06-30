"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typographies = exports.Copy = exports.Headlines = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _Typography = require("./Typography");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer|Style Guide',
  component: _.Typography
};
exports.default = _default;

const Headlines = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Headline1"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "h1",
  type: _Typography.TypographyTypes.Headline1
}, "The quick brown fox jumps over the lazy dog.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Headline2"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "h1",
  type: _Typography.TypographyTypes.Headline2
}, "The quick brown fox jumps over the lazy dog.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Headline3"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "h1",
  type: _Typography.TypographyTypes.Headline3
}, "The quick brown fox jumps over the lazy dog.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Headline4"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "h1",
  type: _Typography.TypographyTypes.Headline4
}, "The quick brown fox jumps over the lazy dog.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Headline5"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "h1",
  type: _Typography.TypographyTypes.Headline5
}, "The quick brown fox jumps over the lazy dog.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Headline6"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "h1",
  type: _Typography.TypographyTypes.Headline6
}, "The quick brown fox jumps over the lazy dog.")));

exports.Headlines = Headlines;

const Copy = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Body"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "p",
  type: _Typography.TypographyTypes.Body
}, "The quick brown fox jumps over the lazy dog.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Detail"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "p",
  type: _Typography.TypographyTypes.Detail
}, "The quick brown fox jumps over the lazy dog.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Eyebrow"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "p",
  type: _Typography.TypographyTypes.Eyebrow
}, "The quick brown fox jumps over the lazy dog.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Form"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "p",
  type: _Typography.TypographyTypes.Form
}, "The quick brown fox jumps over the lazy dog.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Button"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "p",
  type: _Typography.TypographyTypes.Button
}, "The quick brown fox jumps over the lazy dog.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-center my-4"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "mr-4"
}, "Link"), /*#__PURE__*/_react.default.createElement(_.Typography, {
  tag: "p",
  type: _Typography.TypographyTypes.Link
}, "The quick brown fox jumps over the lazy dog.")));

exports.Copy = Copy;
var tagOptions;

(function (tagOptions) {
  tagOptions["h1"] = "h1";
  tagOptions["h2"] = "h2";
  tagOptions["h3"] = "h3";
  tagOptions["h4"] = "h4";
  tagOptions["h5"] = "h5";
  tagOptions["h6"] = "h6";
  tagOptions["p"] = "p";
  tagOptions["span"] = "span";
  tagOptions["label"] = "label";
})(tagOptions || (tagOptions = {}));

const Typographies = () => /*#__PURE__*/_react.default.createElement(_.Typography, {
  intensity: (0, _addonKnobs.select)('Intensity', _Typography.TypographyIntensity, _Typography.TypographyIntensity.Regular),
  type: (0, _addonKnobs.select)('Type', _Typography.TypographyTypes, _Typography.TypographyTypes.Headline1),
  mode: (0, _addonKnobs.select)('Mode', _Typography.TypographyMode, _Typography.TypographyMode.Dark100),
  tag: (0, _addonKnobs.select)('Tag', tagOptions, tagOptions.h1)
}, "The quick brown fox jumps over the lazy dog.");

exports.Typographies = Typographies;