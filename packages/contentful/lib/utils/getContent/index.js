"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContent = void 0;

var _react = require("react");

var _client = require("@apollo/client");

var _context = require("../../context");

var _renderFromContentfulModel = _interopRequireDefault(require("../renderFromContentfulModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getContent = ({
  id,
  query,
  name
}) => {
  const contentfulContext = (0, _react.useContext)(_context.ContentfulContext);
  const {
    data
  } = (0, _client.useQuery)(query, {
    variables: {
      id
    }
  });
  if (!data) return null;
  return (0, _renderFromContentfulModel.default)(contentfulContext, data[name], 0);
};

exports.getContent = getContent;