"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CloudLogger: true
};
Object.defineProperty(exports, "CloudLogger", {
  enumerable: true,
  get: function () {
    return _CloudLogger.CloudLogger;
  }
});
exports.default = void 0;

var _CloudLogger = require("./integration/CloudLogger");

var _types = require("./integration/types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

const useCloudLogger = (logName, projectId = process.env.GCP_PROJECT_ID, email = process.env.GCP_EMAIL, privateKey = process.env.GCP_PRIVATE_KEY) => {
  return new _CloudLogger.CloudLogger({
    projectId,
    credentials: {
      client_email: email,
      private_key: privateKey
    },
    logName
  });
};

var _default = useCloudLogger;
exports.default = _default;