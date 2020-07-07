"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Testimonials3 = exports.TESTIMONIAL3_PLAN_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _primitives = require("../../../primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TESTIMONIAL3_PLAN_DEFAULT_TEST_ID = "testimonial3";
exports.TESTIMONIAL3_PLAN_DEFAULT_TEST_ID = TESTIMONIAL3_PLAN_DEFAULT_TEST_ID;

const Testimonials3 = ({
  author,
  profession,
  testimonial,
  asset,
  className,
  testId = TESTIMONIAL3_PLAN_DEFAULT_TEST_ID
}) => /*#__PURE__*/_react.default.createElement("div", {
  "data-testid": testId,
  className: (0, _classnames.default)("flex flex-col items-center", className)
}, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: asset,
  imageClassName: "w-32 h-32 rounded-full object-cover",
  className: "mb-4"
}), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "h6",
  type: _primitives.TypographyTypes.Headline6
}, author), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "p",
  type: _primitives.TypographyTypes.Body,
  className: "text-gray-500 mb-6"
}, profession), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "p",
  type: _primitives.TypographyTypes.Body,
  className: "text-center md:px-5"
}, testimonial));

exports.Testimonials3 = Testimonials3;