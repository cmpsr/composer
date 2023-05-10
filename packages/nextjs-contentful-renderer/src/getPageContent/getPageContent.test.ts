import { getPageContent } from '.';

const mockGetVisitedPageIdFromCookies = jest.fn();
const mockSetCookie = jest.fn();
jest.mock('../utils/cookies', () => ({
  getVisitedPageIdFromCookies: (...params) => mockGetVisitedPageIdFromCookies(...params),
  setCookie: (...params) => mockSetCookie(...params),
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
    expect(mockGetRouteBySlug).toBeCalledTimes(1);
    expect(mockGetRouteBySlug).toBeCalledWith(expect.anything(), '/', false, undefined);
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
  test('should request page id stored in cookies', async () => {
    const fakeRoute = { id: 'route_id', variants: [{ page: 'page_id' }] };
    mockGetRouteBySlug.mockResolvedValueOnce(fakeRoute);
    mockGetVisitedPageIdFromCookies.mockReturnValueOnce('page_id');
    mockGetPageId.mockReturnValueOnce('page_id');
    await getPageContent(fakeContext);
    expect(mockGetPageById).toBeCalledTimes(1);
    expect(mockGetPageById).toBeCalledWith(expect.anything(), 'page_id', true, undefined);
  });
  test('should return page content for page id stored in cookies if exists', async () => {
    const fakeRoute = { id: 'route_id' };
    mockGetRouteBySlug.mockResolvedValueOnce(fakeRoute);
    mockGetVisitedPageIdFromCookies.mockReturnValueOnce('page_id');
    mockGetPageById.mockResolvedValueOnce(fakePageContent);
    const pageContent = await getPageContent(fakeContext);
    expect(pageContent).toStrictEqual(fakePageContent);
    expect(mockGetPageById).toBeCalledTimes(1);
  });
  test('should request route for slug if no content for page in cookies', async () => {
    mockGetVisitedPageIdFromCookies.mockReturnValueOnce('page_id');
    mockGetPageById.mockResolvedValueOnce(undefined);
    await getPageContent(fakeContext);
    expect(mockGetRouteBySlug).toBeCalledTimes(1);
    expect(mockGetRouteBySlug).toBeCalledWith(expect.anything(), '/home', true, undefined);
  });
  test('should get page id for route', async () => {
    const fakeRoute = { id: 'route_id' };
    mockGetRouteBySlug.mockResolvedValueOnce(fakeRoute);
    mockGetVisitedPageIdFromCookies.mockReturnValueOnce('page_id');
    await getPageContent(fakeContext);
    expect(mockGetVisitedPageIdFromCookies).toBeCalledTimes(1);
    expect(mockGetVisitedPageIdFromCookies).toBeCalledWith(fakeContext, '/home');
    expect(mockGetPageId).toBeCalledTimes(1);
    expect(mockGetPageId).toBeCalledWith(fakeRoute, undefined, 'page_id');
  });
  test('should set cookie with returned page id', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce({});
    mockGetPageId.mockReturnValueOnce('page_id');
    await getPageContent(fakeContext);
    expect(mockSetCookie).toBeCalledTimes(1);
    expect(mockSetCookie).toBeCalledWith(fakeContext, '/home', 'page_id');
    expect(mockGetPageById).toBeCalledWith(expect.anything(), 'page_id', true, undefined);
  });
  test('should get page by id', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce({});
    mockGetPageId.mockReturnValueOnce('page_id');
    await getPageContent(fakeContext);
    expect(mockGetPageById).toBeCalledTimes(1);
    expect(mockGetPageById).toBeCalledWith(expect.anything(), 'page_id', true, undefined);
  });
  test('should return page content', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce({});
    mockGetPageId.mockReturnValueOnce('page_id');
    mockGetPageById.mockResolvedValueOnce(fakePageContent);
    const pageContent = await getPageContent(fakeContext);
    expect(pageContent).toStrictEqual(fakePageContent);
  });
});
