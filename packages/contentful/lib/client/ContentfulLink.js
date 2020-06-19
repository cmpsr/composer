"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentfulLink = void 0;

var _apolloLinkHttp = require("apollo-link-http");

var _isomorphicUnfetch = _interopRequireDefault(require("isomorphic-unfetch"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContentfulLink = ({
  preview = false
}) => {
  const environment = process.env.CONTENTFUL_ENVIRONMENT ? process.env.CONTENTFUL_ENVIRONMENT : 'master';
  return (0, _.getAuthLink)(preview).concat(new _apolloLinkHttp.HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${environment}`,
    // Server URL (must be absolute)
    fetch: _isomorphicUnfetch.default
  }));
};

exports.ContentfulLink = ContentfulLink;