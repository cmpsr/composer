"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plaidEnvironments = void 0;

var _plaid = _interopRequireDefault(require("plaid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const plaidEnvironments = {
  development: _plaid.default.environments.development,
  sandbox: _plaid.default.environments.sandbox,
  production: _plaid.default.environments.production
};
exports.plaidEnvironments = plaidEnvironments;