"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatMessage = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ChatMessage = ({
  author,
  body,
  sid,
  timestamp
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    key: sid,
    className: "flex items-start mb-4 text-sm"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-10 h-10 rounded mr-3 bg-fill-black-25"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1 overflow-hidden"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-bold"
  }, author), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-fill-black-25 text-xs ml-1"
  }, timestamp)), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-black leading-normal"
  }, body)));
};

exports.ChatMessage = ChatMessage;