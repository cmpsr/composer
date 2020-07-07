"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer3 = exports.FOOTER3_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../../containers");

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FOOTER3_DEFAULT_TEST_ID = "footer3";
exports.FOOTER3_DEFAULT_TEST_ID = FOOTER3_DEFAULT_TEST_ID;

const Footer3 = ({
  className,
  copy,
  children,
  style,
  testId = FOOTER3_DEFAULT_TEST_ID
}) => {
  const colorClasses = (0, _utils.getClassesFromStyle)(style.background);
  return /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "full",
    className: (0, _classnames.default)("py-8", className, colorClasses),
    testId: testId
  }, /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "content",
    className: "items-center flex flex-col md:flex-row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-none"
  }, children && children.logo), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col md:flex-row flex-1 w-full justify-end"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-grow-0 text-center my-4 md:my-0"
  }, children && children.content && /*#__PURE__*/_react.default.createElement(_containers.Grid, {
    className: (0, _classnames.default)("grid-cols-1 w-full gap-8 md:mx-0", `md:grid-cols-${_react.default.Children.count(children.content)}`)
  }, children.content)))), /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "content",
    className: "items-center flex flex-col md:flex-row justify-between md:py-32"
  }, /*#__PURE__*/_react.default.createElement(_containers.Grid, {
    className: (0, _classnames.default)("w-full md:w-auto gap-8 md:gap-24 mx-4 md:mx-0 my-8 md:my-0", `grid-cols-${_react.default.Children.count(children === null || children === void 0 ? void 0 : children.secondaryContent)}`)
  }, children === null || children === void 0 ? void 0 : children.secondaryContent), copy && /*#__PURE__*/_react.default.createElement("p", {
    className: ""
  }, copy)));
};

exports.Footer3 = Footer3;