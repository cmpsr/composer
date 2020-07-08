"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withButton = exports.withIcon = exports.withBase = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ErrorSnackbar = require("./ErrorSnackbar");

var _DefaultSnackbar = require("../DefaultSnackbar");

var _Icon = require("../../Icon");

var _alert = require("../../Icon/icons/alert");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Snackbar/ErrorSnackbar',
  component: _ErrorSnackbar.ErrorSnackbar
};
exports.default = _default;

const withBase = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-48"
  }, /*#__PURE__*/_react.default.createElement(_ErrorSnackbar.ErrorSnackbar, {
    open: (0, _addonKnobs.boolean)('Open', false),
    message: (0, _addonKnobs.text)('Message', 'Prompt Option'),
    description: (0, _addonKnobs.text)('Description', 'Detail Info'),
    textPosition: (0, _addonKnobs.select)('Text Position', _DefaultSnackbar.SnackbarTextPosition, _DefaultSnackbar.SnackbarTextPosition.Right),
    position: (0, _addonKnobs.select)('Position', _DefaultSnackbar.SnackbarPosition, _DefaultSnackbar.SnackbarPosition.TopCenter),
    autoClose: (0, _addonKnobs.number)('Auto close', 5000),
    action: {
      childAction: /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
        className: "text-fill-white fill-current"
      }, /*#__PURE__*/_react.default.createElement(_alert.error_outline, {
        type: "filled"
      })),
      onClickAction: (0, _addonActions.action)('On click action')
    }
  }));
};

exports.withBase = withBase;
withBase.story = {
  name: 'Base'
};

const withIcon = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-48"
  }, /*#__PURE__*/_react.default.createElement(_ErrorSnackbar.ErrorSnackbar, {
    open: true,
    message: "Prompt Option",
    description: "Detail Info",
    action: {
      childAction: /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
        className: "text-fill-white fill-current"
      }, /*#__PURE__*/_react.default.createElement(_alert.error_outline, {
        type: "filled"
      })),
      onClickAction: (0, _addonActions.action)('On click action')
    },
    textPosition: _DefaultSnackbar.SnackbarTextPosition.Right,
    position: _DefaultSnackbar.SnackbarPosition.TopCenter
  }));
};

exports.withIcon = withIcon;
withIcon.story = {
  name: 'Icon'
};

const withButton = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-48"
  }, /*#__PURE__*/_react.default.createElement(_ErrorSnackbar.ErrorSnackbar, {
    open: true,
    message: "Prompt Option",
    description: "Detail Info",
    action: {
      childAction: /*#__PURE__*/_react.default.createElement("div", {
        className: "text-fill-white"
      }, "buttonContent"),
      onClickAction: (0, _addonActions.action)('On click action')
    },
    textPosition: _DefaultSnackbar.SnackbarTextPosition.Left,
    position: _DefaultSnackbar.SnackbarPosition.TopCenter
  }));
};

exports.withButton = withButton;
withButton.story = {
  name: 'Button'
};