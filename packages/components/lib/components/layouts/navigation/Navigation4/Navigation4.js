"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation4 = exports.NAVIGATION4_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../../containers");

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NAVIGATION4_DEFAULT_TEST_ID = "navigation4";
exports.NAVIGATION4_DEFAULT_TEST_ID = NAVIGATION4_DEFAULT_TEST_ID;

const Navigation4 = ({
  className,
  children,
  style,
  testId = NAVIGATION4_DEFAULT_TEST_ID
}) => {
  const colorClasses = (0, _utils.getClassesFromStyle)(style.background);
  return /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "full",
    className: (0, _classnames.default)("py-8", className, colorClasses)
  }, /*#__PURE__*/_react.default.createElement("nav", {
    "data-testid": testId,
    className: "w-full h-full max-w-content mx-auto items-center flex flex-col md:flex-row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1 flex justify-start"
  }, children && children.logo), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1 flex flex-col md:flex-row w-full justify-center items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-grow-0 text-center my-4 mx-8 md:my-0"
  }, children && children.content && /*#__PURE__*/_react.default.createElement(_containers.Grid, {
    className: (0, _classnames.default)("grid-cols-2 w-full gap-8 md:mx-0", `md:grid-cols-${_react.default.Children.count(children.content)}`)
  }, children.content))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1 flex justify-end"
  }, children && children.secondaryContent && /*#__PURE__*/_react.default.createElement(_containers.Grid, {
    className: (0, _classnames.default)("grid-cols-2 gap-8")
  }, children.secondaryContent))));
};

exports.Navigation4 = Navigation4;