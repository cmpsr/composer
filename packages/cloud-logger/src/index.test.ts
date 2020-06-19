import useCloudLogger, { CloudLogger } from '.';

describe('useCloudLogger', () => {
  it('should return cloud logger instance', () => {
    const logger = useCloudLogger('log');
    expect(logger).toBeInstanceOf(CloudLogger);
  });
});
