"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pill = exports.PILL_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = require("../Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PILL_DEFAULT_TEST_ID = 'pill';
exports.PILL_DEFAULT_TEST_ID = PILL_DEFAULT_TEST_ID;

const Pill = ({
  className,
  label,
  testId = PILL_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, 'text-center align-middle rounded-full border border-outline-primary-50 w-auto inline-block py-0.375 px-5'),
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    mode: _Typography.TypographyMode.Dark50,
    tag: "span",
    type: _Typography.TypographyTypes.Detail
  }, label));
};

exports.Pill = Pill;