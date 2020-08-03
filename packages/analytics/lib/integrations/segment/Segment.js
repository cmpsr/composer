"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Segment = void 0;

var _loadSnippet = require("./loadSnippet");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Segment {
  constructor(config) {
    _defineProperty(this, "identify", (userId, traits) => {
      window.analytics.identify(userId, traits);
    });

    _defineProperty(this, "group", (groupId, traits) => {
      window.analytics.group(groupId, traits);
    });

    _defineProperty(this, "page", (pageName, traits = {}) => {
      const {
        category
      } = traits,
            rest = _objectWithoutProperties(traits, ["category"]);

      if (category) {
        window.analytics.page(category, pageName, rest);
      } else {
        window.analytics.page(pageName, rest);
      }
    });

    _defineProperty(this, "track", (eventName, traits) => {
      window.analytics.track(eventName, traits);
    });

    _defineProperty(this, "reset", () => {
      window.analytics.reset();
    });

    if (!config.writeKey) {
      throw new Error('Segment writeKey is required for analytics');
    }

    const analytics = (0, _loadSnippet.loadSnippet)();
    analytics.load(config.writeKey);
  }

}

exports.Segment = Segment;