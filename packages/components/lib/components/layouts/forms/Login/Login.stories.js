"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withAll = exports.withSignInTitleAndIcon = exports.withForgotPassword = exports.withRemember = exports.withSubmit = exports.withAsset = exports.withTitle = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _action = require("../../../primitives/Icon/icons/action");

var _Login = require("./Login");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Forms/Login',
  component: _Login.Login
};
exports.default = _default;

const withTitle = () => /*#__PURE__*/_react.default.createElement(_Login.Login, {
  title: "Sign in to your account"
});

exports.withTitle = withTitle;
withTitle.story = {
  name: 'With Title'
};

const withAsset = () => /*#__PURE__*/_react.default.createElement(_Login.Login, {
  asset: {
    contentType: 'img',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg'
  }
});

exports.withAsset = withAsset;
withAsset.story = {
  name: 'With Asset'
};

const withSubmit = () => /*#__PURE__*/_react.default.createElement(_Login.Login, {
  onSubmit: (0, _addonActions.action)('on submit form action')
});

exports.withSubmit = withSubmit;
withSubmit.story = {
  name: 'With Submit Action'
};
withSubmit.story = {
  name: 'With Submit Action'
};

const withRemember = () => /*#__PURE__*/_react.default.createElement(_Login.Login, {
  remember: "Remember me"
});

exports.withRemember = withRemember;
withRemember.story = {
  name: 'With Remember me'
};

const withForgotPassword = () => /*#__PURE__*/_react.default.createElement(_Login.Login, {
  forgot: {
    title: 'Forgot your password?'
  }
});

exports.withForgotPassword = withForgotPassword;
withForgotPassword.story = {
  name: 'With Forgot Password'
};

const withSignInTitleAndIcon = () => {
  const icon = /*#__PURE__*/_react.default.createElement(_action.lock, {
    type: "filled"
  });

  return /*#__PURE__*/_react.default.createElement(_Login.Login, {
    signIn: {
      title: 'Sign in title',
      icon
    }
  });
};

exports.withSignInTitleAndIcon = withSignInTitleAndIcon;
withSignInTitleAndIcon.story = {
  name: 'With Sign in title & Icon'
};

const withAll = () => {
  const icon = /*#__PURE__*/_react.default.createElement(_action.lock, {
    type: "filled"
  });

  return /*#__PURE__*/_react.default.createElement(_Login.Login, {
    asset: {
      contentType: 'img',
      title: 'Image Title',
      url: 'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg'
    },
    title: "Sign in to your account",
    remember: "Remember me",
    forgot: {
      title: 'Forgot your password?'
    },
    signIn: {
      title: 'Sign in title',
      icon
    }
  });
};

exports.withAll = withAll;
withAll.story = {
  name: 'With all properties set'
};