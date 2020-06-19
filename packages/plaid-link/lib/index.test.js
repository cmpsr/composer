"use strict";

var _ = require("./");

jest.mock("./link");
describe('index', () => {
  test('should forward usePlaid as usePlaidLink', () => {
    const mockUsePlaid = require("./link").usePlaid;

    expect(_.usePlaidLink).toBe(mockUsePlaid);
    mockUsePlaid.mockClear();
  });
});