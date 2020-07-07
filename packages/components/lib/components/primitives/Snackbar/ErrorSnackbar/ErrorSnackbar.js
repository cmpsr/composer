"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorSnackbar = exports.ERROR_SNACKBAR_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _DefaultSnackbar = require("../DefaultSnackbar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ERROR_SNACKBAR_DEFAULT_TEST_ID = 'errorSnackbar';
exports.ERROR_SNACKBAR_DEFAULT_TEST_ID = ERROR_SNACKBAR_DEFAULT_TEST_ID;

const ErrorSnackbar = ({
  testId = ERROR_SNACKBAR_DEFAULT_TEST_ID,
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
    type: _DefaultSnackbar.SnackbarType.Error,
    position: position,
    autoClose: autoClose,
    action: action
  }));
};

exports.ErrorSnackbar = ErrorSnackbar;