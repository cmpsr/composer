"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../../constants");

var _layouts = require("@cmpsr/components/lib/components/layouts");

var _renderFromComponentMap = _interopRequireDefault(require("../../../utils/renderFromComponentMap"));

var _getChildren = require("./getChildren");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Grid = /*#__PURE__*/_react.default.memo(props => {
  const {
    className,
    gridClassName,
    type,
    style,
    sys: {
      id
    }
  } = props;
  const gridProps = {
    className,
    gridClassName,
    style: style || {}
  };
  const items = (0, _getChildren.getChildren)({
    id
  });
  if (!items) return null;
  const componentMap = {
    [_constants.DEFAULT]: () => /*#__PURE__*/_react.default.createElement(_layouts.Grid, gridProps, items)
  };
  return (0, _renderFromComponentMap.default)(componentMap, type);
});

var _default = Grid;
exports.default = _default;