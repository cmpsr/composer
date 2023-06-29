import omit from 'lodash/omit';
import { getDynamicRoutes } from './getDynamicRoutes';

describe('getDynamicRoutes', () => {
  const mockQuery = jest.fn();
  const fakeResponse = {
    data: {
      routes: {
        items: [
          {
            id: 'route_id_1',
            slug: 'slug_1',
            variantsCollection: {
              items: [
                {
                  page: {
                    sys: {
                      publishedAt: '2023-06-28T15:46:50.518Z',
                    },
                  },
                },
              ],
            },
          },
          {
            id: 'route_id_2',
            slug: 'slug_2',
            variantsCollection: {
              items: [
                {
                  page: {
                    sys: {
                      publishedAt: '2023-06-28T15:46:50.518Z',
                    },
                  },
                },
              ],
            },
          },
          {
            id: 'route_id_3',
            slug: 'slug_3',
            variantsCollection: {
              items: [
                {
                  page: {
                    sys: {
                      publishedAt: '2023-06-28T15:46:50.518Z',
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  };
  mockQuery.mockResolvedValue(fakeResponse);
  const mockApolloClient: any = {
    query: (params: Record<string, unknown>) => mockQuery(params),
  };
  const preview = true;
  const domain = 'domain';

  test('should query apollo to retrieve data', async () => {
    await getDynamicRoutes(mockApolloClient, preview, domain);
    expect(mockQuery).toBeCalledTimes(1);
    expect(mockQuery).toBeCalledWith({
      query: expect.anything(),
      variables: {
        domain,
        preview,
      },
    });
  });
  [{}, { data: {} }, { data: { routes: {} } }].forEach((value) => {
    test(`should return empty array for empty result: ${JSON.stringify(value)}`, async () => {
      mockQuery.mockResolvedValueOnce(value);
      const routes = await getDynamicRoutes(mockApolloClient, preview, domain);
      expect(routes).toStrictEqual([]);
    });
  });
  test('should return id, lastmod, slug and empty variants', async () => {
    const routes = await getDynamicRoutes(mockApolloClient, preview, domain);
    expect(routes).toStrictEqual(
      fakeResponse.data.routes.items.map((item) => ({
        ...omit(item, ['variantsCollection']),
        lastmod: item.variantsCollection.items[0].page.sys.publishedAt,
        variants: [],
      }))
    );
  });
});
