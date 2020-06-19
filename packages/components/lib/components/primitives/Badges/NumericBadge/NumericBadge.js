"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumericBadge = exports.BadgeColor = exports.NUMERIC_BADGE_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = require("../../Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NUMERIC_BADGE_DEFAULT_TEST_ID = 'numericBadge';
exports.NUMERIC_BADGE_DEFAULT_TEST_ID = NUMERIC_BADGE_DEFAULT_TEST_ID;
let BadgeColor;
exports.BadgeColor = BadgeColor;

(function (BadgeColor) {
  BadgeColor["Error"] = "bg-fill-system-error";
  BadgeColor["Primary"] = "bg-fill-primary-100";
  BadgeColor["Secondary"] = "bg-fill-secondary-100";
})(BadgeColor || (exports.BadgeColor = BadgeColor = {}));

const NumericBadge = ({
  number,
  color = BadgeColor.Secondary,
  className,
  testId = NUMERIC_BADGE_DEFAULT_TEST_ID,
  maximumNumber = 9
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, color, 'flex items-center justify-center rounded-full h-5 w-5'),
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    className: "overflow-hidden truncate p-0.15",
    mode: _Typography.TypographyMode.Light100,
    tag: "span",
    type: _Typography.TypographyTypes.Eyebrow
  }, number > maximumNumber ? `${maximumNumber}+` : number));
};

exports.NumericBadge = NumericBadge;