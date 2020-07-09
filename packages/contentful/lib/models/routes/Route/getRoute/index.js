"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoute = void 0;

var _reactHooks = require("@apollo/react-hooks");

var Route = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "RouteQuery" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "slug" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } }, directives: [] }], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "routeCollection" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "where" }, value: { kind: "ObjectValue", fields: [{ kind: "ObjectField", name: { kind: "Name", value: "slug" }, value: { kind: "Variable", name: { kind: "Name", value: "slug" } } }] } }, { kind: "Argument", name: { kind: "Name", value: "limit" }, value: { kind: "IntValue", value: "1" } }], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "items" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "slug" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "page" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "sys" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }] } }] } }, { kind: "Field", name: { kind: "Name", value: "variants" }, arguments: [], directives: [] }] } }] } }] } }], loc: { start: 0, end: 206, source: { body: "query RouteQuery($slug: String!) {\n  routeCollection(where: { slug: $slug }, limit: 1) {\n    items {\n      id\n      slug\n      page {\n        sys {\n          id\n        }\n      }\n      variants\n    }\n  }\n}\n", name: "GraphQL request", locationOffset: { line: 1, column: 1 } } } };

const getRoute = ({
  slug
}) => {
  const {
    data
  } = (0, _reactHooks.useQuery)(Route, {
    variables: {
      slug
    }
  });
  return data;
};

exports.getRoute = getRoute;