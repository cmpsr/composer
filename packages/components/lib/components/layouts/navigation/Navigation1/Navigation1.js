"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation1 = exports.NAVIGATION1_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../../containers");

var _utils = require("../../../../utils");

var _primitives = require("../../../primitives");

var _action = require("../../../primitives/Icon/icons/action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NAVIGATION1_DEFAULT_TEST_ID = "navigation1";
exports.NAVIGATION1_DEFAULT_TEST_ID = NAVIGATION1_DEFAULT_TEST_ID;

const Navigation1 = ({
  className,
  children,
  style,
  testId = NAVIGATION1_DEFAULT_TEST_ID
}) => {
  const colorClasses = (0, _utils.getClassesFromStyle)(style.background);
  return /*#__PURE__*/_react.default.createElement(_containers.Box, {
    size: "full",
    className: (0, _classnames.default)("py-8", className, colorClasses)
  }, /*#__PURE__*/_react.default.createElement("nav", {
    "data-testid": testId,
    className: "w-full h-full max-w-content mx-auto items-center flex flex-col md:flex-row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-none"
  }, children && children.logo), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col md:flex-row flex-1 w-full justify-end"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-grow-0 text-center my-4 md:my-0"
  }, children && children.content && /*#__PURE__*/_react.default.createElement(_containers.Grid, {
    className: (0, _classnames.default)("grid-cols-2 w-full gap-8 md:mx-0", `md:grid-cols-${_react.default.Children.count(children.content)}`)
  }, children.content)), /*#__PURE__*/_react.default.createElement(_primitives.Icon, {
    className: "mx-6"
  }, /*#__PURE__*/_react.default.createElement(_action.search, {
    type: "filled"
  })))));
};

exports.Navigation1 = Navigation1;