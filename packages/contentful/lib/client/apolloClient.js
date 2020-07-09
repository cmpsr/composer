"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createApolloClient;

var _apolloClient = require("apollo-client");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _ = require("./");

var _fragmentTypes = _interopRequireDefault(require("../schema/fragmentTypes.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fragmentMatcher = new _apolloCacheInmemory.IntrospectionFragmentMatcher({
  introspectionQueryResultData: _fragmentTypes.default
});

function createApolloClient(initialState, ctx, preview = false) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new _apolloClient.ApolloClient({
    ssrMode: Boolean(ctx),
    link: (0, _.ContentfulLink)({
      preview
    }),
    cache: new _apolloCacheInmemory.InMemoryCache({
      fragmentMatcher
    }).restore(initialState)
  });
}