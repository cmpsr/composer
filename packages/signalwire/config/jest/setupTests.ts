// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

afterEach(() => {
  jest.clearAllMocks();
});

jest.mock('@signalwire/core', () => {
  return {
    ...(jest.requireActual('@signalwire/core') as any),
    logger: {
      error: jest.fn(),
      warn: jest.fn(),
      log: jest.fn(),
      info: jest.fn(),
      debug: jest.fn(),
      trace: jest.fn(),
      levels: jest.fn(),
      setLevel: jest.fn(),
    },
  }
})
