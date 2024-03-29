import { getPageById } from './getPageById';

const mockGetPageFromContentful = jest.fn();
mockGetPageFromContentful.mockResolvedValue(undefined);
jest.mock('../contentful', () => ({
  getPageById: (...params) => mockGetPageFromContentful(...params),
}));

describe('getPageById', () => {
  const mockApolloClient: any = {};
  const pageId = 'page_id';
  const preview = false;

  test('should get page content', async () => {
    await getPageById(mockApolloClient, pageId, preview);
    expect(mockGetPageFromContentful).toBeCalledTimes(1);
    expect(mockGetPageFromContentful).toBeCalledWith(mockApolloClient, pageId, preview);
  });
  test('should return contentful content if no navbar and footer', async () => {
    const fakeContent = { content: {} };
    mockGetPageFromContentful.mockResolvedValueOnce(fakeContent);
    const page = await getPageById(mockApolloClient, pageId, preview);
    expect(page).toStrictEqual(fakeContent);
  });
  test('should append the navbar and footer to the content', async () => {
    const fakeContent = {
      content: [{ models: [{ base: 'base content' }], propsValues: [] }],
      navbar: [{ models: [{ base: 'navbar' }], propsValues: [] }],
      footer: [{ models: [{ base: 'footer' }], propsValues: [] }],
    };
    mockGetPageFromContentful.mockResolvedValueOnce({ ...fakeContent, content: [...fakeContent.content] });
    const page = await getPageById(mockApolloClient, pageId, preview);
    expect(page).toStrictEqual({
      ...fakeContent,
      content: [
        { models: [fakeContent.navbar[0].models[0]], propsValues: [] },
        ...fakeContent.content,
        { models: [fakeContent.footer[0].models[0]], propsValues: [] },
      ],
    });
  });
  test('confirm title is replaced when provided via a replica', async () => {
    const fakeContent = {
      content: [],
      title: 'Page Title',
    };
    const fakeReplica = {
      id: 'replica-id',
      slug: '/replica',
      modelData: [[{ base: { textColor: 'white' } }]],
      page: 'page-id',
      title: 'Replica Title',
    };

    mockGetPageFromContentful.mockResolvedValueOnce(fakeContent);
    const page = await getPageById(mockApolloClient, pageId, preview, fakeReplica);

    expect(page).toStrictEqual({
      ...fakeContent,
      title: fakeReplica.title,
    });
  });
  test('confirm metaConfiguration are merged with content', async () => {
    const fakeContent = {
      content: [{ models: [{ base: 'base content' }], propsValues: [] }],
      navbar: [{ models: [{ base: 'navbar' }], propsValues: [] }],
      footer: [{ models: [{ base: 'footer' }], propsValues: [] }],
      metaConfiguration: {
        meta1: { propertyName: 'name', propertyValue: 'value', content: 'content' },
        meta2: { propertyName: 'name', propertyValue: 'value', content: 'content' },
      },
    };
    const fakeReplica = {
      id: 'replica-id',
      slug: '/replica',
      metaConfiguration: {
        meta1: { propertyName: 'name-replica', propertyValue: 'value-replica', content: 'content-replica' },
      },
      modelData: [[{ base: { textColor: 'white' } }]],
      page: 'page-id',
    };

    mockGetPageFromContentful.mockResolvedValueOnce({ ...fakeContent, content: [...fakeContent.content] });
    const page = await getPageById(mockApolloClient, pageId, preview, fakeReplica);

    expect(page).toStrictEqual({
      ...fakeContent,
      content: [
        { models: [fakeContent.navbar[0].models[0]], propsValues: [] },
        { models: [fakeContent.content[0].models[0]], propsValues: fakeReplica.modelData[0] },
        { models: [fakeContent.footer[0].models[0]], propsValues: [] },
      ],
      metaConfiguration: {
        meta1: { propertyName: 'name-replica', propertyValue: 'value-replica', content: 'content-replica' },
        meta2: { propertyName: 'name', propertyValue: 'value', content: 'content' },
      },
    });
  });
  test('confirm globalVariables are merged with content', async () => {
    const fakeContent = {
      content: [{ models: [{ base: 'base content' }], propsValues: [] }],
      navbar: [{ models: [{ base: 'navbar' }], propsValues: [] }],
      footer: [{ models: [{ base: 'footer' }], propsValues: [] }],
      globalVariables: { base: { global: 'content variable', other: 'global' } },
    };
    const fakeReplica = {
      id: 'replica-id',
      slug: '/replica',
      globalVariables: { base: { global: 'replica variable' } },
      modelData: [[{ base: { textColor: 'white' } }]],
      page: 'page-id',
    };

    mockGetPageFromContentful.mockResolvedValueOnce({ ...fakeContent, content: [...fakeContent.content] });
    const page = await getPageById(mockApolloClient, pageId, preview, fakeReplica);

    expect(page).toStrictEqual({
      ...fakeContent,
      content: [
        { models: [fakeContent.navbar[0].models[0]], propsValues: [] },
        { models: [fakeContent.content[0].models[0]], propsValues: fakeReplica.modelData[0] },
        { models: [fakeContent.footer[0].models[0]], propsValues: [] },
      ],
      globalVariables: { base: { global: 'replica variable', other: 'global' } },
    });
  });
  test('confirm modelData is merged with content', async () => {
    const fakeContent = {
      content: [{ models: [{ base: 'base content' }], propsValues: [] }],
      navbar: [{ models: [{ base: 'navbar' }], propsValues: [] }],
      footer: [{ models: [{ base: 'footer' }], propsValues: [] }],
    };
    const fakeReplica = {
      id: 'replica-id',
      slug: '/replica',
      modelData: [[{ base: { textColor: 'white' } }]],
      page: 'page-id',
    };

    mockGetPageFromContentful.mockResolvedValueOnce({ ...fakeContent, content: [...fakeContent.content] });
    const page = await getPageById(mockApolloClient, pageId, preview, fakeReplica);

    expect(page).toStrictEqual({
      ...fakeContent,
      content: [
        { models: [fakeContent.navbar[0].models[0]], propsValues: [] },
        { models: [fakeContent.content[0].models[0]], propsValues: fakeReplica.modelData[0] },
        { models: [fakeContent.footer[0].models[0]], propsValues: [] },
      ],
    });
  });
  test('confirm modelData is not merged when both content and replica contain no propsValues', async () => {
    const fakeContent = {
      content: [{ models: [{ base: 'base content' }], propsValues: [] }],
      navbar: [{ models: [{ base: 'navbar' }], propsValues: [] }],
      footer: [{ models: [{ base: 'footer' }], propsValues: [] }],
    };
    const fakeReplica = {
      id: 'replica-id',
      slug: '/replica',
      modelData: [],
      page: 'page-id',
    };

    mockGetPageFromContentful.mockResolvedValueOnce(fakeContent);
    const page = await getPageById(mockApolloClient, pageId, preview, fakeReplica);

    expect(page).toStrictEqual(fakeContent);
  });
  test('confirm metaConfiguration is merged with content', async () => {
    const fakeContent = {
      content: [{ models: [{ base: 'base content' }], propsValues: [] }],
      metaConfiguration: {
        title: { propertyName: 'title', propertyValue: 'page title', content: '' },
        description: { propertyName: 'description', propertyValue: 'page description', content: '' },
      },
      navbar: [{ models: [{ base: 'navbar' }], propsValues: [] }],
      footer: [{ models: [{ base: 'footer' }], propsValues: [] }],
    };
    const fakeReplica = {
      id: 'replica-id',
      slug: '/replica',
      metaConfiguration: { title: { propertyName: 'title', propertyValue: 'replica title', content: '' } },
      modelData: [],
      page: 'page-id',
    };

    mockGetPageFromContentful.mockResolvedValueOnce(fakeContent);
    const page = await getPageById(mockApolloClient, pageId, preview, fakeReplica);

    expect(page).toStrictEqual({
      ...fakeContent,
      metaConfiguration: {
        title: { propertyName: 'title', propertyValue: 'replica title', content: '' },
        description: { propertyName: 'description', propertyValue: 'page description', content: '' },
      },
    });
  });
});
