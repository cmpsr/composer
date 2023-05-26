import { getStaticRoutes } from '.';

describe('getStaticRoutes', () => {
  const mockQuery = jest.fn();
  const fakeResponse = {
    data: {
      routes: {
        items: [
          {
            id: 'route_id_1',
            slug: 'slug_1',
          },
          {
            id: 'route_id_2',
            slug: 'slug_2',
          },
          {
            id: 'route_id_3',
            slug: 'slug_3',
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
    await getStaticRoutes(mockApolloClient, preview, domain);
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
      const routes = await getStaticRoutes(mockApolloClient, preview, domain);
      expect(routes).toStrictEqual([]);
    });
  });
  test('should return id, slug and empty variants', async () => {
    const routes = await getStaticRoutes(mockApolloClient, preview, domain);
    expect(routes).toStrictEqual(fakeResponse.data.routes.items.map((item) => ({ ...item, variants: [] })));
  });
  test('should include replica slugs in results', async () => {
    const fakeReplicaResponse = {
      data: {
        ...fakeResponse.data,
        replicas: {
          items: [
            {
              id: 'replica_id_1',
              slug: 'replica_slug_1',
            },
            {
              id: 'replica_id_2',
              slug: 'replica_slug_2',
            },
            {
              id: 'replica_id_3',
              slug: 'replica_slug_3',
            },
          ],
        },
      },
    };

    mockQuery.mockResolvedValueOnce(fakeReplicaResponse);
    const routes = await getStaticRoutes(mockApolloClient, preview, domain);
    expect(routes).toStrictEqual(
      fakeReplicaResponse.data.routes.items
        .map((item) => ({ ...item, variants: [] }))
        .concat(fakeReplicaResponse.data.replicas.items.map((item) => ({ ...item, variants: [] })))
    );
  });
});
