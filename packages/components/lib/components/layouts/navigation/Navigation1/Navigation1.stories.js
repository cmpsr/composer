"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSearchAndContent = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _primitives = require("../../../primitives");

var _Dropdown = require("../../../primitives/Dropdown");

var _action = require("../../../primitives/Icon/icons/action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Navigation/Navigation1',
  component: _.Navigation1
};
exports.default = _default;

const withSearchAndContent = () => /*#__PURE__*/_react.default.createElement(_.Navigation1, {
  style: {}
}, {
  logo: /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "https://www.google.com"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
    asset: {
      title: '',
      url: 'https://images.ctfassets.net/o9153kt66j4s/6jk4DaIRMlx1CyOXIiLN5F/acebc0468bf2df33d069774c8e8e5bf6/Composer_-_white.svg',
      contentType: 'image'
    }
  })),
  content: [/*#__PURE__*/_react.default.createElement(_Dropdown.Dropdown, {
    title: "Link",
    key: "0"
  }, /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item'
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item'
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item'
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item'
  })), /*#__PURE__*/_react.default.createElement(_Dropdown.Dropdown, {
    title: "Link",
    key: "1"
  }, /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  })), /*#__PURE__*/_react.default.createElement(_Dropdown.Dropdown, {
    title: "Link",
    columns: 2,
    key: "2"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h6",
    type: _primitives.TypographyTypes.Headline6,
    className: "py-4 px-6 whitespace-no-wrap"
  }, "Item Sub - Title 1"), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 1',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 2',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 3',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 4',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 5',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 6',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  })), /*#__PURE__*/_react.default.createElement("hr", {
    className: "border h-auto my-3"
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "h6",
    type: _primitives.TypographyTypes.Headline6,
    className: "py-4 px-6 whitespace-no-wrap"
  }, "Item Sub - Title 2"), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 7',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 8',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 9',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 10',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 11',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.Item, null, {
    title: 'Item 12',
    icon: /*#__PURE__*/_react.default.createElement(_action.favorite, {
      type: "filled"
    })
  }))), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "3"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Body
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "4"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Body
  }, "Link")), /*#__PURE__*/_react.default.createElement(_primitives.Link, {
    url: "#",
    key: "5"
  }, /*#__PURE__*/_react.default.createElement(_primitives.Typography, {
    tag: "span",
    type: _primitives.TypographyTypes.Body
  }, "Link"))]
});

exports.withSearchAndContent = withSearchAndContent;
withSearchAndContent.story = {
  name: 'With search and content'
};