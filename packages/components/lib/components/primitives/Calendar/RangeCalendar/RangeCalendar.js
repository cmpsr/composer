"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeCalendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDayPicker = _interopRequireWildcard(require("react-day-picker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RangeCalendar = ({
  numberOfMonths,
  month,
  initialMonth,
  selectedRange = {
    from: undefined,
    to: undefined
  }
}) => {
  const [range, setRange] = (0, _react.useState)(selectedRange);
  const modifiers = {
    start: range.from,
    end: range.to
  };

  const handleDayClick = day => {
    const newRange = _reactDayPicker.DateUtils.addDayToRange(day, range);

    setRange(newRange);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "shadow-2xl inline-flex"
  }, /*#__PURE__*/_react.default.createElement(_reactDayPicker.default, {
    className: (0, _classnames.default)('rangeCalendar', {
      doubleCalendar: numberOfMonths > 1
    }),
    numberOfMonths: numberOfMonths,
    modifiers: modifiers,
    selectedDays: [(range.from, range)],
    initialMonth: initialMonth,
    onDayClick: handleDayClick,
    month: month
  }));
};

exports.RangeCalendar = RangeCalendar;