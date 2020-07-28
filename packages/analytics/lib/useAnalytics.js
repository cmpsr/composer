"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnalytics = void 0;

var _react = _interopRequireDefault(require("react"));

var _AnalyticsContext = require("./AnalyticsContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useAnalytics = () => {
  return _react.default.useContext(_AnalyticsContext.AnalyticsContext);
};

exports.useAnalytics = useAnalytics;