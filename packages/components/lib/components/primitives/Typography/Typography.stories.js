"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typographies = exports.default = void 0;

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