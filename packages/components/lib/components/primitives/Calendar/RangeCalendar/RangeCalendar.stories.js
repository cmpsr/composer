"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedRange = exports.twoMonths = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Calendar/RangeCalendar',
  component: _.RangeCalendar
};
exports.default = _default;
const years = [2020, 2019, 2018];
const months = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
};

const basic = () => {
  return /*#__PURE__*/_react.default.createElement(_.RangeCalendar, {
    month: new Date((0, _addonKnobs.select)('Year', years, 2020), (0, _addonKnobs.select)('Month', months, 0))
  });
};

exports.basic = basic;
basic.story = {
  name: 'Basic '
};

const twoMonths = () => /*#__PURE__*/_react.default.createElement(_.RangeCalendar, {
  numberOfMonths: 2,
  month: new Date((0, _addonKnobs.select)('Year', years, 2020), (0, _addonKnobs.select)('Month', months, 0))
});

exports.twoMonths = twoMonths;
twoMonths.story = {
  name: 'Two Months'
};

const selectedRange = () => /*#__PURE__*/_react.default.createElement(_.RangeCalendar, {
  initialMonth: new Date(2020, 3),
  selectedRange: {
    from: new Date(2020, 3, 20),
    to: new Date(2020, 3, 30)
  }
});

exports.selectedRange = selectedRange;
selectedRange.story = {
  name: 'Selected Range'
};