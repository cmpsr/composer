"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkShortener = void 0;

var _constants = require("./constants");

var _isomorphicUnfetch = _interopRequireDefault(require("isomorphic-unfetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LinkShortener {
  constructor(config) {
    this.config = config;
  }

  async short(url) {
    const response = await (0, _isomorphicUnfetch.default)(_constants.SERVICE_URL + this.config.apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dynamicLinkInfo: {
          domainUriPrefix: this.config.domainUriPrefix,
          link: url
        }
      })
    });
    return response.json();
  }

}

exports.LinkShortener = LinkShortener;