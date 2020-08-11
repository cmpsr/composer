"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconicBadge = exports.BadgeColor = exports.ICONIC_BADGE_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = require("../../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ICONIC_BADGE_DEFAULT_TEST_ID = 'iconicBadge';
exports.ICONIC_BADGE_DEFAULT_TEST_ID = ICONIC_BADGE_DEFAULT_TEST_ID;
let BadgeColor;
exports.BadgeColor = BadgeColor;

(function (BadgeColor) {
  BadgeColor["Error"] = "bg-fill-system-error";
  BadgeColor["Primary"] = "bg-fill-primary-900";
  BadgeColor["Secondary"] = "bg-fill-secondary-900";
})(BadgeColor || (exports.BadgeColor = BadgeColor = {}));

const IconicBadge = ({
  icon,
  color = BadgeColor.Secondary,
  className,
  testId = ICONIC_BADGE_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, color, 'flex items-center justify-center rounded-full h-5 w-5'),
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    className: "p-0.15 fill-current text-fill-white"
  }, icon));
};

exports.IconicBadge = IconicBadge;