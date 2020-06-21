"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbeddedFeature1 = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../../containers");

var _primitives = require("../../../primitives");

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EmbeddedFeature1 = ({
  embeddedAsset,
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
    className: (0, _classnames.default)("items-center", colorClasses, className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-left"
  }, embeddedAsset && /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    asset: embeddedAsset,
    className: "mt-2",
    imageClassName: "object-cover"
  }), title && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h2",
    type: _primitives.TypographyTypes.Headline4,
    style: style.title,
    className: "mt-4"
  }, title), eyebrow && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h4",
    type: _primitives.TypographyTypes.Headline6,
    style: style.eyebrow
  }, eyebrow), subtitle && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h6",
    type: _primitives.TypographyTypes.Body,
    className: "mt-3",
    style: style.subtitle
  }, subtitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-start mt-4"
  }, (0, _utils.getChildrenWithGrid)(children))));
};

exports.EmbeddedFeature1 = EmbeddedFeature1;