import { getBlocksByModelIds } from './getBlocksByModelIds';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

describe('getBlocksByModelIds', () => {
  const mockQuery = jest.fn();
  const mockApolloClient: ApolloClient<NormalizedCacheObject> = {
    query: mockQuery,
  } as any;

  const modelIds = ['model1', 'model2'];
  const preview = true;

  beforeEach(() => {
    mockQuery.mockReset();
  });

  test('should query Apollo client with correct parameters', async () => {
    mockQuery.mockResolvedValue({
      data: {
        modelCollection: {
          items: [],
        },
      },
    });

    await getBlocksByModelIds(mockApolloClient, modelIds, preview);

    expect(mockQuery).toHaveBeenCalledTimes(1);
    expect(mockQuery).toHaveBeenCalledWith({
      query: expect.anything(),
      variables: {
        ids: modelIds,
        preview,
      },
    });
  });

  test('should return unique block IDs from the query result', async () => {
    mockQuery.mockResolvedValue({
      data: {
        modelCollection: {
          items: [
            {
              sys: { id: 'model1' },
              linkedFrom: {
                blockCollection: {
                  items: [{ sys: { id: 'block1' } }, { sys: { id: 'block2' } }],
                },
              },
            },
            {
              sys: { id: 'model2' },
              linkedFrom: {
                blockCollection: {
                  items: [{ sys: { id: 'block2' } }, { sys: { id: 'block3' } }],
                },
              },
            },
          ],
        },
      },
    });

    const result = await getBlocksByModelIds(mockApolloClient, modelIds, preview);

    expect(result).toEqual(['block1', 'block2', 'block3']);
  });

  test('should return an empty array when no blocks are found', async () => {
    mockQuery.mockResolvedValue({
      data: {
        modelCollection: {
          items: [
            {
              sys: { id: 'model1' },
              linkedFrom: {
                blockCollection: {
                  items: [],
                },
              },
            },
            {
              sys: { id: 'model2' },
              linkedFrom: {
                blockCollection: {
                  items: [],
                },
              },
            },
          ],
        },
      },
    });

    const result = await getBlocksByModelIds(mockApolloClient, modelIds, preview);

    expect(result).toEqual([]);
  });

  test('should handle empty response gracefully', async () => {
    mockQuery.mockResolvedValue({
      data: {
        modelCollection: {
          items: [],
        },
      },
    });

    const result = await getBlocksByModelIds(mockApolloClient, modelIds, preview);

    expect(result).toEqual([]);
  });
});
