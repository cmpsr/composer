import { getVariantsByPageIds } from './getVariantsByPageIds';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: jest.fn(() => mockApolloClient),
}));

const mockGetVariantsByPageIdsContentful = jest.fn();
jest.mock('../utils/contentful', () => ({
  getVariantsByPageIds: (...params) => mockGetVariantsByPageIdsContentful(...params),
}));

describe('getVariantsByPageIds', () => {
  const pageIds = ['page1', 'page2'];
  const preview = true;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should get data from contentful with preview', async () => {
    await getVariantsByPageIds(pageIds, preview);
    expect(mockGetVariantsByPageIdsContentful).toBeCalledTimes(1);
    expect(mockGetVariantsByPageIdsContentful).toBeCalledWith(mockApolloClient, pageIds, preview);
  });

  test('should get data from contentful using default preview value', async () => {
    await getVariantsByPageIds(pageIds);
    expect(mockGetVariantsByPageIdsContentful).toBeCalledTimes(1);
    expect(mockGetVariantsByPageIdsContentful).toBeCalledWith(mockApolloClient, pageIds, false);
  });

  test('should return contentful data', async () => {
    const fakeVariants = ['variant1', 'variant2'];
    mockGetVariantsByPageIdsContentful.mockResolvedValueOnce(fakeVariants);
    const variants = await getVariantsByPageIds(pageIds);
    expect(variants).toStrictEqual(fakeVariants);
  });
});
