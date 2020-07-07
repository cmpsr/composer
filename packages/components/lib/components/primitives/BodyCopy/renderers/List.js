"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const List = style => props => {
  const {
    children,
    ordered
  } = props;
  const ulColorClasses = (0, _utils.getClassesFromStyle)(style.ul);
  const olColorClasses = (0, _utils.getClassesFromStyle)(style.ol);
  return ordered ? /*#__PURE__*/_react.default.createElement("ol", {
    className: (0, _classnames.default)("ml-4 mb-8", olColorClasses)
  }, children) : /*#__PURE__*/_react.default.createElement("ul", {
    className: (0, _classnames.default)("list-disc ml-4 mb-8", ulColorClasses)
  }, children);
};

exports.List = List;