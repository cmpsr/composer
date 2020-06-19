import useCloudStorage, { GoogleCloudStorage } from '.';

describe('useCloudStorage', () => {
  it('should return cloud logger instance', () => {
    const storage = useCloudStorage();
    expect(storage).toBeInstanceOf(GoogleCloudStorage);
  });
});
