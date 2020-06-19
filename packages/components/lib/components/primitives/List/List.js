"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _react = require("react");

var _classnames = _interopRequireDefault(require("classnames"));

var _getDropdownClasses = require("../../../utils/getDropdownClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const List = ({
  className,
  children,
  tag = 'div'
}) => {
  const {
    wrapper
  } = (0, _getDropdownClasses.getListClasses)();
  return /*#__PURE__*/(0, _react.createElement)(tag, {
    className: (0, _classnames.default)(wrapper, className)
  }, children);
};

exports.List = List;