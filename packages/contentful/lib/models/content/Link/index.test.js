"use strict";

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('Link', () => {
  // Use require instead of import because ES imports are readonly and the typescript compiler
  // complains when we try to override `default`.
  const renderFromComponentMap = require("../../../utils/renderFromComponentMap");

  const mockRenderFromComponentMap = jest.fn();
  renderFromComponentMap.default = mockRenderFromComponentMap;
  afterEach(() => mockRenderFromComponentMap.mockReset());
  const defaultProps = {
    sys: {
      id: 'id'
    },
    asset: {
      contentType: 'image',
      title: 'image',
      url: '/image'
    },
    title: 'title',
    route: {
      slug: '/'
    },
    type: 'image',
    embeddedType: 'primary-button',
    style: {},
    url: '/url',
    isEmbedded: true
  };
  it('should call renderFromComponentMap with appropriate components map', () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_.default, defaultProps));
    expect(mockRenderFromComponentMap).toBeCalledTimes(1);
    const componentMap = mockRenderFromComponentMap.mock.calls[0][0];
    expect(Object.keys(componentMap).length).toBe(5);
    expect(componentMap['default']).not.toBeNull();
    expect(componentMap['text']).not.toBeNull();
    expect(componentMap['image']).not.toBeNull();
    expect(componentMap['primary-button']).not.toBeNull();
    expect(componentMap['secondary-button']).not.toBeNull();
  });
  it('should call renderFromComponentMap with type if not embedded', () => {
    const props = _objectSpread(_objectSpread({}, defaultProps), {}, {
      isEmbedded: false
    });

    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_.default, props));
    expect(mockRenderFromComponentMap).toBeCalledTimes(1);
    const type = mockRenderFromComponentMap.mock.calls[0][1];
    expect(type).toBe('image');
  });
  it('should call renderFromComponentMap with embeddedType if embedded', () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_.default, defaultProps));
    expect(mockRenderFromComponentMap).toBeCalledTimes(1);
    const type = mockRenderFromComponentMap.mock.calls[0][1];
    expect(type).toBe('primary-button');
  });
});