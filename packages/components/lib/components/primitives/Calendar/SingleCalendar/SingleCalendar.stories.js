"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedDays = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Calendar/SingleCalendar',
  component: _.SingleCalendar
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

const basic = () => /*#__PURE__*/_react.default.createElement(_.SingleCalendar, {
  month: new Date((0, _addonKnobs.select)('Year', years, 2020), (0, _addonKnobs.select)('Month', months, 0))
});

exports.basic = basic;
basic.story = {
  name: 'Basic'
};

const selectedDays = () => /*#__PURE__*/_react.default.createElement(_.SingleCalendar, {
  initialMonth: new Date(2020, 3),
  customDay: new Date(2020, 3, 30)
});

exports.selectedDays = selectedDays;
selectedDays.story = {
  name: 'Default Days'
};