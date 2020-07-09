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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Feature = /*#__PURE__*/_react.default.memo(props => {
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
    embeddedType,
    mobileAsset,
    desktopAsset,
    embeddedAsset,
    style,
    contentCollection,
    isEmbedded = false
  } = props;
  const featureProps = {
    className,
    title,
    subtitle,
    eyebrow,
    mobileAsset,
    desktopAsset,
    embeddedAsset,
    style: style || {}
  };
  const componentMap = {
    [_constants.DEFAULT]: () => /*#__PURE__*/_react.default.createElement(_layouts.Feature1, featureProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, _objectSpread(_objectSpread({}, item), {}, {
      isEmbedded
    }), index, id))),
    feature2: () => /*#__PURE__*/_react.default.createElement(_layouts.Feature2, featureProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, _objectSpread(_objectSpread({}, item), {}, {
      isEmbedded
    }), index, id))),
    feature3: () => /*#__PURE__*/_react.default.createElement(_layouts.Feature3, featureProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, _objectSpread(_objectSpread({}, item), {}, {
      isEmbedded
    }), index, id))),
    "embedded-feature1": () => /*#__PURE__*/_react.default.createElement(_layouts.EmbeddedFeature1, featureProps, contentCollection.items.map((item, index) => (0, _renderFromContentfulModel.default)(contentfulContext, _objectSpread(_objectSpread({}, item), {}, {
      isEmbedded
    }), index, id)))
  };
  return (0, _renderFromComponentMap.default)(componentMap, isEmbedded ? embeddedType : type);
});

var _default = Feature;
exports.default = _default;