import { getPageById } from '.';
import { addCommonBlock } from './commonBlocks';

const dummyMainContentItem = {
  modelsCollection: {
    items: [{ base: '# H1' }, { base: '## H2' }],
  },
  propsValues: [],
};

const getDummyCommonBlock = (baseText: string) => ({
  default: false,
  position: 1,
  block: {
    propsValue: [],
    modelsCollection: { items: [{ base: baseText }] },
  },
});

describe('getPageById', () => {
  const mockQuery = jest.fn();
  const dummyNavbarBlock = getDummyCommonBlock('- opt1');
  mockQuery.mockResolvedValue({
    data: {
      page: {
        id: 'page_id',
        title: 'Page title',
        metaConfiguration: {},
        contentCollection: {
          items: [dummyMainContentItem],
        },
        navigationBarsCollection: {
          items: [dummyNavbarBlock],
        },
        footersCollection: {
          items: [
            {
              ...getDummyCommonBlock('footer'),
              position: 4,
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
          models: [{ base: '- opt1' }],
          propsValues: [],
        },
        {
          models: [{ base: '# H1' }, { base: '## H2' }],
          propsValues: [],
        },
        {
          models: [{ base: 'footer' }],
          propsValues: [],
        },
      ],
    });
  });

  describe('commonBlocks', () => {
    test('should return an empty array if common blocks is null', () => {
      const commonBlocks = addCommonBlock(null)([]);
      expect(commonBlocks.length).toBe(0);
    });

    test('should return an empty array if there are no common blocks', () => {
      const commonBlocks = addCommonBlock({ items: [] })([]);
      expect(commonBlocks.length).toBe(0);
    });

    test('should return a default common block', () => {
      const commonBlocks = addCommonBlock({ items: [dummyNavbarBlock] })([]);
      expect(commonBlocks.length).toBe(1);
      expect(commonBlocks[0]).toStrictEqual({
        models: [{ base: '- opt1' }],
        propsValues: [],
      });
    });

    test('should return the first occurrence if there is more than one item as default', () => {
      const commonBlocks = addCommonBlock({ items: [dummyNavbarBlock, dummyNavbarBlock] })([]);
      expect(commonBlocks.length).toBe(1);
      expect(commonBlocks[0]).toStrictEqual({
        models: [{ base: '- opt1' }],
        propsValues: [],
      });
    });

    test('should return the first item if there are no items as default', () => {
      const nonDefaultCommonBlock = { ...dummyNavbarBlock, default: false };
      const commonBlocks = addCommonBlock({
        items: [nonDefaultCommonBlock, nonDefaultCommonBlock],
      })([]);
      expect(commonBlocks.length).toBe(1);
      expect(commonBlocks[0]).toStrictEqual({
        models: [{ base: '- opt1' }],
        propsValues: [],
      });
    });

    test('should insert commonBlock at the beginning', () => {
      const commonBlocks = addCommonBlock({
        items: [dummyNavbarBlock],
      })([
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
      const commonBlocks = addCommonBlock({
        items: [{ ...dummyNavbarBlock, position: -1 }],
      })([
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
      const commonBlocks = addCommonBlock({
        items: [{ ...dummyNavbarBlock, position: 2 }],
      })([
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
