"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Segment = void 0;

var _loadSnippet = require("./loadSnippet");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

class Segment {
  constructor(config) {
    if (!config.writeKey) {
      throw new Error('Segment writeKey is required for analytics');
    }

    const analytics = (0, _loadSnippet.loadSnippet)();
    analytics.load(config.writeKey);
  }

  identify = (userId, traits) => {
    window.analytics(userId, traits);
  };
  group = (groupId, traits) => {
    window.analytics.group(groupId, traits);
  };
  page = (pageName, traits = {}) => {
    const {
      category
    } = traits,
          rest = _objectWithoutProperties(traits, ["category"]);

    if (category) {
      window.analytics.page(category, pageName, rest);
    } else {
      window.analytics.page(pageName, rest);
    }
  };
  track = (eventName, traits) => {
    window.analytics.track(eventName, traits);
  };
  reset = () => {
    window.analytics.reset();
  };
}

exports.Segment = Segment;