"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Testimonials5 = exports.TESTIMONIAL5_PLAN_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _primitives = require("../../../primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TESTIMONIAL5_PLAN_DEFAULT_TEST_ID = "testimonial5";
exports.TESTIMONIAL5_PLAN_DEFAULT_TEST_ID = TESTIMONIAL5_PLAN_DEFAULT_TEST_ID;

const Testimonials5 = ({
  author,
  profession,
  testimonial,
  asset,
  className,
  testId = TESTIMONIAL5_PLAN_DEFAULT_TEST_ID
}) => /*#__PURE__*/_react.default.createElement("div", {
  "data-testid": testId,
  className: (0, _classnames.default)("relative flex flex-col p-5 md:p-10 rounded shadow items-center", className)
}, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: asset,
  imageClassName: "w-24 h-24 rounded-full object-cover",
  className: "absolute transform -translate-y-20"
}), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "p",
  type: _primitives.TypographyTypes.Body,
  className: "text-center mt-12 mb-12"
}, testimonial), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "h6",
  type: _primitives.TypographyTypes.Headline6,
  className: ""
}, author), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "p",
  type: _primitives.TypographyTypes.Body,
  className: "text-gray-500"
}, profession));

exports.Testimonials5 = Testimonials5;