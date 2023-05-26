import { getRouteBySlug } from '.';

describe('getRouteBySlug', () => {
  const mockQuery = jest.fn();
  const fakeRouteResponse = {
    data: {
      route: {
        items: [
          {
            id: 'route_id',
            variants: {
              items: [
                {
                  traffic: 1,
                  page: {
                    sys: { id: 'page_id' },
                  },
                  utmCampaign: 'utm_campaign',
                },
              ],
            },
          },
        ],
      },
    },
  };
  const fakeRouteEmptyResponse = { data: { route: { items: [] } } };
  const fakeReplicaResponse = {
    data: {
      replica: {
        items: [
          {
            id: 'replica_id',
            domain: 'my_domain',
            modelData: [],
            pageTemplate: {
              sys: { id: 'page_id' },
            },
            slug: '/route_slug',
          },
        ],
      },
    },
  };
  const mockApolloClient: any = {
    query: (params: Record<string, unknown>) => mockQuery(params),
  };

  const slug = '/route_slug';
  const slugWithoutSlash = slug.slice(1);
  const preview = true;

  test('should query apollo to retrieve data', async () => {
    mockQuery.mockResolvedValueOnce(fakeRouteResponse);
    await getRouteBySlug(mockApolloClient, slug, preview);
    expect(mockQuery).toBeCalledTimes(1);
    expect(mockQuery).toBeCalledWith({
      query: expect.anything(),
      variables: {
        slug,
        domain: process.env.SITE_DOMAIN,
        preview,
      },
    });
  });

  test('should prefix slug with a slash', async () => {
    mockQuery.mockResolvedValueOnce(fakeRouteResponse);
    await getRouteBySlug(mockApolloClient, slugWithoutSlash, preview);
    expect(mockQuery).toBeCalledTimes(1);
    expect(mockQuery).toBeCalledWith({
      query: expect.anything(),
      variables: {
        slug,
        domain: process.env.SITE_DOMAIN,
        preview,
      },
    });
  });

  test('should return first route returned', async () => {
    mockQuery.mockResolvedValueOnce(fakeRouteResponse);
    const route = await getRouteBySlug(mockApolloClient, slug, preview);
    expect(route).toStrictEqual({
      id: 'route_id',
      slug,
      variants: [
        {
          traffic: 1,
          page: 'page_id',
          utmCampaign: 'utm_campaign',
        },
      ],
    });
  });

  test('should query apollo to retrieve data w/ replica request', async () => {
    mockQuery.mockResolvedValueOnce(fakeRouteEmptyResponse).mockResolvedValueOnce(fakeReplicaResponse);
    await getRouteBySlug(mockApolloClient, slug, preview);
    expect(mockQuery).toBeCalledTimes(2);
    expect(mockQuery).toBeCalledWith({
      query: expect.anything(),
      variables: {
        slug,
        domain: process.env.SITE_DOMAIN,
        preview,
      },
    });
  });

  test('should return first replica returned', async () => {
    mockQuery.mockResolvedValueOnce(fakeRouteEmptyResponse).mockResolvedValueOnce(fakeReplicaResponse);
    const replica = await getRouteBySlug(mockApolloClient, slug, preview);
    expect(replica).toStrictEqual({
      id: 'replica_id',
      modelData: [],
      page: 'page_id',
      slug: '/route_slug',
    });
  });

  test('should return null if no route and replica request error', async () => {
    mockQuery.mockResolvedValueOnce(fakeRouteEmptyResponse).mockRejectedValueOnce('error');
    const replica = await getRouteBySlug(mockApolloClient, slug, preview);
    expect(replica).toBeNull();
  });
});
