"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _Kms = require("./Kms");

Object.keys(_Kms).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Kms[key];
    }
  });
});

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

const useKMS = ({
  projectId = process.env.GCP_PROJECT_ID,
  email = process.env.GCP_EMAIL,
  privateKey = process.env.GCP_PRIVATE_KEY,
  keyRingId,
  cryptoKeyId = 'default',
  cryptoKeyVersionId = '1',
  locationId = undefined
}) => new _Kms.Kms({
  projectId,
  credentials: {
    client_email: email,
    private_key: privateKey
  },
  key: {
    keyRingId,
    cryptoKeyId,
    cryptoKeyVersionId,
    locationId
  }
});

var _default = useKMS;
exports.default = _default;