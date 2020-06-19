"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkItem = exports.LINK_ITEM_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../..");

var _Typography = require("../../Typography");

var _getDropdownClasses = require("../../../../utils/getDropdownClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LINK_ITEM_DEFAULT_TEST_ID = 'linkItem';
exports.LINK_ITEM_DEFAULT_TEST_ID = LINK_ITEM_DEFAULT_TEST_ID;

const LinkItem = ({
  className,
  url,
  route,
  title,
  icon,
  subTitle,
  target,
  testId = LINK_ITEM_DEFAULT_TEST_ID
}) => {
  const {
    wrapper,
    iconClasses,
    titleWrapper
  } = (0, _getDropdownClasses.getItemClasses)();
  return /*#__PURE__*/_react.default.createElement("a", {
    className: (0, _classnames.default)(wrapper, className),
    href: route ? route.slug : url,
    target: target,
    "data-testid": testId
  }, icon && /*#__PURE__*/_react.default.createElement(_.Icon, {
    className: iconClasses
  }, icon), /*#__PURE__*/_react.default.createElement("div", {
    className: titleWrapper
  }, title && /*#__PURE__*/_react.default.createElement(_.Typography, {
    tag: "span",
    type: _.TypographyTypes.Body
  }, title), subTitle && /*#__PURE__*/_react.default.createElement(_.Typography, {
    tag: "span",
    type: _.TypographyTypes.Detail,
    mode: _Typography.TypographyMode.Dark50
  }, subTitle)));
};

exports.LinkItem = LinkItem;