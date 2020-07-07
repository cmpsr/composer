"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer1 = exports.FOOTER1_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../../containers");

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FOOTER1_DEFAULT_TEST_ID = "footer1";
exports.FOOTER1_DEFAULT_TEST_ID = FOOTER1_DEFAULT_TEST_ID;

const Footer1 = ({
  className,
  copy,
  children,
  style,
  testId = FOOTER1_DEFAULT_TEST_ID
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
    className: (0, _classnames.default)("grid-cols-2 w-full gap-8 md:mx-0", `md:grid-cols-${_react.default.Children.count(children.content)}`)
  }, children.content)), copy && /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center my-8 md:my-0 md:ml-16"
  }, copy))));
};

exports.Footer1 = Footer1;