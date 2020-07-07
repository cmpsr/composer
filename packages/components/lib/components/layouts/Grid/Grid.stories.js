"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withEmbeddedImageLinks = exports.with2ColumnsDesktop1MobileImage = exports.with3ColumnsDesktop1Mobile = exports.with2ColumnsDesktop1Mobile = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _EmbeddedFeature = require("../features/EmbeddedFeature1");

var _ = require(".");

var _primitives = require("../../primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Layout/Grid/EmbeddedFeature1',
  component: _.Grid
};
exports.default = _default;

const with2ColumnsDesktop1Mobile = () => /*#__PURE__*/_react.default.createElement(_.Grid, {
  style: {
    grid: {
      md: {
        'grid-cols': 2
      },
      default: {
        gap: 4,
        'grid-cols': 1
      }
    }
  }
}, /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {}
}), /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {}
}), /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {}
}), /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {}
}));

exports.with2ColumnsDesktop1Mobile = with2ColumnsDesktop1Mobile;
with2ColumnsDesktop1Mobile.story = {
  name: 'With 2/1 columns'
};

const with3ColumnsDesktop1Mobile = () => /*#__PURE__*/_react.default.createElement(_.Grid, {
  style: {
    grid: {
      md: {
        'grid-cols': 3
      },
      default: {
        gap: 4,
        'grid-cols': 1
      }
    }
  }
}, /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {}
}), /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {}
}), /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {}
}), /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {}
}));

exports.with3ColumnsDesktop1Mobile = with3ColumnsDesktop1Mobile;
with3ColumnsDesktop1Mobile.story = {
  name: 'With 3/1 columns'
};

const with2ColumnsDesktop1MobileImage = () => /*#__PURE__*/_react.default.createElement(_.Grid, {
  style: {
    grid: {
      md: {
        'grid-cols': 2
      },
      default: {
        gap: 4,
        'grid-cols': 1
      }
    }
  }
}, /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {},
  embeddedAsset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg'
  }
}), /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {},
  embeddedAsset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg'
  }
}), /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {},
  embeddedAsset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg'
  }
}), /*#__PURE__*/_react.default.createElement(_EmbeddedFeature.EmbeddedFeature1, {
  title: "Create an Out-of-this-World website with this headline",
  subtitle: "We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.",
  style: {},
  embeddedAsset: {
    contentType: 'image',
    title: 'Image Title',
    url: 'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg'
  }
}));

exports.with2ColumnsDesktop1MobileImage = with2ColumnsDesktop1MobileImage;
with2ColumnsDesktop1MobileImage.story = {
  name: 'With 2/1 columns: EmbeddedFeature1'
};

const withEmbeddedImageLinks = () => /*#__PURE__*/_react.default.createElement(_.Grid, {
  style: {
    grid: {
      md: {
        'grid-cols': 6
      },
      default: {
        gap: 4,
        'grid-cols': 3
      }
    }
  }
}, /*#__PURE__*/_react.default.createElement(_primitives.Link, null, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: {
    title: '',
    url: 'https://images.ctfassets.net/o9153kt66j4s/3muBNiFvfwvLm62w16Plzp/69977f9df63957d51016cc35031e1254/Google.svg',
    contentType: 'image'
  }
})), /*#__PURE__*/_react.default.createElement(_primitives.Link, null, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: {
    title: '',
    url: 'https://images.ctfassets.net/o9153kt66j4s/3muBNiFvfwvLm62w16Plzp/69977f9df63957d51016cc35031e1254/Google.svg',
    contentType: 'image'
  }
})), /*#__PURE__*/_react.default.createElement(_primitives.Link, null, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: {
    title: '',
    url: 'https://images.ctfassets.net/o9153kt66j4s/3muBNiFvfwvLm62w16Plzp/69977f9df63957d51016cc35031e1254/Google.svg',
    contentType: 'image'
  }
})), /*#__PURE__*/_react.default.createElement(_primitives.Link, null, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: {
    title: '',
    url: 'https://images.ctfassets.net/o9153kt66j4s/3muBNiFvfwvLm62w16Plzp/69977f9df63957d51016cc35031e1254/Google.svg',
    contentType: 'image'
  }
})), /*#__PURE__*/_react.default.createElement(_primitives.Link, null, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: {
    title: '',
    url: 'https://images.ctfassets.net/o9153kt66j4s/3muBNiFvfwvLm62w16Plzp/69977f9df63957d51016cc35031e1254/Google.svg',
    contentType: 'image'
  }
})), /*#__PURE__*/_react.default.createElement(_primitives.Link, null, /*#__PURE__*/_react.default.createElement(_primitives.Asset, {
  asset: {
    title: '',
    url: 'https://images.ctfassets.net/o9153kt66j4s/3muBNiFvfwvLm62w16Plzp/69977f9df63957d51016cc35031e1254/Google.svg',
    contentType: 'image'
  }
})));

exports.withEmbeddedImageLinks = withEmbeddedImageLinks;
withEmbeddedImageLinks.story = {
  name: 'With 6/3 columns: Link Image'
};