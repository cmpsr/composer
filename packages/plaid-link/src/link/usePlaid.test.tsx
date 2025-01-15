import { usePlaid } from './usePlaid';

const mockReturnValue = {
  open: jest.fn(),
  exit: jest.fn(),
  ready: true,
  error: undefined,
};

jest.mock('react-plaid-link', () => {
  return {
    usePlaidLink: jest.fn().mockImplementation(() => {
      return mockReturnValue;
    }),
  };
});

describe('usePlaid', () => {
  const clientName = 'client name';
  const product = ['transactions'];
  const onSuccess = jest.fn();
  const env = 'development';
  const countryCodes = ['us', 'es'];
  const publicKey = 'public_key';
  const onEvent = jest.fn();
  const onExit = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mockUsePlaidLink = require('react-plaid-link').usePlaidLink;

  afterEach(() => {
    mockUsePlaidLink.mockClear();
  });

  test('should call plaid link with default values', () => {
    usePlaid({ clientName, product, onSuccess });
    expect(mockUsePlaidLink).toBeCalledTimes(1);
    expect(mockUsePlaidLink).toBeCalledWith({
      clientName,
      product,
      env: 'production',
      publicKey: process.env.PLAID_PUBLIC_KEY,
      onSuccess,
      onEvent: undefined,
      onExit: undefined,
      countryCodes: undefined,
    });
  });

  test('should call plaid link with default values', () => {
    usePlaid({
      clientName,
      product,
      onSuccess,
      env,
      countryCodes,
      publicKey,
      onEvent,
      onExit,
    });
    expect(mockUsePlaidLink).toBeCalledTimes(1);
    expect(mockUsePlaidLink).toBeCalledWith({
      clientName,
      product,
      env,
      publicKey,
      onSuccess,
      onEvent,
      onExit,
      countryCodes,
    });
  });

  test('should forward plaid link return values', () => {
    mockUsePlaidLink.mockReturnValue(mockReturnValue);
    const { open, exit, ready, error } = usePlaid({
      clientName,
      product,
      onSuccess,
    });
    expect(open).toBe(mockReturnValue.open);
    expect(exit).toBe(mockReturnValue.exit);
    expect(ready).toBe(mockReturnValue.ready);
    expect(error).toBe(mockReturnValue.error);
  });
});
