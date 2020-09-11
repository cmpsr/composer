"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createApolloClient;

var _client = require("@apollo/client");

var _ = require("./");

var _possibleTypes = _interopRequireDefault(require("../types/possibleTypes.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createApolloClient(initialState, ctx, preview = false) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new _client.ApolloClient({
    ssrMode: Boolean(ctx),
    link: (0, _.ContentfulLink)({
      preview
    }),
    cache: new _client.InMemoryCache({
      possibleTypes: _possibleTypes.default
    }).restore(initialState)
  });
}