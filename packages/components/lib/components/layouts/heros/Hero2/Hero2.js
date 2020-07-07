"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hero2 = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDeviceDetect = require("react-device-detect");

var _containers = require("../../../containers");

var _primitives = require("../../../primitives");

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Hero2 = ({
  desktopAsset,
  mobileAsset,
  className,
  title,
  subtitle,
  eyebrow,
  children,
  style
}) => {
  const colorClasses = (0, _utils.getClassesFromStyle)(style.background);
  return /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "screen",
    className: (0, _classnames.default)("", className, colorClasses)
  }, mobileAsset && /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "screen",
    className: "md:hidden w-full h-full z-0 absolute"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    autoPlay: true,
    asset: mobileAsset,
    className: "object-cover w-full h-full",
    imageClassName: "object-cover w-full h-full"
  })), desktopAsset && !_reactDeviceDetect.isMobile && /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    autoPlay: true,
    asset: desktopAsset,
    className: "hidden md:block object-cover w-full h-full z-0 absolute",
    imageClassName: "object-cover w-full h-full"
  }), /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "full",
    className: "flex justify-center items-center p-8"
  }, /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "content",
    className: "flex justify-start items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative z-10 max-w-hero-copy text-left"
  }, eyebrow && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h4",
    type: _primitives.TypographyTypes.Headline6,
    style: style.eyebrow
  }, eyebrow), title && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h2",
    type: _primitives.TypographyTypes.Headline2,
    style: style.title
  }, title), subtitle && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h6",
    type: _primitives.TypographyTypes.Headline6,
    className: "mt-3",
    style: style.subtitle
  }, subtitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-start mt-8"
  }, children)))));
};

exports.Hero2 = Hero2;