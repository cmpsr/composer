import { getPageById } from './getPageById';

const dummyMainContentItem = {
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
};

const dummyBlock = {
  modelsCollection: {
    items: [
      {
        base: '# H1',
      },
    ],
  },
  propsValues: [],
};

const dummyPage = {
  id: 'page_id',
  title: 'Page title',
  metaConfiguration: {},
  globalVariables: {},
  theme: { theme: {} },
  navbar: dummyBlock,
  footer: dummyBlock,
  contentCollection: {
    items: [dummyMainContentItem],
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
      globalVariables: {},
      metaConfiguration: {},
      theme: {},
      navbar: [
        {
          models: [{ base: '# H1' }],
          propsValues: [],
        },
      ],
      footer: [
        {
          models: [{ base: '# H1' }],
          propsValues: [],
        },
      ],
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
    const page = await getPageById(mockApolloClient, pageId, preview);
    expect(page).toStrictEqual({
      id: 'page_id',
      title: 'Page title',
      metaConfiguration: {},
      globalVariables: {},
      theme: null,
      navbar: [
        {
          models: [{ base: '# H1' }],
          propsValues: [],
        },
      ],
      footer: [
        {
          models: [{ base: '# H1' }],
          propsValues: [],
        },
      ],
      content: [
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
      ],
    });
  });

  test('should return page without navbar', async () => {
    mockQuery.mockResolvedValueOnce({ data: { page: { ...dummyPage, theme: null, navbar: null } } });
    const page = await getPageById(mockApolloClient, pageId, preview);
    expect(page).toStrictEqual({
      id: 'page_id',
      title: 'Page title',
      metaConfiguration: {},
      globalVariables: {},
      theme: null,
      navbar: null,
      footer: [
        {
          models: [{ base: '# H1' }],
          propsValues: [],
        },
      ],
      content: [
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
      ],
    });
  });

  test('should return page without footer', async () => {
    mockQuery.mockResolvedValueOnce({ data: { page: { ...dummyPage, theme: null, navbar: null, footer: null } } });
    const page = await getPageById(mockApolloClient, pageId, preview);
    expect(page).toStrictEqual({
      id: 'page_id',
      title: 'Page title',
      metaConfiguration: {},
      globalVariables: {},
      theme: null,
      navbar: null,
      footer: null,
      content: [
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
      ],
    });
  });
});
