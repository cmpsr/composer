import { getRoutesByVariantIds } from './getRoutesByVariantIds';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: jest.fn(() => mockApolloClient),
}));

const mockGetRoutesByVariantIdsContentful = jest.fn();
jest.mock('../utils/contentful', () => ({
  getRoutesByVariantIds: (...params) => mockGetRoutesByVariantIdsContentful(...params),
}));

describe('getRoutesByVariantIds', () => {
  const variantIds = ['variant1', 'variant2'];
  const preview = true;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should get data from contentful with preview', async () => {
    await getRoutesByVariantIds(variantIds, preview);
    expect(mockGetRoutesByVariantIdsContentful).toBeCalledTimes(1);
    expect(mockGetRoutesByVariantIdsContentful).toBeCalledWith(mockApolloClient, variantIds, preview);
  });

  test('should get data from contentful using default preview value', async () => {
    await getRoutesByVariantIds(variantIds);
    expect(mockGetRoutesByVariantIdsContentful).toBeCalledTimes(1);
    expect(mockGetRoutesByVariantIdsContentful).toBeCalledWith(mockApolloClient, variantIds, false);
  });

  test('should return contentful data', async () => {
    const fakeRoutes = ['route1', 'route2'];
    mockGetRoutesByVariantIdsContentful.mockResolvedValueOnce(fakeRoutes);
    const routes = await getRoutesByVariantIds(variantIds);
    expect(routes).toStrictEqual(fakeRoutes);
  });
});
