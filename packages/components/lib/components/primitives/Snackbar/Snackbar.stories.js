"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withButton = exports.withIcon = exports.withBase = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Snackbar = require("./Snackbar");

var _navigation = require("../Icon/icons/navigation");

var _Icon = require("../Icon");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'Composer/Primitive/Snackbar',
  component: _Snackbar.Snackbar
};
exports.default = _default;

const withBase = () => {
  const props = {
    className: (0, _addonKnobs.text)('ClassName', 'text-fill-primary-900'),
    message: (0, _addonKnobs.text)('Message', 'Prompt Option'),
    description: (0, _addonKnobs.text)('Description', 'Detail Info'),
    textPosition: (0, _addonKnobs.select)('Text Position', _Snackbar.SnackbarTextPosition, _Snackbar.SnackbarTextPosition.Right),
    type: (0, _addonKnobs.select)('Type', _Snackbar.SnackbarType, _Snackbar.SnackbarType.Default),
    position: (0, _addonKnobs.select)('Position', _Snackbar.SnackbarPosition, _Snackbar.SnackbarPosition.TopCenter),
    autoClose: (0, _addonKnobs.number)('Auto close', 5000),
    onClose: (0, _addonActions.action)('On close'),
    action: {
      childAction: /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
        className: "text-fill-white fill-current"
      }, /*#__PURE__*/_react.default.createElement(_navigation.close, {
        type: "filled"
      })),
      onClickAction: (0, _addonActions.action)('On click action')
    }
  };
  (0, _react.useEffect)(() => {
    (0, _Snackbar.showSnackbar)(props);
  }, [props]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-48"
  }, /*#__PURE__*/_react.default.createElement(_Snackbar.Snackbar, {
    className: (0, _addonKnobs.text)('ClassName', 'text-fill-primary-900')
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: _Snackbar.hideSnackbar
  }, "Hide snackbar"));
};

exports.withBase = withBase;
withBase.story = {
  name: 'Base'
};

const withIcon = () => {
  const props = {
    className: 'text-fill-primary-900',
    message: 'Prompt Option',
    description: 'Detail Info',
    textPosition: _Snackbar.SnackbarTextPosition.Right,
    type: _Snackbar.SnackbarType.Default,
    position: _Snackbar.SnackbarPosition.TopCenter,
    autoClose: 5000,
    onClose: (0, _addonActions.action)('On close'),
    action: {
      childAction: /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
        className: "text-fill-white fill-current"
      }, /*#__PURE__*/_react.default.createElement(_navigation.close, {
        type: "filled"
      })),
      onClickAction: (0, _addonActions.action)('On click action')
    }
  };
  (0, _react.useEffect)(() => {
    (0, _Snackbar.showSnackbar)(props);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-48"
  }, /*#__PURE__*/_react.default.createElement(_Snackbar.Snackbar, null));
};

exports.withIcon = withIcon;
withIcon.story = {
  name: 'Icon'
};

const withButton = () => {
  const props = {
    className: 'text-fill-primary-900',
    message: 'Prompt Option',
    description: 'Detail Info',
    textPosition: _Snackbar.SnackbarTextPosition.Left,
    type: _Snackbar.SnackbarType.Default,
    position: _Snackbar.SnackbarPosition.TopCenter,
    autoClose: 5000,
    onClose: (0, _addonActions.action)('On close'),
    action: {
      childAction: /*#__PURE__*/_react.default.createElement("div", {
        className: "text-fill-white"
      }, "buttonContent"),
      onClickAction: (0, _addonActions.action)('On click action')
    }
  };
  (0, _react.useEffect)(() => {
    (0, _Snackbar.showSnackbar)(props);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-48"
  }, /*#__PURE__*/_react.default.createElement(_Snackbar.Snackbar, null));
};

exports.withButton = withButton;
withButton.story = {
  name: 'Button'
};