"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversationList = exports.CONVERSATION_LIST_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ConversationSummary = require("../ConversationSummary");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CONVERSATION_LIST_DEFAULT_TEST_ID = 'conversationList';
exports.CONVERSATION_LIST_DEFAULT_TEST_ID = CONVERSATION_LIST_DEFAULT_TEST_ID;

const ConversationList = ({
  id,
  conversations,
  emptyCaseElement,
  className,
  selectedConversationId,
  testId = CONVERSATION_LIST_DEFAULT_TEST_ID
}) => {
  const hasConversations = conversations.length > 0;

  const renderConversations = () => {
    return /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-none"
    }, conversations.map(conversation => {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: conversation.id
      }, /*#__PURE__*/_react.default.createElement(_ConversationSummary.ConversationSummary, _extends({}, conversation, {
        isActive: conversation.id === selectedConversationId
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "ml-8 border-b border-outline-background-400"
      }));
    }));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: (0, _classnames.default)(className),
    "data-testid": testId
  }, hasConversations ? renderConversations() : emptyCaseElement);
};

exports.ConversationList = ConversationList;