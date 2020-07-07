"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withBase = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Snackbar = require("./Snackbar");

var _addonKnobs = require("@storybook/addon-knobs");

var _navigation = require("../Icon/icons/navigation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Snackbar',
  component: _Snackbar.Snackbar
};
exports.default = _default;

const withBase = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-48"
  }, /*#__PURE__*/_react.default.createElement(_Snackbar.Snackbar, {
    open: (0, _addonKnobs.boolean)('Open', false),
    message: (0, _addonKnobs.text)('Message', 'Prompt Option'),
    description: (0, _addonKnobs.text)('Description', 'Detail Info'),
    showIcon: (0, _addonKnobs.boolean)('Show close icon', true),
    icon: /*#__PURE__*/_react.default.createElement(_navigation.close, {
      type: "filled"
    }),
    textPosition: (0, _addonKnobs.select)('Text Position', _Snackbar.SnackbarTextPosition, _Snackbar.SnackbarTextPosition.Right),
    showButton: (0, _addonKnobs.boolean)('Show button', false),
    buttonText: (0, _addonKnobs.text)('Button text', 'Button'),
    type: (0, _addonKnobs.select)('Type', _Snackbar.SnackbarType, _Snackbar.SnackbarType.Default),
    position: (0, _addonKnobs.select)('Position', _Snackbar.SnackbarPosition, _Snackbar.SnackbarPosition.TopCenter),
    autoClose: (0, _addonKnobs.number)('Auto close', 5000)
  }));
};

exports.withBase = withBase;
withBase.story = {
  name: 'Base'
};