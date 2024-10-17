import { getBlocksByModelIds } from './getBlocksByModelIds';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: jest.fn(() => mockApolloClient),
}));

const mockGetBlocksByModelIdsContentful = jest.fn();
jest.mock('../utils/contentful', () => ({
  getBlocksByModelIds: (...params) => mockGetBlocksByModelIdsContentful(...params),
}));

describe('getBlocksByModelIds', () => {
  const modelIds = ['model1', 'model2'];
  const preview = true;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should get data from contentful with preview', async () => {
    await getBlocksByModelIds(modelIds, preview);
    expect(mockGetBlocksByModelIdsContentful).toBeCalledTimes(1);
    expect(mockGetBlocksByModelIdsContentful).toBeCalledWith(mockApolloClient, modelIds, preview);
  });

  test('should get data from contentful using default preview value', async () => {
    await getBlocksByModelIds(modelIds);
    expect(mockGetBlocksByModelIdsContentful).toBeCalledTimes(1);
    expect(mockGetBlocksByModelIdsContentful).toBeCalledWith(mockApolloClient, modelIds, false);
  });

  test('should return contentful data', async () => {
    const fakeBlocks = ['block1', 'block2'];
    mockGetBlocksByModelIdsContentful.mockResolvedValueOnce(fakeBlocks);
    const blocks = await getBlocksByModelIds(modelIds);
    expect(blocks).toStrictEqual(fakeBlocks);
  });
});
