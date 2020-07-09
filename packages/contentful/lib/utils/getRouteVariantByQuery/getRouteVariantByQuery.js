"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRouteVariantByQuery = void 0;

var _randomTrafficSelector = require("../randomTrafficSelector");

var _getVariantByQueryParams = require("../getVariantByQueryParams");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const randomVariant = (ref, variants) => {
  console.log('Getting variant by traffic split');
  return (0, _randomTrafficSelector.randomTrafficSelector)(variants, item => {
    return _objectSpread(_objectSpread({}, item), {}, {
      ref
    });
  });
};

const getRouteVariantByQuery = (routeQuery, params) => {
  const route = routeQuery.routeCollection.items[0];
  const variants = route.variants.variants;
  const ref = route.slug;
  return (0, _getVariantByQueryParams.getVariantByQueryParams)(ref, variants, params) || randomVariant(ref, variants);
};

exports.getRouteVariantByQuery = getRouteVariantByQuery;