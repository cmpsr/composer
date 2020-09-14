"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interactive = exports.base = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _Message = require("../../Message");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Chat/Conversation/MediaMessage',
  component: _.MediaMessage
};
exports.default = _default;

const base = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.MediaMessage, {
  placement: _Message.MessagePlacement.Left,
  text: "Base message",
  onClick: (0, _addonActions.action)('On Click'),
  backgroundColor: _Message.MessageBackgroundColor.Primary600,
  time: "20:00 PM",
  mediaFiles: [{
    contentType: 'image/jpeg',
    url: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK'
  }, {
    contentType: 'image/jpeg',
    url: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK'
  }]
}));

exports.base = base;
base.story = {
  name: 'Base'
};

const interactive = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.MediaMessage, {
  placement: (0, _addonKnobs.select)('Placement', _Message.MessagePlacement, _Message.MessagePlacement.Left),
  text: (0, _addonKnobs.text)('Text', 'Base Message'),
  onClick: (0, _addonActions.action)('On Click'),
  backgroundColor: (0, _addonKnobs.select)('Background Color', _Message.MessageBackgroundColor, _Message.MessageBackgroundColor.Primary600),
  time: (0, _addonKnobs.text)('Time', '20:00 PM'),
  mediaFiles: [{
    contentType: 'image/jpeg',
    url: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK'
  }, {
    contentType: 'image/jpeg',
    url: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK'
  }]
}));

exports.interactive = interactive;
interactive.story = {
  name: 'Interactive'
};