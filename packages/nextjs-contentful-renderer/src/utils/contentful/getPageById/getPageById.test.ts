import { getPageById } from '.';

const dummyPage = {
  id: 'page_id',
  title: 'Page title',
  metaConfiguration: {},
  theme: { theme: {} },
  contentCollection: {
    items: [
      {
        modelsCollection: {
          items: [
            {
              base: '# H1',
            },
            {
              base: '## H2',
            },
          ],
        },
        propsValues: [],
      },
    ],
  },
};

describe('getPageById', () => {
  const mockQuery = jest.fn();
  mockQuery.mockResolvedValue({
    data: {
      page: dummyPage,
    },
  });
  const mockApolloClient: any = {
    query: (params: Record<string, unknown>) => mockQuery(params),
  };

  const pageId = 'page_id';
  const preview = true;

  test('should query apollo to retrieve data', async () => {
    await getPageById({ apolloClient: mockApolloClient, pageId, preview, skipTheme: false });
    expect(mockQuery).toBeCalledTimes(1);
    expect(mockQuery).toBeCalledWith({
      query: expect.anything(),
      variables: {
        pageId,
        preview,
        skipTheme: false,
      },
    });
  });

  test('should return undefined if no data returned', async () => {
    mockQuery.mockResolvedValueOnce({ data: { page: null } });
    const page = await getPageById({ apolloClient: mockApolloClient, pageId, preview });
    expect(page).not.toBeDefined();
  });

  test('should return page data', async () => {
    const page = await getPageById({ apolloClient: mockApolloClient, pageId, preview });
    expect(page).toStrictEqual({
      id: 'page_id',
      title: 'Page title',
      metaConfiguration: {},
      theme: {},
      content: [
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
      ],
    });
  });

  test('should return page without theme', async () => {
    mockQuery.mockResolvedValueOnce({ data: { page: { ...dummyPage, theme: null } } });
    const page = await getPageById({ apolloClient: mockApolloClient, pageId, preview, skipTheme: true });
    expect(page).toStrictEqual({
      id: 'page_id',
      title: 'Page title',
      metaConfiguration: {},
      theme: undefined,
      content: [
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
      ],
    });
  });
});
