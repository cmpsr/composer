"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContent = void 0;

var _react = require("react");

var _client = require("@apollo/client");

var _context = require("../../../../context");

var _renderFromContentfulModel = _interopRequireDefault(require("../../../../utils/renderFromContentfulModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeroByIdQuery = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "HeroByIdQuery" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "id" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } }, directives: [] }], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "hero" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "Variable", name: { kind: "Name", value: "id" } } }], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Hero" }, directives: [] }] } }] } }, { kind: "FragmentDefinition", name: { kind: "Name", value: "Hero" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Hero" } }, directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "sys" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }] } }, { kind: "Field", name: { kind: "Name", value: "title" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "eyebrow" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "subtitle" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "desktopAsset" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Asset" }, directives: [] }] } }, { kind: "Field", name: { kind: "Name", value: "mobileAsset" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Asset" }, directives: [] }] } }, { kind: "Field", name: { kind: "Name", value: "style" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "contentCollection" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "limit" }, value: { kind: "IntValue", value: "3" } }], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "items" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Link" }, directives: [] }] } }] } }] } }, { kind: "FragmentDefinition", name: { kind: "Name", value: "Asset" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Asset" } }, directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "contentType" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "title" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "url" }, arguments: [], directives: [] }] } }, { kind: "FragmentDefinition", name: { kind: "Name", value: "Link" }, typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Link" } }, directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "sys" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }] } }, { kind: "Field", name: { kind: "Name", value: "asset" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Asset" }, directives: [] }] } }, { kind: "Field", name: { kind: "Name", value: "title" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "embeddedType" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "route" }, arguments: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "slug" }, arguments: [], directives: [] }] } }, { kind: "Field", name: { kind: "Name", value: "style" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "url" }, arguments: [], directives: [] }] } }], loc: { start: 0, end: 109, source: { body: "#import \"../fragments/Hero.graphql\"\n\nquery HeroByIdQuery($id: String!) {\n  hero(id: $id) {\n    ...Hero\n  }\n}\n", name: "GraphQL request", locationOffset: { line: 1, column: 1 } } } };

const getContent = ({
  id
}) => {
  const contentfulContext = (0, _react.useContext)(_context.ContentfulContext);
  const {
    data
  } = (0, _client.useQuery)(HeroByIdQuery, {
    variables: {
      id
    }
  });
  if (!data) return null;
  return (0, _renderFromContentfulModel.default)(contentfulContext, data.hero, 0);
};

exports.getContent = getContent;