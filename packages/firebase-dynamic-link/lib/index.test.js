"use strict";

var _ = _interopRequireDefault(require("."));

var _LinkShortener = require("./integration/LinkShortener");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getLinkShortener', () => {
  it('should return link shortener instance', () => {
    expect((0, _.default)('', '')).toBeInstanceOf(_LinkShortener.LinkShortener);
  });
});