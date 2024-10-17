import { getRoutesByVariantIds } from './getRoutesByVariantIds';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

describe('getRoutesByVariantIds', () => {
  const mockQuery = jest.fn();
  const mockApolloClient: ApolloClient<NormalizedCacheObject> = {
    query: mockQuery,
  } as any;

  const variantIds = ['variant1', 'variant2'];
  const preview = true;

  beforeEach(() => {
    mockQuery.mockReset();
  });

  test('should query Apollo client with correct parameters', async () => {
    mockQuery.mockResolvedValue({
      data: {
        variantCollection: {
          items: [],
        },
      },
    });

    await getRoutesByVariantIds(mockApolloClient, variantIds, preview);

    expect(mockQuery).toHaveBeenCalledTimes(1);
    expect(mockQuery).toHaveBeenCalledWith({
      query: expect.anything(),
      variables: {
        ids: variantIds,
        preview,
      },
    });
  });

  test('should return unique static route slugs from the query result', async () => {
    mockQuery.mockResolvedValue({
      data: {
        variantCollection: {
          items: [
            {
              sys: { id: 'variant1' },
              linkedFrom: {
                routeCollection: {
                  items: [
                    { slug: '/route1', isStatic: true },
                    { slug: '/route2', isStatic: false },
                    { slug: '/route3', isStatic: true },
                  ],
                },
              },
            },
            {
              sys: { id: 'variant2' },
              linkedFrom: {
                routeCollection: {
                  items: [
                    { slug: '/route3', isStatic: true },
                    { slug: '/route4', isStatic: true },
                  ],
                },
              },
            },
          ],
        },
      },
    });

    const result = await getRoutesByVariantIds(mockApolloClient, variantIds, preview);

    expect(result).toEqual(['/route1', '/route3', '/route4']);
  });

  test('should return an empty array when no static routes are found', async () => {
    mockQuery.mockResolvedValue({
      data: {
        variantCollection: {
          items: [
            {
              sys: { id: 'variant1' },
              linkedFrom: {
                routeCollection: {
                  items: [
                    { slug: '/route1', isStatic: false },
                    { slug: '/route2', isStatic: false },
                  ],
                },
              },
            },
          ],
        },
      },
    });

    const result = await getRoutesByVariantIds(mockApolloClient, variantIds, preview);

    expect(result).toEqual([]);
  });

  test('should handle empty response gracefully', async () => {
    mockQuery.mockResolvedValue({
      data: {
        variantCollection: {
          items: [],
        },
      },
    });

    const result = await getRoutesByVariantIds(mockApolloClient, variantIds, preview);

    expect(result).toEqual([]);
  });

  test('should handle variants without linked routes gracefully', async () => {
    mockQuery.mockResolvedValue({
      data: {
        variantCollection: {
          items: [
            {
              sys: { id: 'variant1' },
              linkedFrom: {
                routeCollection: {
                  items: [],
                },
              },
            },
          ],
        },
      },
    });

    const result = await getRoutesByVariantIds(mockApolloClient, variantIds, preview);

    expect(result).toEqual([]);
  });
});
