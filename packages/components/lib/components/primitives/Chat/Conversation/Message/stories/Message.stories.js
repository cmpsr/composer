"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMedia = exports.withMultipleMessages = exports.withTime = exports.withColors = exports.withRight = exports.withLeft = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Chat/Conversation/Message',
  component: _.Message
};
exports.default = _default;

const withLeft = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  placement: _.MessagePlacement.Left,
  text: "I'm a fancy message"
}));

exports.withLeft = withLeft;
withLeft.story = {
  name: 'With left placement'
};

const withRight = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  placement: _.MessagePlacement.Right,
  text: "I'm a fancy message"
}));

exports.withRight = withRight;
withRight.story = {
  name: 'With right placement'
};

const withColors = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  backgroundColor: _.MessageBackgroundColor.Primary600,
  text: "I'm a primary 25 color"
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  backgroundColor: _.MessageBackgroundColor.Secondary600,
  text: "I'm a secondary 25 color"
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  backgroundColor: _.MessageBackgroundColor.Black100,
  text: "I'm a black 10 color"
}));

exports.withColors = withColors;
withColors.story = {
  name: 'With colors'
};

const withTime = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  time: "10:23 AM",
  text: "I'm a fancy message"
}));

exports.withTime = withTime;
withTime.story = {
  name: 'With time'
};

const withMultipleMessages = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  text: "Hi Pau! Welcome Aboard!"
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  time: "01:32 PM",
  text: "We should talk about this deal :)"
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  time: "02:37 PM",
  backgroundColor: _.MessageBackgroundColor.Secondary600,
  placement: _.MessagePlacement.Left,
  text: "Absolutely! I'm really interested."
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  text: "Oops, sorry. I'm having some issues, my internet connection is super unstable..."
}), /*#__PURE__*/_react.default.createElement(_.Message, {
  text: "This is a media message",
  onMediaClick: (0, _addonActions.action)('On media click'),
  mediaFiles: [{
    contentType: 'image/jpeg',
    url: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK'
  }, {
    contentType: 'image/jpeg',
    url: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK'
  }]
}));

exports.withMultipleMessages = withMultipleMessages;
withMultipleMessages.story = {
  name: 'With multiple messages'
};

const withMedia = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.Message, {
  text: "This is a media message",
  onMediaClick: (0, _addonActions.action)('On media click'),
  mediaFiles: [{
    contentType: 'image/jpeg',
    url: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK'
  }, {
    contentType: 'image/jpeg',
    url: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK'
  }]
}));

exports.withMedia = withMedia;
withMedia.story = {
  name: 'With media'
};