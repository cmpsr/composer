"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Feature3 = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDeviceDetect = require("react-device-detect");

var _containers = require("../../../containers");

var _primitives = require("../../../primitives");

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Feature3 = ({
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
    size: "content",
    className: (0, _classnames.default)("flex items-stretch", className, colorClasses)
  }, desktopAsset && !_reactDeviceDetect.isMobile && /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden md:flex items-center md:w-1/2 md:pr-4"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    controls: true,
    asset: desktopAsset,
    className: "flex-1 w-full h-full",
    imageClassName: "flex-1 w-full h-full object-cover"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("text-left flex flex-col justify-center", {
      "md:w-1/2 md:pr-4": desktopAsset && !_reactDeviceDetect.isMobile
    })
  }, mobileAsset && /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    controls: true,
    asset: mobileAsset,
    className: "md:hidden z-0 mb-2",
    imageClassName: "object-cover"
  }), eyebrow && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h4",
    className: "mb-2",
    type: _primitives.TypographyTypes.Headline6,
    style: style.eyebrow
  }, eyebrow), title && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h2",
    type: _primitives.TypographyTypes.Headline1,
    style: style.title
  }, title), subtitle && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h6",
    type: _primitives.TypographyTypes.Headline6,
    className: "mt-3",
    style: style.subtitle
  }, subtitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-start mt-8"
  }, (0, _utils.getChildrenWithGrid)(children))));
};

exports.Feature3 = Feature3;