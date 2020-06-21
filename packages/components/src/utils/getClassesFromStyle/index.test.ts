import { getClassesFromStyle } from ".";

const input = {
  background: {
    default: {
      bg: "fill-primary-25",
    },
    sm: {
      bg: "fill-primary-50",
    },
    md: {
      bg: "fill-primary-75",
    },
    lg: {
      bg: "fill-primary-100",
    },
  },
};
describe("getClassesFromStyle", () => {
  it("should return a string of with the correct value", () => {
    const result = getClassesFromStyle(input.background);
    expect(result).toEqual(
      "bg-fill-primary-25 sm:bg-fill-primary-50 md:bg-fill-primary-75 lg:bg-fill-primary-100"
    );
  });
});
