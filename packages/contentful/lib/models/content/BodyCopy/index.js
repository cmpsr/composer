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

const BodyCopy = /*#__PURE__*/_react.default.memo(props => {
  const {
    className,
    type,
    copy,
    style
  } = props;
  const bodyCopyProps = {
    className,
    copy,
    style: style || {}
  };
  const componentMap = {
    [_constants.DEFAULT]: () => /*#__PURE__*/_react.default.createElement(_primitives.BodyCopy, bodyCopyProps)
  };
  return (0, _renderFromComponentMap.default)(componentMap, type);
});

var _default = BodyCopy;
exports.default = _default;