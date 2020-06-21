"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PricingPlan1 = exports.PRICING_PLAN_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _primitives = require("../../../primitives");

var _action = require("../../../primitives/Icon/icons/action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PRICING_PLAN_DEFAULT_TEST_ID = 'pricing_plan1';
exports.PRICING_PLAN_DEFAULT_TEST_ID = PRICING_PLAN_DEFAULT_TEST_ID;

const PricingPlan1 = ({
  title,
  price,
  className,
  children,
  testId = PRICING_PLAN_DEFAULT_TEST_ID
}) => /*#__PURE__*/_react.default.createElement("div", {
  "data-testid": testId,
  className: (0, _classnames.default)('rounded shadow-lg px-6 py-8', className)
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "flex justify-between items-center"
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "h5",
  type: _primitives.TypographyTypes.Headline5,
  style: {},
  className: "font-bold"
}, title), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
  url: "https://www.google.com"
}, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: {
    title: '',
    url: 'https://images.ctfassets.net/o9153kt66j4s/6jk4DaIRMlx1CyOXIiLN5F/acebc0468bf2df33d069774c8e8e5bf6/Composer_-_white.svg',
    contentType: 'image'
  },
  imageClassName: "h-10"
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex flex-row items-baseline"
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Headline5,
  className: "font-bold self-start mt-2",
  style: {}
}, "$"), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Headline1,
  style: {}
}, price), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Headline6,
  style: {},
  className: "ml-2"
}, "/ Mo")), /*#__PURE__*/_react.default.createElement("div", {
  className: "mt-6 mb-10"
}, /*#__PURE__*/_react.default.createElement("ul", null, children && children.listItems && children.listItems.map((value, key) => /*#__PURE__*/_react.default.createElement("li", {
  className: "mb-3",
  key: key
}, /*#__PURE__*/_react.default.createElement(_primitives.Icon, {
  className: "inline-block mr-5"
}, /*#__PURE__*/_react.default.createElement(_action.done, {
  type: "filled"
})), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "span",
  type: _primitives.TypographyTypes.Body,
  style: {
    default: {
      text: 'gray-500'
    }
  }
}, value))))), children && children.button);

exports.PricingPlan1 = PricingPlan1;