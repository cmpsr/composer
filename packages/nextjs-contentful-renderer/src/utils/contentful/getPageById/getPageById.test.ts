import { getPageById } from '.';

describe('getPageById', () => {
  const mockQuery = jest.fn();
  mockQuery.mockResolvedValue({
    data: {
      page: {
        id: 'page_id',
        title: 'Page title',
        metaConfiguration: {},
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
      },
    },
  });
  const mockApolloClient: any = {
    query: (params: Record<string, unknown>) => mockQuery(params),
  };

  const pageId = 'page_id';
  const preview = true;

  test('should query apollo to retrieve data', async () => {
    await getPageById(mockApolloClient, pageId, preview);
    expect(mockQuery).toBeCalledTimes(1);
    expect(mockQuery).toBeCalledWith({
      query: expect.anything(),
      variables: {
        pageId,
        preview,
      },
    });
  });

  test('should return undefined if no data returned', async () => {
    mockQuery.mockResolvedValueOnce({ data: { page: null } });
    const page = await getPageById(mockApolloClient, pageId, preview);
    expect(page).not.toBeDefined();
  });

  test('should return page data', async () => {
    const page = await getPageById(mockApolloClient, pageId, preview);
    expect(page).toStrictEqual({
      id: 'page_id',
      title: 'Page title',
      metaConfiguration: {},
      content: [
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
      ],
    });
  });
});
