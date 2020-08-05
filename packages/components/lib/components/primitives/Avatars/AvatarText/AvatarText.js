"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarText = exports.AvatarBackgroundColor = exports.AvatarSize = exports.AVATAR_TEXT_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = require("../../Typography");

var _getAvatarTextClasses = require("../../../../utils/getAvatarTextClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AVATAR_TEXT_DEFAULT_TEST_ID = 'avatarText';
exports.AVATAR_TEXT_DEFAULT_TEST_ID = AVATAR_TEXT_DEFAULT_TEST_ID;
let AvatarSize;
exports.AvatarSize = AvatarSize;

(function (AvatarSize) {
  AvatarSize["ExtraSmall"] = "w-1.75 h-1.75";
  AvatarSize["Small"] = "w-10 h-10";
  AvatarSize["Medium"] = "w-12 h-12";
  AvatarSize["Large"] = "w-3.5 h-3.5";
})(AvatarSize || (exports.AvatarSize = AvatarSize = {}));

let AvatarBackgroundColor;
exports.AvatarBackgroundColor = AvatarBackgroundColor;

(function (AvatarBackgroundColor) {
  AvatarBackgroundColor["Primary900"] = "bg-fill-primary-900";
  AvatarBackgroundColor["Primary600"] = "bg-fill-primary-600";
})(AvatarBackgroundColor || (exports.AvatarBackgroundColor = AvatarBackgroundColor = {}));

const AvatarText = ({
  text,
  className,
  highlightClassName,
  testId = AVATAR_TEXT_DEFAULT_TEST_ID,
  size = AvatarSize.Large,
  backgroundColor = AvatarBackgroundColor.Primary900,
  isHighlighted
}) => {
  const {
    highlightClasses,
    avatarClasses,
    textClasses
  } = (0, _getAvatarTextClasses.getAvatarTextClasses)(size, backgroundColor);
  const typographyType = (0, _getAvatarTextClasses.getAvatarTypographyType)(size);

  const avatar = /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, avatarClasses),
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    className: textClasses,
    mode: _Typography.TypographyMode.Light100,
    tag: "span",
    type: typographyType
  }, text));

  return isHighlighted ? /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": "avatarTextHighlight",
    className: (0, _classnames.default)(highlightClasses, highlightClassName)
  }, avatar) : avatar;
};

exports.AvatarText = AvatarText;