"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withErrorColor = exports.withSecondaryColor = exports.withPrimaryColor = exports.withIcon = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _action = require("../../../Icon/icons/action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Badges/IconicBadge',
  component: _.IconicBadge
};
exports.default = _default;

const withIcon = () => /*#__PURE__*/_react.default.createElement(_.IconicBadge, {
  icon: /*#__PURE__*/_react.default.createElement(_action.search, {
    type: "filled"
  })
});

exports.withIcon = withIcon;
withIcon.story = {
  name: 'With icon'
};

const withPrimaryColor = () => /*#__PURE__*/_react.default.createElement(_.IconicBadge, {
  color: _.BadgeColor.Primary,
  icon: /*#__PURE__*/_react.default.createElement(_action.search, {
    type: "filled"
  })
});

exports.withPrimaryColor = withPrimaryColor;
withPrimaryColor.story = {
  name: 'With primary color'
};

const withSecondaryColor = () => /*#__PURE__*/_react.default.createElement(_.IconicBadge, {
  color: _.BadgeColor.Secondary,
  icon: /*#__PURE__*/_react.default.createElement(_action.search, {
    type: "filled"
  })
});

exports.withSecondaryColor = withSecondaryColor;
withSecondaryColor.story = {
  name: 'With secondary color'
};

const withErrorColor = () => /*#__PURE__*/_react.default.createElement(_.IconicBadge, {
  color: _.BadgeColor.Error,
  icon: /*#__PURE__*/_react.default.createElement(_action.search, {
    type: "filled"
  })
});

exports.withErrorColor = withErrorColor;
withErrorColor.story = {
  name: 'With error color'
};