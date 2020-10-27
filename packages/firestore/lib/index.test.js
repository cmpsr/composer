"use strict";

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getFirestoreDb', () => {
  test('should return a FirestoreDb instance', () => {
    const firestoreDb = (0, _.default)('projectId', 'email', 'privateKey');
    expect(firestoreDb).toBeDefined();
  });
  test('should return a FirestoreDb instance from environment values', () => {
    const firestoreDb = (0, _.default)();
    expect(firestoreDb).toBeDefined();
  });
});