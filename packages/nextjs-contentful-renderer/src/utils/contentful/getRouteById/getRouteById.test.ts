import { getRouteById } from './getRouteById';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

describe('getRouteById', () => {
  const mockQuery = jest.fn();
  const mockApolloClient: ApolloClient<NormalizedCacheObject> = {
    query: mockQuery,
  } as any;

  const routeId = 'route1';
  const preview = true;
  const domain = 'example.com';

  beforeEach(() => {
    mockQuery.mockReset();
    process.env.SITE_DOMAIN = 'default.com';
  });

  test('should query Apollo client with correct parameters', async () => {
    mockQuery.mockResolvedValue({
      data: {
        routeCollection: {
          items: [],
        },
      },
    });

    await getRouteById(mockApolloClient, routeId, preview, domain);

    expect(mockQuery).toHaveBeenCalledTimes(1);
    expect(mockQuery).toHaveBeenCalledWith({
      query: expect.anything(),
      variables: {
        id: routeId,
        domain,
        preview,
      },
    });
  });

  test('should return slug when route is found', async () => {
    const expectedSlug = '/test-route';
    mockQuery.mockResolvedValue({
      data: {
        routeCollection: {
          items: [{ slug: expectedSlug }],
        },
      },
    });

    const result = await getRouteById(mockApolloClient, routeId, preview, domain);

    expect(result).toBe(expectedSlug);
  });

  test('should return null when no route is found', async () => {
    mockQuery.mockResolvedValue({
      data: {
        routeCollection: {
          items: [],
        },
      },
    });

    const result = await getRouteById(mockApolloClient, routeId, preview, domain);

    expect(result).toBeNull();
  });

  test('should use default domain when not provided', async () => {
    mockQuery.mockResolvedValue({
      data: {
        routeCollection: {
          items: [],
        },
      },
    });

    await getRouteById(mockApolloClient, routeId, preview);

    expect(mockQuery).toHaveBeenCalledWith({
      query: expect.anything(),
      variables: {
        id: routeId,
        domain: process.env.SITE_DOMAIN,
        preview,
      },
    });
  });

  test('should handle undefined slug gracefully', async () => {
    mockQuery.mockResolvedValue({
      data: {
        routeCollection: {
          items: [{}], // Item without a slug
        },
      },
    });

    const result = await getRouteById(mockApolloClient, routeId, preview, domain);

    expect(result).toBeNull();
  });
});
