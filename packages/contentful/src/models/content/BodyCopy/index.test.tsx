import React from "react";
import BodyCopy from ".";
import { render } from "@testing-library/react";

describe("BodyCopy", () => {
  // Use require instead of import because ES imports are readonly and the typescript compiler
  // complains when we try to override `default`.
  const renderFromComponentMap = require("utils/renderFromComponentMap");
  const mockRenderFromComponentMap = jest.fn();
  renderFromComponentMap.default = mockRenderFromComponentMap;
  afterEach(() => mockRenderFromComponentMap.mockReset());
  it("should call renderFromComponentMap with appropriate params", () => {
    const props = {
      sys: {
        id: "id",
      },
      type: "text",
      style: {},
      copy: "copy",
    };
    render(<BodyCopy {...props} />);
    expect(mockRenderFromComponentMap).toBeCalledTimes(1);
    const componentMap = mockRenderFromComponentMap.mock.calls[0][0];
    expect(Object.keys(componentMap).length).toBe(1);
    expect(componentMap["default"]).not.toBeNull();
    const type = mockRenderFromComponentMap.mock.calls[0][1];
    expect(type).toBe("text");
  });
});
