import { getPagesByBlockIds } from './getPagesByBlockIds';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: jest.fn(() => mockApolloClient),
}));

const mockGetPagesByBlockIdsContentful = jest.fn();
jest.mock('../utils/contentful', () => ({
  getPagesByBlockIds: (...params) => mockGetPagesByBlockIdsContentful(...params),
}));

describe('getPagesByBlockIds', () => {
  const blockIds = ['block1', 'block2'];
  const preview = true;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should get data from contentful with preview', async () => {
    await getPagesByBlockIds(blockIds, preview);
    expect(mockGetPagesByBlockIdsContentful).toBeCalledTimes(1);
    expect(mockGetPagesByBlockIdsContentful).toBeCalledWith(mockApolloClient, blockIds, preview);
  });

  test('should get data from contentful using default preview value', async () => {
    await getPagesByBlockIds(blockIds);
    expect(mockGetPagesByBlockIdsContentful).toBeCalledTimes(1);
    expect(mockGetPagesByBlockIdsContentful).toBeCalledWith(mockApolloClient, blockIds, false);
  });

  test('should return contentful data', async () => {
    const fakePages = ['page1', 'page2'];
    mockGetPagesByBlockIdsContentful.mockResolvedValueOnce(fakePages);
    const pages = await getPagesByBlockIds(blockIds);
    expect(pages).toStrictEqual(fakePages);
  });
});
