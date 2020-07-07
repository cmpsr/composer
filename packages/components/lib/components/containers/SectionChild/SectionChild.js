"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionChild = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SectionChild = ({
  children,
  className
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('py-8', className)
  }, children);
};

exports.SectionChild = SectionChild;