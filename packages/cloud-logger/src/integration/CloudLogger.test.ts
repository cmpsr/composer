import { CloudLogger } from './CloudLogger';
import { Severity } from './types';

const fakeEntry = {};
const mockEntry = jest.fn().mockReturnValue(fakeEntry);
const mockWrite = jest.fn();
const mockCreateLog = jest.fn().mockImplementation(() => {
  return {
    entry: mockEntry,
    write: mockWrite,
  };
});
jest.mock('@google-cloud/logging', () => {
  return {
    Logging: jest.fn().mockImplementation(() => {
      return {
        log: mockCreateLog,
      };
    }),
  };
});

describe('CloudLogger', () => {
  const config = {
    projectId: 'projectId',
    credentials: {
      client_email: 'someone@server.com',
      private_key: 'private key',
    },
    logName: 'log_name',
  };

  it('should instantiate google cloud logging', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const cloudLogging = require('@google-cloud/logging');
    new CloudLogger(config);
    expect(cloudLogging.Logging).toBeCalledTimes(1);
    expect(cloudLogging.Logging).toBeCalledWith(config);
    expect(mockCreateLog).toBeCalledTimes(1);
    expect(mockCreateLog).toBeCalledWith(config.logName);
  });

  describe('log', () => {
    const message = 'message to log';
    const severity = Severity.DEBUG;

    it('should create entry', async () => {
      const logger = new CloudLogger(config);
      await logger.log(message, severity);
      expect(mockEntry).toBeCalledTimes(1);
      expect(mockEntry).toBeCalledWith(
        { resource: { type: 'global' }, severity },
        message,
      );
    });
    it('should write entry', async () => {
      const logger = new CloudLogger(config);
      await logger.log(message, severity);
      expect(mockWrite).toBeCalledTimes(1);
      expect(mockWrite).toBeCalledWith(fakeEntry);
    });
  });
});
