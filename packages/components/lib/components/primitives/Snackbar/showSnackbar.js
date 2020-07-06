"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSnackbar = exports.SnackbarPosition = exports.SnackbarTextPosition = exports.SnackbarType = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactToastify = require("react-toastify");

var _Typography = require("../Typography");

var _Icon = require("../Icon");

var _Snackbar = require("./Snackbar.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SnackbarType;
exports.SnackbarType = SnackbarType;

(function (SnackbarType) {
  SnackbarType["Default"] = "default";
  SnackbarType["Success"] = "success";
  SnackbarType["Warning"] = "warning";
  SnackbarType["Error"] = "error";
})(SnackbarType || (exports.SnackbarType = SnackbarType = {}));

let SnackbarTextPosition;
exports.SnackbarTextPosition = SnackbarTextPosition;

(function (SnackbarTextPosition) {
  SnackbarTextPosition["Left"] = "left";
  SnackbarTextPosition["Right"] = "right";
})(SnackbarTextPosition || (exports.SnackbarTextPosition = SnackbarTextPosition = {}));

let SnackbarPosition;
exports.SnackbarPosition = SnackbarPosition;

(function (SnackbarPosition) {
  SnackbarPosition["TopCenter"] = "top-center";
  SnackbarPosition["TopRight"] = "top-right";
  SnackbarPosition["TopLeft"] = "top-left";
  SnackbarPosition["BottomRight"] = "bottom-right";
  SnackbarPosition["BottomCenter"] = "bottom-center";
  SnackbarPosition["BottomLeft"] = "bottom-left";
})(SnackbarPosition || (exports.SnackbarPosition = SnackbarPosition = {}));

const showSnackbar = ({
  message,
  description,
  showIcon,
  icon,
  textPosition = SnackbarTextPosition.Right,
  showButton,
  buttonText,
  type = SnackbarType.Default,
  position = SnackbarPosition.TopCenter
}) => {
  const isIconRightPosition = textPosition === 'right';
  const styles = (0, _Snackbar.getStyle)({
    textPosition: isIconRightPosition,
    type
  });

  const snackbarContent = /*#__PURE__*/_react.default.createElement("div", {
    className: styles.snackbarWrapper
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.informationWrapper
  }, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    type: _Typography.TypographyTypes.Body,
    mode: _Typography.TypographyMode.Light100,
    tag: "p"
  }, message), description && /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    type: _Typography.TypographyTypes.Detail,
    mode: _Typography.TypographyMode.Light100,
    tag: "p"
  }, description)), showIcon ? /*#__PURE__*/_react.default.createElement("div", {
    className: styles.ctaWrapper
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    className: styles.icon
  }, icon)) : showButton ? /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    className: styles.ctaWrapper,
    type: _Typography.TypographyTypes.Button,
    mode: _Typography.TypographyMode.Light100,
    tag: "p"
  }, buttonText) : null);

  (0, _reactToastify.toast)(snackbarContent, {
    className: styles.toastContainer,
    position
  });
};

exports.showSnackbar = showSnackbar;