import { usePlaidLink } from './';
jest.mock('./link');

describe('index', () => {
  test('should forward usePlaid as usePlaidLink', () => {
    const mockUsePlaid = require('./link').usePlaid;
    expect(usePlaidLink).toBe(mockUsePlaid);
    mockUsePlaid.mockClear();
  });
});
