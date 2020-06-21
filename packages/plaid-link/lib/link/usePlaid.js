"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePlaid = void 0;

var _reactPlaidLink = require("react-plaid-link");

const usePlaid = ({
  clientName,
  product,
  onSuccess,
  env = 'production',
  countryCodes = undefined,
  publicKey = process.env.PLAID_PUBLIC_KEY,
  onEvent = undefined,
  onExit = undefined
}) => {
  const {
    open,
    exit,
    ready,
    error
  } = (0, _reactPlaidLink.usePlaidLink)({
    clientName,
    product,
    env,
    publicKey,
    onSuccess,
    onEvent,
    onExit,
    countryCodes
  });
  return {
    open,
    exit,
    ready,
    error
  };
};

exports.usePlaid = usePlaid;