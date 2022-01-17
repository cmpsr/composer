"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._AnalyticsProvider = exports.AnalyticsProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _AnalyticsContext = require("./AnalyticsContext");

var _integrations = require("./integrations");

var _uuid = require("uuid");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const supportedIntegrations = {
  ga: _integrations.GA,
  segment: _integrations.Segment
};
const ssr = !(typeof window !== 'undefined' && window.document && window.document.createElement);
const COOKIE_NAME = 'composer_anonymous_id';

const proxyToIntegrations = (integrations, func, args) => {
  integrations.forEach(integration => // eslint-disable-next-line prefer-spread
  integration[func].apply(integration, args));
}; // export for testing


const _AnalyticsProvider = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const anonymousId = _react.default.useMemo(() => {
    const id = _jsCookie.default.get(COOKIE_NAME) || (0, _uuid.v1)();

    _jsCookie.default.set(COOKIE_NAME, id, {
      expires: 365
    });

    return id;
  }, []);

  const integrations = _react.default.useMemo(() => {
    const enabledIntegrations = Object.keys(supportedIntegrations).filter(integration => {
      if (props[integration]) {
        return true;
      }

      return false;
    });
    return enabledIntegrations.map(integration => {
      return new supportedIntegrations[integration](props[integration]);
    });
  }, []);

  const context = _react.default.useMemo(() => {
    return {
      identify: function () {
        proxyToIntegrations(integrations, 'identify', Array.from(arguments));
      },
      group: function () {
        proxyToIntegrations(integrations, 'group', Array.from(arguments));
      },
      page: function () {
        proxyToIntegrations(integrations, 'page', Array.from(arguments));
      },
      track: function () {
        proxyToIntegrations(integrations, 'track', Array.from(arguments));
      },
      user: () => ({
        anonymousId
      }),
      reset: function () {
        proxyToIntegrations(integrations, 'reset', Array.from(arguments));
      }
    };
  }, [anonymousId]);

  return /*#__PURE__*/_react.default.createElement(_AnalyticsContext.AnalyticsContext.Provider, {
    value: context
  }, children);
};

exports._AnalyticsProvider = _AnalyticsProvider;

const AnalyticsProvider = props => {
  // Analytics is browser only. Just render what's in it.
  if (ssr) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.children);
  }

  return /*#__PURE__*/_react.default.createElement(_AnalyticsProvider, props);
};

exports.AnalyticsProvider = AnalyticsProvider;