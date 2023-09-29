import useCloudLogger from './index';

class CloudLogger {}

jest.mock('./integration/CloudLogger', () => ({
  CloudLogger: jest.fn().mockImplementation(() => new CloudLogger()),
}));

describe('useCloudLogger', () => {
  it('should return cloud logger instance', () => {
    const logger = useCloudLogger('log');
    expect(logger).toBeInstanceOf(CloudLogger);
  });
});
