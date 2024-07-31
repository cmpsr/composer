import { getReplicasByPageIds } from './getReplicasByPageIds';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: jest.fn(() => mockApolloClient),
}));

const mockGetReplicasByPageIdsContentful = jest.fn();
jest.mock('../utils/contentful', () => ({
  getReplicasByPageIds: (...params) => mockGetReplicasByPageIdsContentful(...params),
}));

describe('getReplicasByPageIds', () => {
  const pageIds = ['page1', 'page2'];
  const preview = true;
  const domain = 'example.com';

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.SITE_DOMAIN = 'default.com';
  });

  test('should get data from contentful with preview and domain', async () => {
    await getReplicasByPageIds(pageIds, preview, domain);
    expect(mockGetReplicasByPageIdsContentful).toBeCalledTimes(1);
    expect(mockGetReplicasByPageIdsContentful).toBeCalledWith(mockApolloClient, pageIds, preview, domain);
  });

  test('should get data from contentful using default preview value and domain', async () => {
    await getReplicasByPageIds(pageIds);
    expect(mockGetReplicasByPageIdsContentful).toBeCalledTimes(1);
    expect(mockGetReplicasByPageIdsContentful).toBeCalledWith(
      mockApolloClient,
      pageIds,
      false,
      process.env.SITE_DOMAIN
    );
  });

  test('should use provided domain over default', async () => {
    await getReplicasByPageIds(pageIds, false, 'custom.com');
    expect(mockGetReplicasByPageIdsContentful).toBeCalledTimes(1);
    expect(mockGetReplicasByPageIdsContentful).toBeCalledWith(mockApolloClient, pageIds, false, 'custom.com');
  });

  test('should return contentful data', async () => {
    const fakeReplicas = ['replica1', 'replica2'];
    mockGetReplicasByPageIdsContentful.mockResolvedValueOnce(fakeReplicas);
    const replicas = await getReplicasByPageIds(pageIds);
    expect(replicas).toStrictEqual(fakeReplicas);
  });
});
