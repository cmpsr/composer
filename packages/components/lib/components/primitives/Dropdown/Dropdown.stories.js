"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twoColumns = exports.withIcon = exports.basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require(".");

var _List = require("../List");

var _action = require("../Icon/icons/action");

var _2 = require("./..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Dropdown',
  component: _.Dropdown
};
exports.default = _default;

const basic = () => /*#__PURE__*/_react.default.createElement(_.Dropdown, {
  title: (0, _addonKnobs.text)('Dropdown title', 'Link')
}, /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 1', 'title')
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 2', 'title')
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 3', 'title')
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 4', 'title')
}));

exports.basic = basic;
basic.story = {
  name: 'basic'
};

const withIcon = () => /*#__PURE__*/_react.default.createElement(_.Dropdown, {
  title: (0, _addonKnobs.text)('Dropdown title', 'Link')
}, /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 1', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 2', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 3', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 4', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}));

exports.withIcon = withIcon;
withIcon.story = {
  name: 'with Icon'
};

const twoColumns = () => /*#__PURE__*/_react.default.createElement(_.Dropdown, {
  title: "Link"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "flex"
}, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_2.Typography, {
  tag: "h6",
  type: _2.TypographyTypes.Headline6,
  className: "py-4 px-6 whitespace-no-wrap"
}, (0, _addonKnobs.text)('Subtitle 1', 'Item Sub - Title 1')), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 1', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 2', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 3', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 4', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 5', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 6', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
})), /*#__PURE__*/_react.default.createElement("hr", {
  className: "border h-auto my-3"
}), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_2.Typography, {
  tag: "h6",
  type: _2.TypographyTypes.Headline6,
  className: "py-4 px-6 whitespace-no-wrap"
}, (0, _addonKnobs.text)('Subtitle 2', 'Item Sub - Title 2')), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 7', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 8', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 9', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 10', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 11', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}), /*#__PURE__*/_react.default.createElement(_List.LinkItem, {
  title: (0, _addonKnobs.text)('Title 12', 'title'),
  icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
    type: "filled"
  })
}))));

exports.twoColumns = twoColumns;
twoColumns.story = {
  name: 'Two columns'
};