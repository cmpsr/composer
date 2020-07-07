"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _primitives = require("../../../primitives");

var _TextField = require("../../../primitives/form/TextField");

var _Link = require("../../../primitives/Link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Login = ({
  className,
  asset,
  title,
  remember,
  forgot,
  signIn = {
    title: "Sign in"
  },
  onSubmit
}) => {
  const [username, setUsername] = (0, _react.useState)();
  const [password, setPassword] = (0, _react.useState)();
  const [rememberMe, setRememberMe] = (0, _react.useState)();

  const onChangeUsername = event => setUsername(event.currentTarget.value);

  const onChangePassword = event => setPassword(event.currentTarget.value);

  const onChangeRememberMe = event => setRememberMe(event.currentTarget.checked);

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit({
      name: username,
      password,
      remember: rememberMe
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("h-screen flex items-center justify-center bg-gray-50 px-4 lg:px-8", className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "max-w-md w-full"
  }, /*#__PURE__*/_react.default.createElement("div", null, asset && /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    className: "mx-auto h-20 w-auto",
    asset: asset
  }), /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h2",
    type: _primitives.TypographyTypes.Headline4,
    className: "text-center mt-8"
  }, title)), /*#__PURE__*/_react.default.createElement("form", {
    className: "mt-8",
    onSubmit: onFormSubmit
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "remember",
    value: "true"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-md shadow-sm"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_TextField.TextField, {
    ariaLabel: "Name",
    name: "name",
    placeholder: "Name",
    required: true,
    onChange: onChangeUsername
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/_react.default.createElement(_TextField.TextField, {
    ariaLabel: "Password",
    name: "password",
    placeholder: "Password",
    type: "password",
    onChange: onChangePassword
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-6 flex items-center justify-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, remember && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    id: "remember_me",
    type: "checkbox",
    className: "form-checkbox h-4 w-4 fill-primary-100 transition duration-150 ease-in-out",
    onChange: onChangeRememberMe
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "remember_me",
    className: "ml-2 block text-sm leading-5 text-gray-900"
  }, remember))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm leading-5"
  }, (forgot === null || forgot === void 0 ? void 0 : forgot.title) && /*#__PURE__*/_react.default.createElement(_Link.Link, {
    className: "font-medium fill-primary-100 focus:outline-none focus:underline transition ease-in-out duration-150",
    url: forgot.url,
    route: forgot.route
  }, forgot.title))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Button, {
    htmlType: "submit",
    type: _primitives.ButtonTypes.Primary,
    className: "w-full relative"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "absolute left-0 px-4"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Icon, {
    className: "fill-current",
    width: 24,
    height: 24
  }, signIn === null || signIn === void 0 ? void 0 : signIn.icon)), signIn === null || signIn === void 0 ? void 0 : signIn.title)))));
};

exports.Login = Login;