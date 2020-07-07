"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withGrid = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _primitives = require("../../../primitives");

var _ = require(".");

var _2 = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/PricingPlan/PricingPlan3',
  component: _.PricingPlan3
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.PricingPlan3, {
  title: "Bronze",
  price: "12"
}, {
  listItems: ['Unlimited access', 'Monthly access', 'Custom access', 'Unlimited storage', '24/7 support', 'One click installs'],
  button: /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    type: _primitives.LinkTypes.Primary,
    className: "lg:w-56 lg:ml-40"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Button
  }, "Subscribe"))
});

exports.basic = basic;
basic.story = {
  name: 'Basic'
};

const withGrid = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_2.Grid, {
  gridClassName: "w-full px-5 py-8",
  style: {
    grid: {
      md: {
        'grid-cols': 1
      },
      default: {
        gap: 4,
        'grid-cols': 1
      }
    }
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "px-6 text-center md:text-left"
}, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "h1",
  type: _primitives.TypographyTypes.Headline2
}, "Pricing Plans"), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
  tag: "h6",
  type: _primitives.TypographyTypes.Headline6,
  className: "mt-2"
}, "Find a cosmic plan for you")), /*#__PURE__*/_react.default.createElement(_.PricingPlan3, {
  title: "Bronze",
  price: "12"
}, {
  listItems: ['Unlimited access', 'Monthly access', 'Custom access', 'Unlimited storage', '24/7 support', 'One click installs'],
  button: /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    type: _primitives.LinkTypes.Primary,
    className: "lg:w-56 lg:ml-40"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Button
  }, "Subscribe"))
}), /*#__PURE__*/_react.default.createElement(_.PricingPlan3, {
  title: "Bronze",
  price: "12"
}, {
  listItems: ['Unlimited access', 'Monthly access', 'Custom access', 'Unlimited storage', '24/7 support', 'One click installs'],
  button: /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    type: _primitives.LinkTypes.Primary,
    className: "lg:w-56 lg:ml-40"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Button
  }, "Subscribe"))
}), /*#__PURE__*/_react.default.createElement(_.PricingPlan3, {
  title: "Bronze",
  price: "12"
}, {
  listItems: ['Unlimited access', 'Monthly access', 'Custom access', 'Unlimited storage', '24/7 support', 'One click installs'],
  button: /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    type: _primitives.LinkTypes.Primary,
    className: "lg:w-56 lg:ml-40"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Button
  }, "Subscribe"))
})));

exports.withGrid = withGrid;
withGrid.story = {
  name: 'With grid'
};