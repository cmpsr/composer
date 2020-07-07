"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PricingPlan2 = exports.PRICING_PLAN_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _primitives = require("../../../primitives");

var _action = require("../../../primitives/Icon/icons/action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PRICING_PLAN_DEFAULT_TEST_ID = 'pricingPlan2';
exports.PRICING_PLAN_DEFAULT_TEST_ID = PRICING_PLAN_DEFAULT_TEST_ID;

const PricingPlan2 = ({
  title,
  price,
  className,
  children,
  testId = PRICING_PLAN_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId,
    className: (0, _classnames.default)('rounded shadow-lg px-6 py-8', className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h5",
    type: _primitives.TypographyTypes.Headline5,
    style: {},
    className: "font-bold"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row items-baseline"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Headline5,
    className: "font-bold",
    style: {}
  }, "$", price), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Body,
    className: "ml-2",
    style: {}
  }, "monthly"))), /*#__PURE__*/_react.default.createElement("div", {
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
};

exports.PricingPlan2 = PricingPlan2;