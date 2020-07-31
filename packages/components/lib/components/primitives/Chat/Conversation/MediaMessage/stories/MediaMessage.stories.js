"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMultipleMessages = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Chat/Conversation/MediaMessage',
  component: _.MediaMessage
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.MediaMessage, {
  time: (0, _addonKnobs.text)('Time', '15:05 PM'),
  borderColor: (0, _addonKnobs.select)('Border Color', _.MediaMessageBorderColor, _.MediaMessageBorderColor.Secondary25),
  placement: (0, _addonKnobs.select)('Placement', _.MessagePlacement, _.MessagePlacement.Left),
  image: {
    title: (0, _addonKnobs.text)('Title', 'title'),
    url: (0, _addonKnobs.text)('Url', 'https://images.ctfassets.net/o9153kt66j4s/2ClCasVvBEEKCAnWbctHQt/195c416b76203751ad8d62f231e84855/Screen_Shot_2020-07-30_at_2.07.47_PM.png')
  },
  onClick: (0, _addonActions.action)('Media Message on Click')
}));

exports.basic = basic;
basic.story = {
  name: 'Basic'
};

const withMultipleMessages = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "p-10"
}, /*#__PURE__*/_react.default.createElement(_.MediaMessage, {
  time: (0, _addonKnobs.text)("Time", "15:05 PM"),
  borderColor: (0, _addonKnobs.select)('Border Color', _.MediaMessageBorderColor, _.MediaMessageBorderColor.Secondary25),
  placement: (0, _addonKnobs.select)('Placement', _.MessagePlacement, _.MessagePlacement.Left),
  image: {
    title: 'title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/2ClCasVvBEEKCAnWbctHQt/195c416b76203751ad8d62f231e84855/Screen_Shot_2020-07-30_at_2.07.47_PM.png'
  },
  onClick: (0, _addonActions.action)('Media Message on Click')
}), /*#__PURE__*/_react.default.createElement(_.MediaMessage, {
  time: (0, _addonKnobs.text)("Time", "15:05 PM"),
  borderColor: (0, _addonKnobs.select)('Border Color', _.MediaMessageBorderColor, _.MediaMessageBorderColor.Secondary25),
  placement: (0, _addonKnobs.select)('Placement', _.MessagePlacement, _.MessagePlacement.Left),
  image: {
    title: 'title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/2ClCasVvBEEKCAnWbctHQt/195c416b76203751ad8d62f231e84855/Screen_Shot_2020-07-30_at_2.07.47_PM.png'
  },
  onClick: (0, _addonActions.action)('Media Message on Click')
}));

exports.withMultipleMessages = withMultipleMessages;
withMultipleMessages.story = {
  name: 'With multiple messages'
};