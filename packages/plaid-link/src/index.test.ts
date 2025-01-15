import { usePlaidLink } from './';
jest.mock('./link');

describe('index', () => {
  test('should forward usePlaid as usePlaidLink', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mockUsePlaid = require('./link').usePlaid;
    expect(usePlaidLink).toBe(mockUsePlaid);
    mockUsePlaid.mockClear();
  });
});
