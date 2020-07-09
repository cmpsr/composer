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

const Hero = /*#__PURE__*/_react.default.memo(props => {
  const contentfulContext = (0, _react.useContext)(_context.ContentfulContext);
  const {
    sys: {
      id
    },
    className,
    title,
    subtitle,
    eyebrow,
    type,
    mobileAsset,
    desktopAsset,
    style,
    contentCollection
  } = props;
  const heroProps = {
    className,
    title,
    subtitle,
    eyebrow,
    mobileAsset,
    desktopAsset,
    style: style || {}
  };
  const componentMap = {
    [_constants.DEFAULT]: () => /*#__PURE__*/_react.default.createElement(_layouts.Hero1, heroProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))),
    hero2: () => /*#__PURE__*/_react.default.createElement(_layouts.Hero2, heroProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))),
    hero3: () => /*#__PURE__*/_react.default.createElement(_layouts.Hero3, heroProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))),
    hero4: () => /*#__PURE__*/_react.default.createElement(_layouts.Hero4, heroProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))),
    hero5: () => /*#__PURE__*/_react.default.createElement(_layouts.Hero5, heroProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))),
    hero6: () => /*#__PURE__*/_react.default.createElement(_layouts.Hero6, heroProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))),
    hero7: () => /*#__PURE__*/_react.default.createElement(_layouts.Hero7, heroProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id))),
    hero8: () => /*#__PURE__*/_react.default.createElement(_layouts.Hero8, heroProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, item, index, id)))
  };
  return (0, _renderFromComponentMap.default)(componentMap, type);
});

var _default = Hero;
exports.default = _default;