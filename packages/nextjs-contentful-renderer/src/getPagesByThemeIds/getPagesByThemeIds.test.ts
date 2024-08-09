import { getPagesByThemeIds } from './getPagesByThemeIds';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: jest.fn(() => mockApolloClient),
}));

const mockGetPagesByThemeIdsContentful = jest.fn();
jest.mock('../utils/contentful', () => ({
  getPagesByThemeIds: (...params) => mockGetPagesByThemeIdsContentful(...params),
}));

describe('getPagesByThemeIds', () => {
  const themeIds = ['theme1', 'theme2'];
  const preview = true;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should get data from contentful with preview', async () => {
    await getPagesByThemeIds(themeIds, preview);
    expect(mockGetPagesByThemeIdsContentful).toBeCalledTimes(1);
    expect(mockGetPagesByThemeIdsContentful).toBeCalledWith(mockApolloClient, themeIds, preview);
  });

  test('should get data from contentful using default preview value', async () => {
    await getPagesByThemeIds(themeIds);
    expect(mockGetPagesByThemeIdsContentful).toBeCalledTimes(1);
    expect(mockGetPagesByThemeIdsContentful).toBeCalledWith(mockApolloClient, themeIds, false);
  });

  test('should return contentful data', async () => {
    const fakePages = ['page1', 'page2'];
    mockGetPagesByThemeIdsContentful.mockResolvedValueOnce(fakePages);
    const pages = await getPagesByThemeIds(themeIds);
    expect(pages).toStrictEqual(fakePages);
  });
});
