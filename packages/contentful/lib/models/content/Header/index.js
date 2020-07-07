"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../../constants");

var _layouts = require("@cmpsr/components/lib/components/layouts");

var _context = require("../../../context");

var _renderFromComponentMap = _interopRequireDefault(require("../../../utils/renderFromComponentMap"));

var _renderFromContentfulModel = _interopRequireDefault(require("../../../utils/renderFromContentfulModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Header = /*#__PURE__*/_react.default.memo(props => {
  const contentfulContext = (0, _react.useContext)(_context.ContentfulContext);
  const {
    sys: {
      id
    },
    className,
    logo,
    type,
    style,
    contentCollection,
    secondaryContentCollection
  } = props;
  const headerProps = {
    className,
    style: style || {}
  };
  const componentMap = {
    [_constants.DEFAULT]: () => /*#__PURE__*/_react.default.createElement(_layouts.Navigation1, headerProps, {
      logo: (0, _renderFromContentfulModel.default)(contentfulContext, logo),
      content: contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))
    }),
    header2: () => /*#__PURE__*/_react.default.createElement(_layouts.Navigation2, headerProps, {
      logo: (0, _renderFromContentfulModel.default)(contentfulContext, logo),
      content: contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id)),
      secondaryContent: secondaryContentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))
    }),
    header3: () => /*#__PURE__*/_react.default.createElement(_layouts.Navigation3, headerProps, {
      logo: (0, _renderFromContentfulModel.default)(contentfulContext, logo),
      content: contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))
    }),
    header4: () => /*#__PURE__*/_react.default.createElement(_layouts.Navigation4, headerProps, {
      logo: (0, _renderFromContentfulModel.default)(contentfulContext, logo),
      content: contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id)),
      secondaryContent: secondaryContentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))
    }),
    header5: () => /*#__PURE__*/_react.default.createElement(_layouts.Navigation5, headerProps, {
      logo: (0, _renderFromContentfulModel.default)(contentfulContext, logo),
      content: contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))
    }),
    header6: () => /*#__PURE__*/_react.default.createElement(_layouts.Navigation6, headerProps, {
      logo: (0, _renderFromContentfulModel.default)(contentfulContext, logo),
      content: contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id)),
      secondaryContent: secondaryContentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))
    }),
    header7: () => /*#__PURE__*/_react.default.createElement(_layouts.Navigation7, headerProps, {
      logo: (0, _renderFromContentfulModel.default)(contentfulContext, logo),
      content: contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))
    }),
    header8z: () => /*#__PURE__*/_react.default.createElement(_layouts.Navigation8, headerProps, {
      logo: (0, _renderFromContentfulModel.default)(contentfulContext, logo),
      content: contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id)),
      secondaryContent: secondaryContentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))
    })
  };
  return (0, _renderFromComponentMap.default)(componentMap, type);
});

var _default = Header;
exports.default = _default;