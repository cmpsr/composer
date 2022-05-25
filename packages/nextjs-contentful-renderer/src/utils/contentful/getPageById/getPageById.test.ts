import { getPageById } from '.';
import { addCommonBlock } from './commonBlocks';

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
  propsValue: [],
  modelsCollection: {
    items: [
      {
        base: '- opt1',
      },
    ],
  },
};

describe('getPageById', () => {
  const mockQuery = jest.fn();
  mockQuery.mockResolvedValue({
    data: {
      page: {
        id: 'page_id',
        title: 'Page title',
        metaConfiguration: {},
        contentCollection: {
          items: [dummyMainContentItem],
        },
        navbar: dummyBlock,
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
          models: [{ base: '- opt1' }],
          propsValues: [],
        },
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
      ],
    });
  });

  describe('commonBlocks', () => {
    test('should return an empty array if common blocks fields are null', () => {
      const commonBlocks = addCommonBlock(null)([]);
      expect(commonBlocks.length).toBe(0);
    });
    test('should insert commonBlock at the beginning', () => {
      const commonBlocks = addCommonBlock(dummyBlock)([
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
      ]);
      expect(commonBlocks.length).toBe(2);
      expect(commonBlocks[0]).toStrictEqual({
        models: [{ base: '- opt1' }],
        propsValues: [],
      });
    });
    test('should insert commonBlock if position has a negative value', () => {
      const commonBlocks = addCommonBlock(
        dummyBlock,
        -1
      )([
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
      ]);
      expect(commonBlocks.length).toBe(2);
      expect(commonBlocks[0]).toStrictEqual({
        models: [{ base: '- opt1' }],
        propsValues: [],
      });
    });
    test('should insert commonBlock at the end', () => {
      const commonBlocks = addCommonBlock(
        dummyBlock,
        2
      )([
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
      ]);
      expect(commonBlocks.length).toBe(2);
      expect(commonBlocks[1]).toStrictEqual({
        models: [{ base: '- opt1' }],
        propsValues: [],
      });
    });

    test('should insert a block if position arg is a function', () => {
      const commonBlocks = addCommonBlock(
        dummyBlock,
        (content) => content.length
      )([
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
      ]);
      expect(commonBlocks.length).toBe(2);
      expect(commonBlocks[1]).toStrictEqual({
        models: [{ base: '- opt1' }],
        propsValues: [],
      });
    });
  });
});
