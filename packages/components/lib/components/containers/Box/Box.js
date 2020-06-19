"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = exports.BOX_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BOX_DEFAULT_TEST_ID = 'box';
exports.BOX_DEFAULT_TEST_ID = BOX_DEFAULT_TEST_ID;

const Box = ({
  children,
  className,
  size,
  testId = BOX_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)({
      'w-screen h-screen': size === 'screen'
    }, {
      'w-full h-full': size === 'full'
    }, {
      'w-full h-full max-w-content mx-auto': size === 'content'
    }, className),
    "data-testid": testId
  }, children);
};

exports.Box = Box;