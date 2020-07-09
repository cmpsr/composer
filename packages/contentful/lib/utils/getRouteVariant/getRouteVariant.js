"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRouteVariant = void 0;

var _getRoute = require("../getRoute");

var _getRouteVariantByQuery = require("../getRouteVariantByQuery");

const getRouteVariant = () => {
  return async (req, res, next) => {
    const fullPath = req.baseUrl + req.path; // if session variants don't exist yet, create empty array

    if (!req.session.variants) req.session.variants = []; // find the existing variant for the requested route

    const currentVariant = req.session.variants.find(variant => variant.ref == fullPath); // if we already have a chosen variant, set it to the request

    if (currentVariant) {
      console.log('Variant already chosen:', currentVariant);
      req.session.currentVariant = currentVariant;
      next();
      return;
    } // no variant found, so first query contentful


    const routeQuery = await (0, _getRoute.getRoute)(fullPath); // now get a variant based on traffic split

    const variant = (0, _getRouteVariantByQuery.getRouteVariantByQuery)(routeQuery, req.query);
    req.session.variants.push(variant);
    req.session.currentVariant = variant;
    next();
  };
};

exports.getRouteVariant = getRouteVariant;