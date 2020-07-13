"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withButton = exports.withIcon = exports.withBase = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Snackbar = require("./Snackbar");

var _navigation = require("../Icon/icons/navigation");

var _Icon = require("../Icon");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

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
    textPosition: (0, _addonKnobs.select)('Text Position', _Snackbar.SnackbarTextPosition, _Snackbar.SnackbarTextPosition.Right),
    type: (0, _addonKnobs.select)('Type', _Snackbar.SnackbarType, _Snackbar.SnackbarType.Default),
    position: (0, _addonKnobs.select)('Position', _Snackbar.SnackbarPosition, _Snackbar.SnackbarPosition.TopCenter),
    autoClose: (0, _addonKnobs.number)('Auto close', 5000),
    action: {
      childAction: /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
        className: "text-fill-white fill-current"
      }, /*#__PURE__*/_react.default.createElement(_navigation.close, {
        type: "filled"
      })),
      onClickAction: (0, _addonActions.action)('On click action')
    },
    onClose: (0, _addonActions.action)('On close')
  }));
};

exports.withBase = withBase;
withBase.story = {
  name: 'Base'
};

const withIcon = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-48"
  }, /*#__PURE__*/_react.default.createElement(_Snackbar.Snackbar, {
    open: true,
    message: "Prompt Option",
    description: "Detail Info",
    action: {
      childAction: /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
        className: "text-fill-white fill-current"
      }, /*#__PURE__*/_react.default.createElement(_navigation.close, {
        type: "filled"
      })),
      onClickAction: (0, _addonActions.action)('On click action')
    },
    textPosition: _Snackbar.SnackbarTextPosition.Right,
    type: _Snackbar.SnackbarType.Default,
    position: _Snackbar.SnackbarPosition.TopCenter,
    onClose: (0, _addonActions.action)('On close')
  }));
};

exports.withIcon = withIcon;
withIcon.story = {
  name: 'Icon'
};

const withButton = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-48"
  }, /*#__PURE__*/_react.default.createElement(_Snackbar.Snackbar, {
    open: true,
    message: "Prompt Option",
    description: "Detail Info",
    action: {
      childAction: /*#__PURE__*/_react.default.createElement("div", {
        className: "text-fill-white"
      }, "buttonContent"),
      onClickAction: (0, _addonActions.action)('On click action')
    },
    textPosition: _Snackbar.SnackbarTextPosition.Left,
    type: _Snackbar.SnackbarType.Default,
    position: _Snackbar.SnackbarPosition.TopCenter,
    onClose: (0, _addonActions.action)('On close')
  }));
};

exports.withButton = withButton;
withButton.story = {
  name: 'Button'
};