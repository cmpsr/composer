"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../../constants");

var _primitives = require("@cmpsr/components/lib/components/primitives");

var _renderFromComponentMap = _interopRequireDefault(require("../../../utils/renderFromComponentMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Link = /*#__PURE__*/_react.default.memo(props => {
  const {
    className,
    isEmbedded,
    route,
    title,
    embeddedType,
    type,
    url,
    asset,
    style
  } = props;
  const linkProps = {
    className,
    route,
    url,
    style: style || {}
  };
  const componentMap = {
    [_constants.DEFAULT]: () => /*#__PURE__*/_react.default.createElement(_primitives.Link, _extends({}, linkProps, {
      type: _primitives.LinkTypes.Text
    }), title && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
      tag: "span",
      type: _primitives.TypographyTypes.Link
    }, title)),
    text: () => /*#__PURE__*/_react.default.createElement(_primitives.Link, _extends({}, linkProps, {
      type: _primitives.LinkTypes.Text
    }), title && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
      tag: "span",
      type: _primitives.TypographyTypes.Link
    }, title)),
    'primary-button': () => /*#__PURE__*/_react.default.createElement(_primitives.Link, _extends({}, linkProps, {
      type: _primitives.LinkTypes.Primary
    }), title && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
      tag: "span",
      type: _primitives.TypographyTypes.Link
    }, title)),
    'secondary-button': () => /*#__PURE__*/_react.default.createElement(_primitives.Link, _extends({}, linkProps, {
      type: _primitives.LinkTypes.Secondary
    }), title && /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
      tag: "span",
      type: _primitives.TypographyTypes.Link
    }, title)),
    image: () => /*#__PURE__*/_react.default.createElement(_primitives.Link, _extends({
      className: className
    }, linkProps), /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
      asset: asset,
      controls: true,
      imageClassName: "mx-auto"
    }))
  };
  return (0, _renderFromComponentMap.default)(componentMap, isEmbedded ? embeddedType : type);
});

var _default = Link;
exports.default = _default;