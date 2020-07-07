"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.ICON_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ICON_DEFAULT_TEST_ID = 'icon';
exports.ICON_DEFAULT_TEST_ID = ICON_DEFAULT_TEST_ID;

const Icon = ({
  children,
  width = 24,
  height = 24,
  viewBoxWidth = 24,
  viewBoxHeight = 24,
  className,
  testId = ICON_DEFAULT_TEST_ID
}) => /*#__PURE__*/_react.default.createElement("svg", {
  viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
  width: `${width}px`,
  height: `${height}px`,
  className: className,
  "data-testid": testId
}, children);

exports.Icon = Icon;