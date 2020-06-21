"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.GRID_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GRID_DEFAULT_TEST_ID = 'grid';
exports.GRID_DEFAULT_TEST_ID = GRID_DEFAULT_TEST_ID;

const Grid = ({
  children,
  className,
  testId = GRID_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('grid', className),
    "data-testid": testId
  }, children);
};

exports.Grid = Grid;