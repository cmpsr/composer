"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GA = void 0;

var _loadGA = require("./loadGA");

class GA {
  constructor(config) {
    if (!config.trackingId) {
      throw new Error('Segment writeKey is required for analytics');
    }

    const ga = (0, _loadGA.loadGA)();
    ga('create', config.trackingId, config.cookieDomain || 'auto');
  }

  identify = userId => {
    window.ga('set', 'userId', userId);
    window.ga('send', 'event', 'authentication', 'user-id available');
  }; // Not supported
  // eslint-disable-next-line @typescript-eslint/no-empty-function

  group = () => {};
  page = (pageName, traits = {}) => {
    window.ga('send', {
      hitType: 'pageview',
      page: traits.path || location.pathname,
      title: pageName
    });
  };
  track = (eventName, traits = {}) => {
    window.ga('send', {
      hitType: 'event',
      eventCategory: traits.category || 'None',
      eventAction: eventName
    });
  }; // Not supported
  // eslint-disable-next-line @typescript-eslint/no-empty-function

  reset = () => {};
}

exports.GA = GA;