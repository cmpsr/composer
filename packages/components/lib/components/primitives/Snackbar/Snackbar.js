"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = exports.SnackbarPosition = exports.SnackbarTextPosition = exports.SnackbarType = exports.SNACKBAR_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactToastify = require("react-toastify");

var _Snackbar = require("./Snackbar.styles");

var _Typography = require("../Typography");

var _Button = require("../Button");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SNACKBAR_DEFAULT_TEST_ID = 'snackbar';
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

const Snackbar = ({
  testId = SNACKBAR_DEFAULT_TEST_ID,
  open = false,
  message,
  description,
  textPosition = SnackbarTextPosition.Right,
  type = SnackbarType.Default,
  position = SnackbarPosition.TopCenter,
  autoClose = 5000,
  action,
  onClose
}) => {
  const [hasBeenOpened, setHasBeenOpened] = (0, _react.useState)(false);
  const isTextRightPosition = textPosition === SnackbarTextPosition.Right;
  const styles = (0, _Snackbar.getStyle)(isTextRightPosition, type);

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
  }, description)), action ? /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: styles.ctaWrapper,
    onClick: action.onClickAction
  }, action.childAction) : null);

  (0, _react.useEffect)(() => {
    if (open) {
      (0, _reactToastify.toast)(snackbarContent, {
        className: styles.toastContainer,
        position,
        onClose
      });
      setHasBeenOpened(true);
    } else {
      if (hasBeenOpened) {
        _reactToastify.toast.dismiss();

        setHasBeenOpened(false);
      }
    }
  }, [open]);
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, {
    autoClose: autoClose,
    hideProgressBar: true,
    closeButton: null,
    draggable: false
  }));
};

exports.Snackbar = Snackbar;