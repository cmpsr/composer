"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAccessToken = void 0;

var _index = require("constants/index");

const fetchAccessToken = async identity => {
  return await fetch(_index.TOKEN_GENERATOR_URL, {
    method: "POST",
    body: JSON.stringify({
      identity: identity,
      device: "browser"
    })
  }).then(response => response.json()).then(result => result.token).catch(error => {
    console.log("fetchAccessToken", error);
  });
};

exports.fetchAccessToken = fetchAccessToken;