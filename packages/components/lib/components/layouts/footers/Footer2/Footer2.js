"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer2 = exports.FOOTER2_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../../containers");

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FOOTER2_DEFAULT_TEST_ID = "footer2";
exports.FOOTER2_DEFAULT_TEST_ID = FOOTER2_DEFAULT_TEST_ID;

const Footer2 = ({
  className,
  copy,
  children,
  style,
  testId = FOOTER2_DEFAULT_TEST_ID
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
    className: "flex-1 flex justify-start"
  }, children && children.logo), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1 flex w-full text-center my-8 md:my-0 justify-center"
  }, children && children.secondaryContent && /*#__PURE__*/_react.default.createElement(_containers.Grid, {
    className: (0, _classnames.default)("w-full md:w-auto gap-8 md:gap-24 mx-4 md:mx-0", `grid-cols-${_react.default.Children.count(children.secondaryContent)}`)
  }, children.secondaryContent)), /*#__PURE__*/_react.default.createElement("p", {
    className: "flex-1 text-center md:text-right my-4 md:my-0"
  }, copy)));
};

exports.Footer2 = Footer2;