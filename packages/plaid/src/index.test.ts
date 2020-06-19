import { getPlaidInstance } from './';
import { Plaid } from './client';
jest.mock('plaid');

describe('index', () => {
  test('should create plaid instance', () => {
    const plaid = getPlaidInstance({ publicToken: 'public token' });
    expect(plaid).toBeInstanceOf(Plaid);
  });
});
