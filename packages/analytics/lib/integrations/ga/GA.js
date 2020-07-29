"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GA = void 0;

var _loadGA = require("./loadGA");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GA {
  constructor(config) {
    _defineProperty(this, "identify", userId => {
      window.ga('set', 'userId', userId);
      window.ga('send', 'event', 'authentication', 'user-id available');
    });

    _defineProperty(this, "group", () => {});

    _defineProperty(this, "page", (pageName, traits = {}) => {
      window.ga('send', {
        hitType: 'pageview',
        page: traits.path || location.pathname,
        title: pageName
      });
    });

    _defineProperty(this, "track", (eventName, traits = {}) => {
      window.ga('send', {
        hitType: 'event',
        eventCategory: traits.category || 'None',
        eventAction: eventName
      });
    });

    _defineProperty(this, "reset", () => {});

    if (!config.trackingId) {
      throw new Error('Segment writeKey is required for analytics');
    }

    const ga = (0, _loadGA.loadGA)();
    ga('create', config.trackingId, config.cookieDomain || 'auto');
  }

}

exports.GA = GA;