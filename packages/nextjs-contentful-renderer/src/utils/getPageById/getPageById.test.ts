import { getPageById } from '.';

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
  test.only('should append the navbar and footer to the content', async () => {
    const fakeContent = {
      content: [{ models: [{ base: 'base content' }], propsValues: [] }],
      navbar: { model: { base: 'navbar' } },
      footer: { model: { base: 'footer' } },
    };
    mockGetPageFromContentful.mockResolvedValueOnce({ ...fakeContent, content: [...fakeContent.content] });
    const page = await getPageById(mockApolloClient, pageId, preview);
    expect(page).toStrictEqual({
      ...fakeContent,
      content: [
        { models: [fakeContent.navbar.model], propsValues: [] },
        ...fakeContent.content,
        { models: [fakeContent.footer.model], propsValues: [] },
      ],
    });
  });
});
