"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  getPlaidInstance: true
};
exports.getPlaidInstance = void 0;

var _client = require("./client");

Object.keys(_client).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _client[key];
    }
  });
});

var _constants = require("./constants");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

const getPlaidInstance = ({
  publicToken,
  env = 'production',
  options = undefined,
  clientId = process.env.PLAID_CLIENT_ID,
  secret = process.env.PLAID_SECRET,
  publicKey = process.env.PLAID_PUBLIC_KEY
}) => {
  return new _client.Plaid({
    clientId,
    secret,
    publicKey,
    env: _constants.plaidEnvironments[env],
    publicToken,
    options
  });
};

exports.getPlaidInstance = getPlaidInstance;