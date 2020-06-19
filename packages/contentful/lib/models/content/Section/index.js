"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../../constants");

var _renderFromComponentMap = _interopRequireDefault(require("../../../utils/renderFromComponentMap"));

var _layouts = require("@cmpsr/components/lib/components/layouts");

var _primitives = require("@cmpsr/components/lib/components/primitives");

var _getChildren = require("./getChildren");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Section = /*#__PURE__*/_react.default.memo(props => {
  const {
    className,
    title,
    subtitle,
    style,
    type,
    sys: {
      id
    }
  } = props;
  const items = (0, _getChildren.getChildren)({
    id
  });
  if (!items) return null;
  const sectionProps = {
    className,
    style: style || {}
  };
  const componentMap = {
    [_constants.DEFAULT]: () => /*#__PURE__*/_react.default.createElement(_layouts.Section, sectionProps, {
      title: /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
        tag: "h2",
        type: _primitives.TypographyTypes.Headline2,
        style: sectionProps.style.title
      }, title),
      subtitle: /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
        tag: "h6",
        type: _primitives.TypographyTypes.Headline6,
        style: sectionProps.style.subtitle
      }, subtitle),
      content: items
    })
  };
  return (0, _renderFromComponentMap.default)(componentMap, type);
});

var _default = Section;
exports.default = _default;