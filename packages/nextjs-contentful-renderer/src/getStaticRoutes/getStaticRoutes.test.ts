import { getStaticRoutes } from '.';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: () => mockApolloClient,
}));

const mockGetStaticRoutes = jest.fn();
jest.mock('../utils/contentful', () => ({
  getStaticRoutes: (...params) => mockGetStaticRoutes(...params),
}));

describe('getStaticRoutes', () => {
  const preview = true;
  const domain = 'domain';

  test('should get data from contentful', async () => {
    await getStaticRoutes(domain, preview);
    expect(mockGetStaticRoutes).toBeCalledTimes(1);
    expect(mockGetStaticRoutes).toBeCalledWith(mockApolloClient, preview, domain);
  });
  test('should get data from contentful using default values', async () => {
    await getStaticRoutes();
    expect(mockGetStaticRoutes).toBeCalledTimes(1);
    expect(mockGetStaticRoutes).toBeCalledWith(mockApolloClient, false, process.env.SITE_DOMAIN);
  });
  test('should return contentful data', async () => {
    const fakeRoutes = [
      { id: 'route_id_1', slug: 'slug_1', variants: [] },
      { id: 'route_id_2', slug: 'slug_2', variants: [] },
    ];
    mockGetStaticRoutes.mockResolvedValueOnce(fakeRoutes);
    const routes = await getStaticRoutes();
    expect(routes).toStrictEqual(fakeRoutes);
  });
});
