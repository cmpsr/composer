"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = exports.showSnackbar = exports.hideSnackbar = exports.SnackbarPosition = exports.SnackbarTextPosition = exports.SnackbarType = exports.SNACKBAR_DEFAULT_TEST_ID = exports.SHOW_SNACKBAR_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactToastify = require("react-toastify");

var _Snackbar = require("./Snackbar.styles");

var _Typography = require("../Typography");

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SHOW_SNACKBAR_DEFAULT_TEST_ID = 'showSnackbar';
exports.SHOW_SNACKBAR_DEFAULT_TEST_ID = SHOW_SNACKBAR_DEFAULT_TEST_ID;
const SNACKBAR_DEFAULT_TEST_ID = 'Snackbar';
exports.SNACKBAR_DEFAULT_TEST_ID = SNACKBAR_DEFAULT_TEST_ID;
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

const hideSnackbar = () => _reactToastify.toast.dismiss();

exports.hideSnackbar = hideSnackbar;

const showSnackbar = ({
  className,
  testId = SHOW_SNACKBAR_DEFAULT_TEST_ID,
  message,
  description,
  textPosition = SnackbarTextPosition.Right,
  type = SnackbarType.Default,
  position = SnackbarPosition.TopCenter,
  autoClose = 5000,
  action,
  onClose
}) => {
  const isTextRightPosition = textPosition === SnackbarTextPosition.Right;
  const styles = (0, _Snackbar.getStyle)(isTextRightPosition, type);

  const snackbarContent = /*#__PURE__*/_react.default.createElement("div", {
    className: styles.snackbarWrapper,
    "data-testid": testId
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
  }, description)), action ? /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: styles.ctaWrapper,
    onClick: action.onClickAction
  }, action.childAction) : null);

  (0, _reactToastify.toast)(snackbarContent, {
    className: (0, _classnames.default)(styles.toastContainer, className),
    position,
    onClose,
    autoClose
  });
};

exports.showSnackbar = showSnackbar;

const Snackbar = ({
  className,
  testId = SNACKBAR_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, {
    className: className,
    hideProgressBar: true,
    closeButton: null,
    draggable: false
  }));
};

exports.Snackbar = Snackbar;