"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _GoogleCloudStorage = require("./GoogleCloudStorage");

Object.keys(_GoogleCloudStorage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _GoogleCloudStorage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _GoogleCloudStorage[key];
    }
  });
});

const useCloudStorage = (projectId = process.env.GCP_PROJECT_ID, email = process.env.GCP_EMAIL, privateKey = process.env.GCP_PRIVATE_KEY) => {
  return new _GoogleCloudStorage.GoogleCloudStorage({
    projectId,
    credentials: {
      client_email: email,
      private_key: privateKey
    }
  });
};

var _default = useCloudStorage;
exports.default = _default;