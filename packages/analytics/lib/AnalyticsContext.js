"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AnalyticsContext = /*#__PURE__*/_react.default.createContext({
  identify: () => null,
  group: () => null,
  page: () => null,
  track: () => null,
  user: () => ({
    anonymousId: ''
  }),
  reset: () => null
});

exports.AnalyticsContext = AnalyticsContext;