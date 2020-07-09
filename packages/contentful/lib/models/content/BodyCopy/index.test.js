"use strict";

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("BodyCopy", () => {
  // Use require instead of import because ES imports are readonly and the typescript compiler
  // complains when we try to override `default`.
  const renderFromComponentMap = require("../../../utils/renderFromComponentMap");

  const mockRenderFromComponentMap = jest.fn();
  renderFromComponentMap.default = mockRenderFromComponentMap;
  afterEach(() => mockRenderFromComponentMap.mockReset());
  it("should call renderFromComponentMap with appropriate params", () => {
    const props = {
      sys: {
        id: "id"
      },
      type: "text",
      style: {},
      copy: "copy"
    };
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_.default, props));
    expect(mockRenderFromComponentMap).toBeCalledTimes(1);
    const componentMap = mockRenderFromComponentMap.mock.calls[0][0];
    expect(Object.keys(componentMap).length).toBe(1);
    expect(componentMap["default"]).not.toBeNull();
    const type = mockRenderFromComponentMap.mock.calls[0][1];
    expect(type).toBe("text");
  });
});