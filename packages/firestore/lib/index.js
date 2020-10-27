"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = require("./db");

const getFirestoreDb = (projectId = process.env.GCP_PROJECT_ID, email = process.env.GCP_EMAIL, privateKey = process.env.GCP_PRIVATE_KEY) => {
  return new _db.FirestoreDb({
    projectId,
    credentials: {
      client_email: email,
      private_key: privateKey
    }
  });
};

var _default = getFirestoreDb;
exports.default = _default;