import { getPagesByNavbarIds } from './getPagesByNavbarIds';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: jest.fn(() => mockApolloClient),
}));

const mockGetPagesByNavbarIdsContentful = jest.fn();
jest.mock('../utils/contentful', () => ({
  getPagesByNavbarIds: (...params) => mockGetPagesByNavbarIdsContentful(...params),
}));

describe('getPagesByNavbarIds', () => {
  const themeIds = ['theme1', 'theme2'];
  const preview = true;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should get data from contentful with preview', async () => {
    await getPagesByNavbarIds(themeIds, preview);
    expect(mockGetPagesByNavbarIdsContentful).toBeCalledTimes(1);
    expect(mockGetPagesByNavbarIdsContentful).toBeCalledWith(mockApolloClient, themeIds, preview);
  });

  test('should get data from contentful using default preview value', async () => {
    await getPagesByNavbarIds(themeIds);
    expect(mockGetPagesByNavbarIdsContentful).toBeCalledTimes(1);
    expect(mockGetPagesByNavbarIdsContentful).toBeCalledWith(mockApolloClient, themeIds, false);
  });

  test('should return contentful data', async () => {
    const fakePages = ['page1', 'page2'];
    mockGetPagesByNavbarIdsContentful.mockResolvedValueOnce(fakePages);
    const pages = await getPagesByNavbarIds(themeIds);
    expect(pages).toStrictEqual(fakePages);
  });
});
