import { getPageContent } from '.';

const mockGetSlug = jest.fn();
jest.mock('../utils/getSlug', () => ({
  getSlug: (...params) => mockGetSlug(...params),
}));

const mockGetPageId = jest.fn();
jest.mock('../utils/getPageId', () => ({
  getPageId: (...params) => mockGetPageId(...params),
}));

const mockGetRouteBySlug = jest.fn();
jest.mock('../utils/contentful', () => ({
  getRouteBySlug: (...params) => mockGetRouteBySlug(...params),
}));

const mockGetPageById = jest.fn();
jest.mock('../utils/getPageById', () => ({
  getPageById: (...params) => mockGetPageById(...params),
}));

describe('getPageContent', () => {
  const fakeContext: any = {
    query: {
      slug: '/home',
      preview: true,
    },
  };
  const fakePageContent = {
    page: 'content',
  };

  test('should use / slug by default', async () => {
    const context: any = {
      query: {},
    };
    await getPageContent(context);
    expect(mockGetSlug).toBeCalledTimes(1);
    expect(mockGetSlug).toBeCalledWith(context, '/');
  });
  describe('nextjs preview mode', () => {
    test('should use nextjs preview mode over param', async () => {
      const preview = true;
      const context: any = {
        preview,
        query: {
          slug: '/home',
          preview: !preview,
        },
      };
      await getPageContent(context);
      expect(mockGetRouteBySlug).toBeCalledTimes(1);
      expect(mockGetRouteBySlug).toBeCalledWith(expect.anything(), '/home', preview, undefined);
    });
    test('should not use nextjs preview mode if false', async () => {
      const preview = false;
      const context: any = {
        preview,
        query: {
          slug: '/home',
          preview: !preview,
        },
      };
      await getPageContent(context);
      expect(mockGetRouteBySlug).toBeCalledTimes(1);
      expect(mockGetRouteBySlug).toBeCalledWith(expect.anything(), '/home', !preview, undefined);
    });
    test('should not use nextjs preview mode if undefined', async () => {
      const context: any = {
        preview: undefined,
        query: {
          slug: '/home',
          preview: true,
        },
      };
      await getPageContent(context);
      expect(mockGetRouteBySlug).toBeCalledTimes(1);
      expect(mockGetRouteBySlug).toBeCalledWith(expect.anything(), '/home', true, undefined);
    });
  });
  test('should return undefined if no slug match', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce(undefined);
    const pageContent = await getPageContent(fakeContext);
    expect(pageContent).not.toBeDefined();
  });
  test('should get page id for route', async () => {
    const fakeRoute = { id: 'route_id' };
    mockGetRouteBySlug.mockResolvedValueOnce(fakeRoute);
    await getPageContent(fakeContext);
    expect(mockGetPageId).toBeCalledTimes(1);
    expect(mockGetPageId).toBeCalledWith(fakeRoute, undefined);
  });
  test('should get page by id', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce({});
    mockGetPageId.mockReturnValueOnce('page_id');
    await getPageContent(fakeContext);
    expect(mockGetPageById).toBeCalledTimes(1);
    expect(mockGetPageById).toBeCalledWith(expect.anything(), 'page_id', true, null);
  });
  test('should return page content', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce({});
    mockGetPageId.mockReturnValueOnce('page_id');
    mockGetPageById.mockResolvedValueOnce(fakePageContent);
    const pageContent = await getPageContent(fakeContext);
    expect(pageContent).toStrictEqual(fakePageContent);
  });
});
