import { getDefaultNavbar } from '.';

describe('getDefaultNavbar', () => {
  const fakeNavbar = {
    data: {
      navbarCollection: {
        items: [
          {
            id: 'navbar1',
            model: {
              id: 'navbar_model_1',
              base: '- opt1',
            },
          },
        ],
      },
    },
  };
  const mockQuery = jest.fn();
  mockQuery.mockResolvedValue(fakeNavbar);
  const mockApolloClient: any = {
    query: (params: Record<string, unknown>) => mockQuery(params),
  };
  const domain = 'cmpsr';
  const preview = true;

  test('should query apollo client', async () => {
    await getDefaultNavbar(mockApolloClient, domain, preview);
    expect(mockQuery).toBeCalledWith({
      query: expect.anything(),
      variables: {
        domain,
        preview,
      },
      fetchPolicy: 'cache-first',
    });
  });

  test('should return undefined if no default navbar', async () => {
    mockQuery.mockResolvedValueOnce({ data: { navbarCollection: { items: [] } } });
    const navbar = await getDefaultNavbar(mockApolloClient, domain, preview);
    expect(navbar).not.toBeDefined();
  });

  test('should return navbar content', async () => {
    const navbarModel = await getDefaultNavbar(mockApolloClient, domain, preview);
    expect(navbarModel).toStrictEqual(fakeNavbar.data.navbarCollection.items[0]);
  });
});
