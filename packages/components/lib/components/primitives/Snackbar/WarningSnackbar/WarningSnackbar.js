"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningSnackbar = exports.WARNING_SNACKBAR_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _DefaultSnackbar = require("../DefaultSnackbar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WARNING_SNACKBAR_DEFAULT_TEST_ID = 'warningSnackbar';
exports.WARNING_SNACKBAR_DEFAULT_TEST_ID = WARNING_SNACKBAR_DEFAULT_TEST_ID;

const WarningSnackbar = ({
  testId = WARNING_SNACKBAR_DEFAULT_TEST_ID,
  open = false,
  message,
  description,
  textPosition = _DefaultSnackbar.SnackbarTextPosition.Right,
  position = _DefaultSnackbar.SnackbarPosition.TopCenter,
  autoClose = 5000,
  action
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement(_DefaultSnackbar.DefaultSnackbar, {
    open: open,
    message: message,
    description: description,
    textPosition: textPosition,
    type: _DefaultSnackbar.SnackbarType.Warning,
    position: position,
    autoClose: autoClose,
    action: action
  }));
};

exports.WarningSnackbar = WarningSnackbar;