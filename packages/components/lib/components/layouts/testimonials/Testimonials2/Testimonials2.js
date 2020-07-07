"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Testimonials2 = exports.TESTIMONIAL2_PLAN_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _containers = require("../../../containers");

var _primitives = require("../../../primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TESTIMONIAL2_PLAN_DEFAULT_TEST_ID = "testimonial2";
exports.TESTIMONIAL2_PLAN_DEFAULT_TEST_ID = TESTIMONIAL2_PLAN_DEFAULT_TEST_ID;

const Testimonials2 = ({
  author,
  profession,
  testimonial,
  asset,
  className,
  testId = TESTIMONIAL2_PLAN_DEFAULT_TEST_ID
}) => /*#__PURE__*/_react.default.createElement(_containers.Box, {
  size: "content",
  className: (0, _classnames.default)("flex justify-center mt-5", className)
}, /*#__PURE__*/_react.default.createElement("div", {
  "data-testid": testId,
  className: "flex flex-col items-center md:h-56 md:w-7/12"
}, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: asset,
  imageClassName: "w-16 h-16 rounded-full object-cover",
  className: "mb-4"
}), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "h6",
  type: _primitives.TypographyTypes.Headline6
}, author), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "p",
  type: _primitives.TypographyTypes.Body,
  className: "text-gray-500 mb-8"
}, profession), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "p",
  type: _primitives.TypographyTypes.Body,
  className: "text-center px-4"
}, testimonial)));

exports.Testimonials2 = Testimonials2;