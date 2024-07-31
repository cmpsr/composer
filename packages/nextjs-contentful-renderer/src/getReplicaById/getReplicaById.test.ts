import { getReplicaById } from './getReplicaById';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: jest.fn(() => mockApolloClient),
}));

const mockGetReplicaByIdContentful = jest.fn();
jest.mock('../utils/contentful', () => ({
  getReplicaById: (...params) => mockGetReplicaByIdContentful(...params),
}));

describe('getReplicaById', () => {
  const routeId = 'route1';
  const preview = true;
  const domain = 'example.com';

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.SITE_DOMAIN = 'default.com';
  });

  test('should get data from contentful with preview and domain', async () => {
    await getReplicaById(routeId, preview, domain);
    expect(mockGetReplicaByIdContentful).toBeCalledTimes(1);
    expect(mockGetReplicaByIdContentful).toBeCalledWith(mockApolloClient, routeId, preview, domain);
  });

  test('should get data from contentful using default preview value and domain', async () => {
    await getReplicaById(routeId);
    expect(mockGetReplicaByIdContentful).toBeCalledTimes(1);
    expect(mockGetReplicaByIdContentful).toBeCalledWith(mockApolloClient, routeId, false, process.env.SITE_DOMAIN);
  });

  test('should use provided domain over default', async () => {
    await getReplicaById(routeId, false, 'custom.com');
    expect(mockGetReplicaByIdContentful).toBeCalledTimes(1);
    expect(mockGetReplicaByIdContentful).toBeCalledWith(mockApolloClient, routeId, false, 'custom.com');
  });

  test('should return contentful data', async () => {
    const fakeReplica = { id: 'replica1', slug: '/test' };
    mockGetReplicaByIdContentful.mockResolvedValueOnce(fakeReplica);
    const replica = await getReplicaById(routeId);
    expect(replica).toStrictEqual(fakeReplica);
  });
});
