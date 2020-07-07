"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../containers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Section = ({
  children,
  className
}) => {
  return /*#__PURE__*/_react.default.createElement(_containers.Section, {
    className: (0, _classnames.default)(className, "px-4 md:px-8")
  }, children.title && /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "content"
  }, children.title), children.subtitle && /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "content"
  }, children.subtitle), children.content && _react.default.Children.map(children.content, child => /*#__PURE__*/_react.default.createElement(_containers.SectionChild, null, child)));
};

exports.Section = Section;