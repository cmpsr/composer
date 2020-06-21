"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PricingPlan3 = exports.PRICING_PLAN_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _primitives = require("../../../primitives");

var _action = require("../../../primitives/Icon/icons/action");

var _hardware = require("../../../primitives/Icon/icons/hardware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PRICING_PLAN_DEFAULT_TEST_ID = 'pricingPlan3';
exports.PRICING_PLAN_DEFAULT_TEST_ID = PRICING_PLAN_DEFAULT_TEST_ID;

const PricingPlan3 = ({
  title,
  price,
  children,
  className,
  displayItems,
  testId = PRICING_PLAN_DEFAULT_TEST_ID
}) => {
  // for mobile
  const [showMore, setShowMore] = (0, _react.useState)(false); // sets a default number of items we want to display on mobile, if not provided

  const numItemsToDisplay = displayItems || 3; // get an empty array if items don't exist

  const items = children ? children.listItems || [] : []; // on desktop we want to show all items in 2 columns

  const itemsColumn1 = items.slice(0, Math.ceil(items.length / 2));
  const itemsColumn2 = items.slice(Math.floor(items.length / 2));

  const clickedMore = () => {
    setShowMore(true);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId,
    className: (0, _classnames.default)('flex flex-col md:flex-row md:justify-between items-center md:px-6 py-8', className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex min-w-full justify-between items-center py-8 border-t border-b border-gray-700 md:flex-col md:min-w-0 md:items-start md:py-0 md:border-0"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h5",
    type: _primitives.TypographyTypes.Headline6,
    style: {}
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row items-baseline"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Headline1,
    className: "font-bold",
    style: {}
  }, "$", price), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Body,
    className: "ml-2",
    style: {}
  }, "/ Mo"))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "md:border md:h-20"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden md:flex justify-start min-w-full md:px-4 md:py-8  md:min-w-0 lg:p-8"
  }, /*#__PURE__*/_react.default.createElement("ul", null, itemsColumn1.map((value, key) => /*#__PURE__*/_react.default.createElement("li", {
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
  }, value)))), /*#__PURE__*/_react.default.createElement("ul", null, itemsColumn2.map((value, key) => /*#__PURE__*/_react.default.createElement("li", {
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
  }, value))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "md:hidden justify-start min-w-full p-8 md:min-w-0 "
  }, /*#__PURE__*/_react.default.createElement("ul", null, items.map((value, key) => /*#__PURE__*/_react.default.createElement("li", {
    className: (0, _classnames.default)('mb-3', {
      hidden: key >= numItemsToDisplay && !showMore
    }),
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
  }, value)))), /*#__PURE__*/_react.default.createElement(_primitives.Button, {
    className: (0, _classnames.default)({
      hidden: showMore
    }),
    onClick: clickedMore
  }, /*#__PURE__*/_react.default.createElement(_primitives.Icon, {
    className: "mr-5"
  }, /*#__PURE__*/_react.default.createElement(_hardware.keyboard_arrow_down, {
    type: "filled"
  })), "View all features")), /*#__PURE__*/_react.default.createElement("div", {
    className: "min-w-full md:min-w-0"
  }, children && children.button));
};

exports.PricingPlan3 = PricingPlan3;