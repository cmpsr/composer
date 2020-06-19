"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleCalendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDayPicker = _interopRequireDefault(require("react-day-picker"));

require("../../../../styles/calendar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SingleCalendar = ({
  numberOfMonths,
  initialMonth,
  customDay,
  month
}) => {
  const [selectedDay, setSelectedDay] = (0, _react.useState)(customDay);

  const handleDayClick = day => {
    setSelectedDay(day);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "shadow-2xl inline-flex"
  }, /*#__PURE__*/_react.default.createElement(_reactDayPicker.default, {
    className: "singleCalendar",
    numberOfMonths: numberOfMonths,
    selectedDays: selectedDay,
    onDayClick: handleDayClick,
    initialMonth: initialMonth,
    month: month
  }));
};

exports.SingleCalendar = SingleCalendar;