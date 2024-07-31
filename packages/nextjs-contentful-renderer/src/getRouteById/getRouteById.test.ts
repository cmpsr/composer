import { getRouteById } from './getRouteById';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: jest.fn(() => mockApolloClient),
}));

const mockGetRouteByIdContentful = jest.fn();
jest.mock('../utils/contentful', () => ({
  getRouteById: (...params) => mockGetRouteByIdContentful(...params),
}));

describe('getRouteById', () => {
  const routeId = 'route1';
  const preview = true;
  const domain = 'example.com';

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.SITE_DOMAIN = 'default.com';
  });

  test('should get data from contentful with preview and domain', async () => {
    await getRouteById(routeId, preview, domain);
    expect(mockGetRouteByIdContentful).toBeCalledTimes(1);
    expect(mockGetRouteByIdContentful).toBeCalledWith(mockApolloClient, routeId, preview, domain);
  });

  test('should get data from contentful using default preview value and domain', async () => {
    await getRouteById(routeId);
    expect(mockGetRouteByIdContentful).toBeCalledTimes(1);
    expect(mockGetRouteByIdContentful).toBeCalledWith(mockApolloClient, routeId, false, process.env.SITE_DOMAIN);
  });

  test('should use provided domain over default', async () => {
    await getRouteById(routeId, false, 'custom.com');
    expect(mockGetRouteByIdContentful).toBeCalledTimes(1);
    expect(mockGetRouteByIdContentful).toBeCalledWith(mockApolloClient, routeId, false, 'custom.com');
  });

  test('should return contentful data', async () => {
    const fakeRoute = { id: 'route1', slug: '/test' };
    mockGetRouteByIdContentful.mockResolvedValueOnce(fakeRoute);
    const route = await getRouteById(routeId);
    expect(route).toStrictEqual(fakeRoute);
  });
});
