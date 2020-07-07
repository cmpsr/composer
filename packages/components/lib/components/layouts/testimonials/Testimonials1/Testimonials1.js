"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Testimonials1 = exports.TESTIMONIAL1_PLAN_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../../containers");

var _primitives = require("../../../primitives");

var _editor = require("../../../primitives/Icon/icons/editor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TESTIMONIAL1_PLAN_DEFAULT_TEST_ID = "testimonial1";
exports.TESTIMONIAL1_PLAN_DEFAULT_TEST_ID = TESTIMONIAL1_PLAN_DEFAULT_TEST_ID;

const Testimonials1 = ({
  author,
  profession,
  testimonial,
  asset,
  className,
  testId = TESTIMONIAL1_PLAN_DEFAULT_TEST_ID
}) => /*#__PURE__*/_react.default.createElement(_containers.Box, {
  size: "content",
  className: (0, _classnames.default)("flex items-stretch", className)
}, /*#__PURE__*/_react.default.createElement("div", {
  "data-testid": testId,
  className: "flex flex-col md:flex-row ml-8 mr-4 my-8 md:my-20 md:mx-24"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "w-40 h-40 md:w-64 md:h-64 md:mr-12"
}, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: asset,
  imageClassName: "h-full object-cover"
})), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-col self-center text-left md:flex-row md:flex-1"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "mt-3 mr-4 md:mt-0"
}, /*#__PURE__*/_react.default.createElement(_primitives.Icon, {
  width: 50,
  height: 50
}, /*#__PURE__*/_react.default.createElement(_editor.format_quote, {
  type: "filled"
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "pt-3"
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "p",
  type: _primitives.TypographyTypes.Headline5,
  className: "font-bold"
}, testimonial), /*#__PURE__*/_react.default.createElement("div", {
  className: "mt-4"
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Body,
  className: "mr-2"
}, author), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Body,
  className: "text-gray-500"
}, profession))))));

exports.Testimonials1 = Testimonials1;