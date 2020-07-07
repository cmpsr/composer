"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFooter = exports.withCustomElements = exports.basicButtonItem = exports.basicLinkItem = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _action = require("../../Icon/icons/action");

var _ = require("../");

var _Button = require("../../Button");

var _Typography = require("../../Typography");

var _Link = require("../../Link");

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/List',
  component: _.List
};
exports.default = _default;

const basicLinkItem = () => /*#__PURE__*/_react.default.createElement(_.List, {
  className: (0, _addonKnobs.text)('List width', 'min-w-8-125')
}, /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  title: (0, _addonKnobs.text)('Title 1', 'Result')
}), /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  title: (0, _addonKnobs.text)('Title 2', 'Result')
}), /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  title: (0, _addonKnobs.text)('Title 3', 'Result')
}), /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  title: (0, _addonKnobs.text)('Title 4', 'Result')
}));

exports.basicLinkItem = basicLinkItem;
basicLinkItem.story = {
  name: 'basic link item'
};

const basicButtonItem = () => /*#__PURE__*/_react.default.createElement(_.List, {
  className: (0, _addonKnobs.text)('List width', 'min-w-8-125')
}, /*#__PURE__*/_react.default.createElement(_.ButtonItem, {
  onClick: (0, _addonActions.action)('Item click')
}, (0, _addonKnobs.text)('Item 1', 'Result')), /*#__PURE__*/_react.default.createElement(_.ButtonItem, {
  onClick: (0, _addonActions.action)('Item click')
}, (0, _addonKnobs.text)('Item 2', 'Result')), /*#__PURE__*/_react.default.createElement(_.ButtonItem, {
  onClick: (0, _addonActions.action)('Item click')
}, (0, _addonKnobs.text)('Item 3', 'Result')), /*#__PURE__*/_react.default.createElement(_.ButtonItem, {
  onClick: (0, _addonActions.action)('Item click')
}, (0, _addonKnobs.text)('Item 4', 'Result')));

exports.basicButtonItem = basicButtonItem;
basicButtonItem.story = {
  name: 'basic button item'
};

const withCustomElements = () => /*#__PURE__*/_react.default.createElement(_.List, {
  className: "min-w-20-625"
}, /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  }),
  title: (0, _addonKnobs.text)('Title 1 ', 'Result'),
  subTitle: (0, _addonKnobs.text)('Subtitle 1', 'Details')
}), /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  }),
  title: (0, _addonKnobs.text)('Title 2', 'Result'),
  subTitle: (0, _addonKnobs.text)('Subtitle 2', 'Details')
}), /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  }),
  title: (0, _addonKnobs.text)('Title 3', 'Result'),
  subTitle: (0, _addonKnobs.text)('Subtitle 3', 'Details')
}), /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  }),
  title: (0, _addonKnobs.text)('Title 4', 'Result'),
  subTitle: (0, _addonKnobs.text)('Subtitle 4', 'Details')
}));

exports.withCustomElements = withCustomElements;
withCustomElements.story = {
  name: 'With icon, title, subtitle'
};

const withFooter = () => /*#__PURE__*/_react.default.createElement(_.List, {
  className: "min-w-20-625"
}, /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  }),
  title: (0, _addonKnobs.text)('Title 1', 'title')
}), /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  }),
  title: (0, _addonKnobs.text)('Title 2', 'title')
}), /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  }),
  title: (0, _addonKnobs.text)('Title 3', 'title')
}), /*#__PURE__*/_react.default.createElement(_.LinkItem, {
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  }),
  title: (0, _addonKnobs.text)('Title 4', 'title')
}), /*#__PURE__*/_react.default.createElement("hr", {
  className: "border border-fill-black-25 my-2"
}), /*#__PURE__*/_react.default.createElement("div", {
  className: "flex justify-between items-center px-6 py-2"
}, /*#__PURE__*/_react.default.createElement(_Link.Link, {
  url: "#"
}, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  tag: "span",
  type: _Typography.TypographyTypes.Link
}, (0, _addonKnobs.text)('Button 1', 'Clear'))), /*#__PURE__*/_react.default.createElement(_Button.Button, {
  type: _Button.ButtonTypes.Primary,
  onClick: (0, _addonActions.action)('button action click')
}, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
  tag: "span",
  type: _Typography.TypographyTypes.Button
}, (0, _addonKnobs.text)('Button 2', 'Button')))));

exports.withFooter = withFooter;
withFooter.story = {
  name: 'link with footer'
};