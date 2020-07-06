"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "showSnackbar", {
  enumerable: true,
  get: function () {
    return _showSnackbar.showSnackbar;
  }
});
Object.defineProperty(exports, "SnackbarType", {
  enumerable: true,
  get: function () {
    return _showSnackbar.SnackbarType;
  }
});
Object.defineProperty(exports, "SnackbarTextPosition", {
  enumerable: true,
  get: function () {
    return _showSnackbar.SnackbarTextPosition;
  }
});
Object.defineProperty(exports, "SnackbarPosition", {
  enumerable: true,
  get: function () {
    return _showSnackbar.SnackbarPosition;
  }
});
exports.Snackbar = exports.SNACKBAR_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactToastify = require("react-toastify");

var _showSnackbar = require("./showSnackbar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SNACKBAR_DEFAULT_TEST_ID = 'snackbar';
exports.SNACKBAR_DEFAULT_TEST_ID = SNACKBAR_DEFAULT_TEST_ID;

const Snackbar = ({
  testId = SNACKBAR_DEFAULT_TEST_ID
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, {
    autoClose: 5000,
    hideProgressBar: true,
    closeButton: null,
    draggable: false
  }));
};

exports.Snackbar = Snackbar;