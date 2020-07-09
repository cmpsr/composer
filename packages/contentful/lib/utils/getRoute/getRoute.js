"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoute = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _apolloClient = _interopRequireDefault(require("../../client/apolloClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getRoute = async slug => {
  const apolloClient = (0, _apolloClient.default)({}, true, false);
  const result = await apolloClient.query({
    query: (0, _graphqlTag.default)(`query RouteQuery($slug: String!) {
    routeCollection(where: { slug: $slug }, limit: 1) {
      items {
        id
        slug
        page {
          sys {
            id
          }
        }
        variants
      }
    }
  }
  `),
    variables: {
      slug
    }
  });
  return result.data;
};

exports.getRoute = getRoute;