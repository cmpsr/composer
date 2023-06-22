import { getDefaultTheme } from './getDefaultTheme';

describe('getDefaultTheme', () => {
  const fakeTheme = {
    data: {
      themeCollection: {
        items: [
          {
            id: 'Default theme',
            domain: 'cmpsr',
            isDefault: true,
            theme: {
              colors: {
                'text-light': 'red',
              },
            },
          },
        ],
      },
    },
  };
  const mockQuery = jest.fn();
  mockQuery.mockResolvedValue(fakeTheme);
  const mockApolloClient: any = {
    query: (params: Record<string, unknown>) => mockQuery(params),
  };
  const domain = 'cmpsr';
  const preview = true;

  test('should query apollo client', async () => {
    await getDefaultTheme(mockApolloClient, domain, preview);
    expect(mockQuery).toBeCalledWith({
      query: expect.anything(),
      variables: {
        domain,
        preview,
      },
      fetchPolicy: 'cache-first',
    });
  });

  test('should return undefined if no default theme', async () => {
    mockQuery.mockResolvedValueOnce({ data: { themeCollection: { items: [] } } });
    const theme = await getDefaultTheme(mockApolloClient, domain, preview);
    expect(theme).not.toBeDefined();
  });

  test('should return theme content', async () => {
    const theme = await getDefaultTheme(mockApolloClient, domain, preview);
    expect(theme).toStrictEqual(fakeTheme.data.themeCollection.items[0].theme);
  });
});
