"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversationSummary = exports.CONVERSATION_SUMMARY_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = require("../../Typography");

var _AvatarText = require("../../Avatars/AvatarText");

var _NumericBadge = require("../../Badges/NumericBadge");

var _Icon = require("../../Icon");

var _alert = require("../../Icon/icons/alert");

var _getConversationSummaryClasses = require("../../../../utils/getConversationSummaryClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CONVERSATION_SUMMARY_DEFAULT_TEST_ID = 'conversationSummary';
exports.CONVERSATION_SUMMARY_DEFAULT_TEST_ID = CONVERSATION_SUMMARY_DEFAULT_TEST_ID;

const ConversationSummary = ({
  id,
  title,
  description,
  message,
  unreadMessages,
  avatarText,
  isHighlighted,
  isActive,
  isError,
  time,
  className,
  messageClassName,
  testId = CONVERSATION_SUMMARY_DEFAULT_TEST_ID,
  onClick
}) => {
  const {
    wrapper,
    avatarWrapper,
    avatar,
    profile,
    profileWrapper,
    profileTitle,
    profileDescription,
    profileMessage,
    notification,
    notificationTime,
    notificationError
  } = (0, _getConversationSummaryClasses.getConversationSummaryClasses)(isError, isActive);
  const showUnreadMessages = unreadMessages !== 0 && unreadMessages && !isError;
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => onClick(id),
    className: (0, _classnames.default)(className, wrapper),
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: profile
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: avatarWrapper
  }, /*#__PURE__*/_react.default.createElement(_AvatarText.AvatarText, {
    highlightClassName: avatar,
    size: _AvatarText.AvatarSize.Small,
    backgroundColor: _AvatarText.AvatarBackgroundColor.Primary25,
    text: avatarText,
    isHighlighted: isHighlighted
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: profileWrapper
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    className: profileTitle,
    mode: _Typography.TypographyMode.Dark100,
    tag: 'p',
    type: _Typography.TypographyTypes.Body
  }, /*#__PURE__*/_react.default.createElement("b", null, title)), /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    className: profileDescription,
    mode: _Typography.TypographyMode.Dark100,
    tag: 'p',
    type: _Typography.TypographyTypes.Detail
  }, description), /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    className: (0, _classnames.default)(messageClassName, profileMessage),
    tag: 'p',
    type: _Typography.TypographyTypes.Detail
  }, message, '\u00A0'))), /*#__PURE__*/_react.default.createElement("div", {
    className: notification
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    className: notificationTime,
    mode: _Typography.TypographyMode.Dark50,
    tag: 'span',
    type: _Typography.TypographyTypes.Detail
  }, time), showUnreadMessages && /*#__PURE__*/_react.default.createElement(_NumericBadge.NumericBadge, {
    number: unreadMessages,
    color: _NumericBadge.BadgeColor.Secondary
  }), isError && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    viewBoxWidth: 21,
    viewBoxHeight: 24,
    className: notificationError
  }, /*#__PURE__*/_react.default.createElement(_alert.error, {
    type: "rounded"
  }))));
};

exports.ConversationSummary = ConversationSummary;