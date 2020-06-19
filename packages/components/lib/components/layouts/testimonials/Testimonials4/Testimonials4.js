"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Testimonials4 = exports.TESTIMONIAL4_PLAN_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _primitives = require("../../../primitives");

var _editor = require("../../../primitives/Icon/icons/editor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TESTIMONIAL4_PLAN_DEFAULT_TEST_ID = "testimonial4";
exports.TESTIMONIAL4_PLAN_DEFAULT_TEST_ID = TESTIMONIAL4_PLAN_DEFAULT_TEST_ID;

const Testimonials4 = ({
  author,
  profession,
  testimonial,
  asset,
  className,
  testId = TESTIMONIAL4_PLAN_DEFAULT_TEST_ID
}) => /*#__PURE__*/_react.default.createElement("div", {
  "data-testid": testId,
  className: (0, _classnames.default)("flex flex-col p-10 rounded shadow-lg", className)
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "flex items-center mb-8"
}, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: asset,
  imageClassName: "w-20 h-20 rounded-full object-cover",
  className: "mr-6"
}), /*#__PURE__*/_react.default.createElement("div", {
  className: "align-middle"
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "h6",
  type: _primitives.TypographyTypes.Headline6,
  className: ""
}, author), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "p",
  type: _primitives.TypographyTypes.Body,
  className: "text-gray-500"
}, profession))), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "p",
  type: _primitives.TypographyTypes.Body,
  className: "text-left mb-12"
}, testimonial), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex justify-end"
}, /*#__PURE__*/_react.default.createElement(_primitives.Icon, {
  width: 50,
  height: 50
}, /*#__PURE__*/_react.default.createElement(_editor.format_quote, {
  type: "filled"
}))));

exports.Testimonials4 = Testimonials4;