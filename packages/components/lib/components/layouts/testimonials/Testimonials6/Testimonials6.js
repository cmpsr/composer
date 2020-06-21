"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Testimonials6 = exports.TESTIMONIAL6_PLAN_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../../containers");

var _primitives = require("../../../primitives");

var _editor = require("../../../primitives/Icon/icons/editor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TESTIMONIAL6_PLAN_DEFAULT_TEST_ID = "testimonial6";
exports.TESTIMONIAL6_PLAN_DEFAULT_TEST_ID = TESTIMONIAL6_PLAN_DEFAULT_TEST_ID;

const Testimonials6 = ({
  author,
  profession,
  testimonial,
  className,
  testId = TESTIMONIAL6_PLAN_DEFAULT_TEST_ID
}) => /*#__PURE__*/_react.default.createElement(_containers.Box, {
  size: "content",
  className: (0, _classnames.default)("flex justify-center", className)
}, /*#__PURE__*/_react.default.createElement("div", {
  "data-testid": testId,
  className: "flex flex-col md:flex-row md:w-3/4 p-3"
}, /*#__PURE__*/_react.default.createElement(_primitives.Icon, {
  width: 50,
  height: 50,
  className: "md:w-20 h-12"
}, /*#__PURE__*/_react.default.createElement(_editor.format_quote, {
  type: "filled"
})), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "h1",
  type: _primitives.TypographyTypes.Headline2,
  className: "p-1 text-center mb-10"
}, testimonial), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex items-end justify-center"
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "h6",
  type: _primitives.TypographyTypes.Headline6,
  className: "mr-2"
}, author), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "p",
  type: _primitives.TypographyTypes.Body,
  className: "text-gray-500"
}, profession)))));

exports.Testimonials6 = Testimonials6;