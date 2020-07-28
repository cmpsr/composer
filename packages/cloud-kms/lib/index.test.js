"use strict";

var _ = _interopRequireDefault(require("."));

var _Kms = require("./Kms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('useKMS', () => {
  it('should return Kms instance', () => {
    const kms = (0, _.default)({
      keyRingId: 'key_ring_id'
    });
    expect(kms).toBeInstanceOf(_Kms.Kms);
  });
});