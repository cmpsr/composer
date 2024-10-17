import { getPagesByThemeIds } from './getPagesByThemeIds';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

describe('getPagesByThemeIds', () => {
  const mockQuery = jest.fn();
  const mockApolloClient: ApolloClient<NormalizedCacheObject> = {
    query: mockQuery,
  } as any;

  const themeIds = ['theme1', 'theme2'];
  const preview = true;

  beforeEach(() => {
    mockQuery.mockReset();
  });

  test('should query Apollo client with correct parameters', async () => {
    mockQuery.mockResolvedValue({
      data: {
        pageCollection: {
          items: [],
        },
      },
    });

    await getPagesByThemeIds(mockApolloClient, themeIds, preview);

    expect(mockQuery).toHaveBeenCalledTimes(1);
    expect(mockQuery).toHaveBeenCalledWith({
      query: expect.anything(),
      variables: {
        ids: themeIds,
        preview,
      },
    });
  });

  test('should return unique page IDs from the query result', async () => {
    mockQuery.mockResolvedValue({
      data: {
        pageCollection: {
          items: [
            { sys: { id: 'page1' } },
            { sys: { id: 'page2' } },
            { sys: { id: 'page2' } },
            { sys: { id: 'page3' } },
          ],
        },
      },
    });

    const result = await getPagesByThemeIds(mockApolloClient, themeIds, preview);

    expect(result).toEqual(['page1', 'page2', 'page3']);
  });

  test('should return an empty array when no pages are found', async () => {
    mockQuery.mockResolvedValue({
      data: {
        pageCollection: {
          items: [],
        },
      },
    });

    const result = await getPagesByThemeIds(mockApolloClient, themeIds, preview);

    expect(result).toEqual([]);
  });

  test('should handle empty response gracefully', async () => {
    mockQuery.mockResolvedValue({
      data: {
        pageCollection: {
          items: [],
        },
      },
    });

    const result = await getPagesByThemeIds(mockApolloClient, themeIds, preview);

    expect(result).toEqual([]);
  });
});
