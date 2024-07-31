import { getPagesByBlockIds } from './getPagesByBlockIds';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

describe('getPagesByBlockIds', () => {
  const mockQuery = jest.fn();
  const mockApolloClient: ApolloClient<NormalizedCacheObject> = {
    query: mockQuery,
  } as any;

  const blockIds = ['block1', 'block2'];
  const preview = true;

  beforeEach(() => {
    mockQuery.mockReset();
  });

  test('should query Apollo client with correct parameters', async () => {
    mockQuery.mockResolvedValue({
      data: {
        blockCollection: {
          items: [],
        },
      },
    });

    await getPagesByBlockIds(mockApolloClient, blockIds, preview);

    expect(mockQuery).toHaveBeenCalledTimes(1);
    expect(mockQuery).toHaveBeenCalledWith({
      query: expect.anything(),
      variables: {
        ids: blockIds,
        preview,
      },
    });
  });

  test('should return unique page IDs from the query result', async () => {
    mockQuery.mockResolvedValue({
      data: {
        blockCollection: {
          items: [
            {
              sys: { id: 'block1' },
              linkedFrom: {
                pageCollection: {
                  items: [{ sys: { id: 'page1' } }, { sys: { id: 'page2' } }],
                },
              },
            },
            {
              sys: { id: 'block2' },
              linkedFrom: {
                pageCollection: {
                  items: [{ sys: { id: 'page2' } }, { sys: { id: 'page3' } }],
                },
              },
            },
          ],
        },
      },
    });

    const result = await getPagesByBlockIds(mockApolloClient, blockIds, preview);

    expect(result).toEqual(['page1', 'page2', 'page3']);
  });

  test('should return an empty array when no pages are found', async () => {
    mockQuery.mockResolvedValue({
      data: {
        blockCollection: {
          items: [
            {
              sys: { id: 'block1' },
              linkedFrom: {
                pageCollection: {
                  items: [],
                },
              },
            },
            {
              sys: { id: 'block2' },
              linkedFrom: {
                pageCollection: {
                  items: [],
                },
              },
            },
          ],
        },
      },
    });

    const result = await getPagesByBlockIds(mockApolloClient, blockIds, preview);

    expect(result).toEqual([]);
  });

  test('should handle empty response gracefully', async () => {
    mockQuery.mockResolvedValue({
      data: {
        blockCollection: {
          items: [],
        },
      },
    });

    const result = await getPagesByBlockIds(mockApolloClient, blockIds, preview);

    expect(result).toEqual([]);
  });
});
