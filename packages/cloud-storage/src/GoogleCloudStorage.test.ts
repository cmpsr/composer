import { GoogleCloudStorage } from '.';

const mockUpload = jest.fn().mockImplementation(() => {
  return [
    { name: 'remoteFilename' },
    { selfLink: 'link to self', mediaLink: 'link to media', md5Hash: 'md5' },
  ];
});
const mockDownload = jest.fn();
const mockDelete = jest.fn();
const mockFile = jest.fn().mockImplementation(() => {
  return {
    download: mockDownload,
    delete: mockDelete,
  };
});
const mockBucket = jest.fn().mockImplementation(() => {
  return { upload: mockUpload, file: mockFile };
});
jest.mock('@google-cloud/storage', () => {
  return {
    Storage: jest.fn().mockImplementation(() => {
      return { bucket: mockBucket };
    }),
  };
});

describe('GoogleCloudStorage', () => {
  const bucketName = 'bucket';
  const config = {
    projectId: 'projectId',
    credentials: {
      client_email: 'someone@server.com',
      private_key: 'private key',
    },
  };

  beforeEach(() => {
    mockUpload.mockClear();
    mockBucket.mockClear();
    mockFile.mockClear();
    mockDownload.mockClear();
    mockDelete.mockClear();
  });

  test('should initialize client with given config', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const storageModule = require('@google-cloud/storage');
    new GoogleCloudStorage(config);
    expect(storageModule.Storage).toBeCalledTimes(1);
    expect(storageModule.Storage).toBeCalledWith(config);
  });

  describe('upload', () => {
    const fileAtPath = 'path/to/file';

    test('should upload file', async () => {
      const storage = new GoogleCloudStorage(config);
      const returnedFilename = await storage.upload(fileAtPath, bucketName);
      expect(mockBucket).toBeCalledTimes(1);
      expect(mockBucket).toBeCalledWith(bucketName);
      expect(mockUpload).toBeCalledTimes(1);
      expect(mockUpload).toBeCalledWith(fileAtPath, undefined);
      expect(returnedFilename).toStrictEqual({
        name: 'remoteFilename',
        selfLink: 'link to self',
        mediaLink: 'link to media',
        md5Hash: 'md5',
      });
    });
    test('should set destination', async () => {
      const storage = new GoogleCloudStorage(config);
      const destination = 'remoteFilename';
      await storage.upload(fileAtPath, bucketName, { destination });
      expect(mockUpload).toBeCalledWith(fileAtPath, { destination });
    });
    test('should set public', async () => {
      const storage = new GoogleCloudStorage(config);
      const isPublic = true;
      await storage.upload(fileAtPath, bucketName, { public: isPublic });
      expect(mockUpload).toBeCalledWith(fileAtPath, {
        public: isPublic,
      });
    });
    test('should set kms key name', async () => {
      const storage = new GoogleCloudStorage(config);
      const kmsKeyName = 'key-name';
      await storage.upload(fileAtPath, bucketName, { kmsKeyName });
      expect(mockUpload).toBeCalledWith(fileAtPath, { kmsKeyName });
    });
    test('should set compression', async () => {
      const storage = new GoogleCloudStorage(config);
      const gzip = 'auto';
      await storage.upload(fileAtPath, bucketName, { gzip });
      expect(mockUpload).toBeCalledWith(fileAtPath, { gzip });
    });
    test('should set cache control', async () => {
      const storage = new GoogleCloudStorage(config);
      const cacheControl = 'public, max-age=31536000';
      await storage.upload(fileAtPath, bucketName, {
        metadata: { cacheControl },
      });
      expect(mockUpload).toBeCalledWith(fileAtPath, {
        metadata: { cacheControl },
      });
    });
  });

  describe('download', () => {
    const file = 'remoteFile';
    const toFile = 'localFile';

    test('should download file', async () => {
      const storage = new GoogleCloudStorage(config);
      await storage.download(file, bucketName, toFile);
      expect(mockBucket).toBeCalledTimes(1);
      expect(mockBucket).toBeCalledWith(bucketName);
      expect(mockFile).toBeCalledTimes(1);
      expect(mockFile).toBeCalledWith(file, undefined);
      expect(mockDownload).toBeCalledTimes(1);
      expect(mockDownload).toBeCalledWith({ destination: toFile });
    });
    test('should use encryption key name', async () => {
      const kmsKeyName = 'key-name';
      const storage = new GoogleCloudStorage(config);
      await storage.download(file, bucketName, toFile, kmsKeyName);
      expect(mockFile).toBeCalledTimes(1);
      expect(mockFile).toBeCalledWith(file, { kmsKeyName });
    });
    test('should return local file name', async () => {
      const storage = new GoogleCloudStorage(config);
      const result = await storage.download(file, bucketName, toFile);
      expect(result).toBe(toFile);
    });
  });

  describe('delete', () => {
    const file = 'remoteFile';

    test('should delete file', async () => {
      const storage = new GoogleCloudStorage(config);
      await storage.delete(file, bucketName);
      expect(mockBucket).toBeCalledTimes(1);
      expect(mockBucket).toBeCalledWith(bucketName);
      expect(mockFile).toBeCalledTimes(1);
      expect(mockFile).toBeCalledWith(file);
      expect(mockDelete).toBeCalledTimes(1);
      expect(mockDelete).toBeCalledWith();
    });
  });
});
