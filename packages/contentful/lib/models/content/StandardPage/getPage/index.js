"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPage = void 0;

var _react = _interopRequireDefault(require("react"));

var _getChildren = require("../getChildren");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getPage = ({
  id,
  preview = false
}) => {
  const data = (0, _getChildren.getChildren)({
    id,
    preview
  });
  if (!data) return;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, data);
};

exports.getPage = getPage;