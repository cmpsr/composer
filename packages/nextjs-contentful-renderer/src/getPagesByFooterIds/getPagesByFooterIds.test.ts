import { getPagesByFooterIds } from './getPagesByFooterIds';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: jest.fn(() => mockApolloClient),
}));

const mockGetPagesByFooterIdsContentful = jest.fn();
jest.mock('../utils/contentful', () => ({
  getPagesByFooterIds: (...params) => mockGetPagesByFooterIdsContentful(...params),
}));

describe('getPagesByFooterIds', () => {
  const themeIds = ['theme1', 'theme2'];
  const preview = true;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should get data from contentful with preview', async () => {
    await getPagesByFooterIds(themeIds, preview);
    expect(mockGetPagesByFooterIdsContentful).toBeCalledTimes(1);
    expect(mockGetPagesByFooterIdsContentful).toBeCalledWith(mockApolloClient, themeIds, preview);
  });

  test('should get data from contentful using default preview value', async () => {
    await getPagesByFooterIds(themeIds);
    expect(mockGetPagesByFooterIdsContentful).toBeCalledTimes(1);
    expect(mockGetPagesByFooterIdsContentful).toBeCalledWith(mockApolloClient, themeIds, false);
  });

  test('should return contentful data', async () => {
    const fakePages = ['page1', 'page2'];
    mockGetPagesByFooterIdsContentful.mockResolvedValueOnce(fakePages);
    const pages = await getPagesByFooterIds(themeIds);
    expect(pages).toStrictEqual(fakePages);
  });
});
