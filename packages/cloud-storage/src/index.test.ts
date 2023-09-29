import useCloudStorage from './index';

class GoogleCloudStorage {}

jest.mock('./GoogleCloudStorage', () => ({
  GoogleCloudStorage: jest.fn().mockImplementation(() => new GoogleCloudStorage()),
}));

describe('useCloudStorage', () => {
  it('should return cloud logger instance', () => {
    const storage = useCloudStorage();
    expect(storage).toBeInstanceOf(GoogleCloudStorage);
  });
});
