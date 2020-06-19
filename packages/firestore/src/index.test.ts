import getFirestoreDb from '.';

describe('getFirestoreDb', () => {
  test('should return a FirestoreDb instance', () => {
    const firestoreDb = getFirestoreDb('projectId', 'email', 'privateKey');
    expect(firestoreDb).toBeDefined();
  });
  test('should return a FirestoreDb instance from environment values', () => {
    const firestoreDb = getFirestoreDb();
    expect(firestoreDb).toBeDefined();
  });
});
