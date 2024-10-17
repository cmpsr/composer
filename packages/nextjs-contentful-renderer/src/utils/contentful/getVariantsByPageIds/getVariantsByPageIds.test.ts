import { getVariantsByPageIds } from './getVariantsByPageIds';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

describe('getVariantsByPageIds', () => {
  const mockQuery = jest.fn();
  const mockApolloClient: ApolloClient<NormalizedCacheObject> = {
    query: mockQuery,
  } as any;

  const pageIds = ['page1', 'page2'];
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

    await getVariantsByPageIds(mockApolloClient, pageIds, preview);

    expect(mockQuery).toHaveBeenCalledTimes(1);
    expect(mockQuery).toHaveBeenCalledWith({
      query: expect.anything(),
      variables: {
        ids: pageIds,
        preview,
      },
    });
  });

  test('should return unique variant IDs from the query result', async () => {
    mockQuery.mockResolvedValue({
      data: {
        pageCollection: {
          items: [
            {
              sys: { id: 'page1' },
              linkedFrom: {
                variantCollection: {
                  items: [{ sys: { id: 'variant1' } }, { sys: { id: 'variant2' } }],
                },
              },
            },
            {
              sys: { id: 'page2' },
              linkedFrom: {
                variantCollection: {
                  items: [{ sys: { id: 'variant2' } }, { sys: { id: 'variant3' } }],
                },
              },
            },
          ],
        },
      },
    });

    const result = await getVariantsByPageIds(mockApolloClient, pageIds, preview);

    expect(result).toEqual(['variant1', 'variant2', 'variant3']);
  });

  test('should return an empty array when no variants are found', async () => {
    mockQuery.mockResolvedValue({
      data: {
        pageCollection: {
          items: [
            {
              sys: { id: 'page1' },
              linkedFrom: {
                variantCollection: {
                  items: [],
                },
              },
            },
            {
              sys: { id: 'page2' },
              linkedFrom: {
                variantCollection: {
                  items: [],
                },
              },
            },
          ],
        },
      },
    });

    const result = await getVariantsByPageIds(mockApolloClient, pageIds, preview);

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

    const result = await getVariantsByPageIds(mockApolloClient, pageIds, preview);

    expect(result).toEqual([]);
  });

  test('should handle pages without linked variants gracefully', async () => {
    mockQuery.mockResolvedValue({
      data: {
        pageCollection: {
          items: [
            {
              sys: { id: 'page1' },
              linkedFrom: {
                variantCollection: {
                  items: [],
                },
              },
            },
          ],
        },
      },
    });

    const result = await getVariantsByPageIds(mockApolloClient, pageIds, preview);

    expect(result).toEqual([]);
  });
});
