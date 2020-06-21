"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer4 = exports.FOOTER4_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../../containers");

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FOOTER4_DEFAULT_TEST_ID = "footer4";
exports.FOOTER4_DEFAULT_TEST_ID = FOOTER4_DEFAULT_TEST_ID;

const Footer4 = ({
  className,
  copy,
  children,
  style,
  testId = FOOTER4_DEFAULT_TEST_ID
}) => {
  const colorClasses = (0, _utils.getClassesFromStyle)(style.background);
  return /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "full",
    className: (0, _classnames.default)("py-8", className, colorClasses),
    testId: testId
  }, /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "content",
    className: "items-center md:items-start md:justify-between flex flex-col md:flex-row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-1 w-full md:max-w-2/3 text-center md:text-left"
  }, children && children.content), children && children.secondaryContent && /*#__PURE__*/_react.default.createElement(_containers.Grid, {
    className: (0, _classnames.default)("md:w-auto gap-8 md:gap-24 mx-4 md:mx-0 my-8 md:my-0", `grid-cols-${_react.default.Children.count(children.secondaryContent)}`)
  }, children.secondaryContent)), /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "content",
    className: "items-center flex flex-col md:flex-row justify-between md:py-32"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-none"
  }, children && children.logo), copy && /*#__PURE__*/_react.default.createElement("p", {
    className: ""
  }, copy)));
};

exports.Footer4 = Footer4;