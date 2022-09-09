import { getRouteBySlug } from '.';

describe('getRouteBySlug', () => {
  const mockQuery = jest.fn();
  mockQuery.mockResolvedValue({
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
  });
  const mockApolloClient: any = {
    query: (params: Record<string, unknown>) => mockQuery(params),
  };

  const slug = 'route_slug';
  const preview = true;

  test('should query apollo to retrieve data', async () => {
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

  test('should return first route returned', async () => {
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
});
