"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Feature1 = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDeviceDetect = require("react-device-detect");

var _containers = require("../../../containers");

var _primitives = require("../../../primitives");

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Feature1 = ({
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
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("text-left flex flex-col justify-center", {
      "md:w-1/2 md:pr-4": desktopAsset && !_reactDeviceDetect.isMobile
    })
  }, eyebrow && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h4",
    type: _primitives.TypographyTypes.Headline6,
    style: style.eyebrow
  }, eyebrow), mobileAsset && /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    controls: true,
    asset: mobileAsset,
    imageClassName: "object-cover",
    className: "md:hidden z-0 mt-2"
  }), title && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h2",
    type: _primitives.TypographyTypes.Headline1,
    style: style.title,
    className: "mt-4"
  }, title), subtitle && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h6",
    type: _primitives.TypographyTypes.Headline6,
    className: "mt-3",
    style: style.subtitle
  }, subtitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-start mt-8"
  }, (0, _utils.getChildrenWithGrid)(children))), desktopAsset && !_reactDeviceDetect.isMobile && /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden md:flex flex-1 items-center md:w-1/2 md:pl-4"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    controls: true,
    asset: desktopAsset,
    className: "flex-1 w-full h-full",
    imageClassName: "object-cover w-full h-full"
  })));
};

exports.Feature1 = Feature1;