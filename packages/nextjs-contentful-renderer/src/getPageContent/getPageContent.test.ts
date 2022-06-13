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

const mockGetPageById = jest.fn();
const mockGetRouteBySlug = jest.fn();
const mockConfigNavbar = jest.fn();
const mockConfigFooter = jest.fn();
jest.mock('../utils/contentful', () => ({
  getPageById: (...params) => mockGetPageById(...params),
  getRouteBySlug: (...params) => mockGetRouteBySlug(...params),
}));

jest.mock('../configNavbar', () => ({
  configNavbar: (...params) => mockConfigNavbar(...params),
}));

jest.mock('../configFooter', () => ({
  configFooter: (...params) => mockConfigFooter(...params),
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
    expect(mockGetVisitedPageIdFromCookies).toBeCalledTimes(1);
    expect(mockGetVisitedPageIdFromCookies).toBeCalledWith(context, '/');
  });
  test('should return undefined if no slug match', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce(undefined);
    const pageContent = await getPageContent(fakeContext);
    expect(pageContent).not.toBeDefined();
  });
  test('should request page id stored in cookies', async () => {
    mockGetVisitedPageIdFromCookies.mockReturnValueOnce('page_id');
    await getPageContent(fakeContext);
    expect(mockGetPageById).toBeCalledTimes(1);
    expect(mockGetPageById).toBeCalledWith(expect.anything(), 'page_id', true);
  });
  test('should return page content for page id stored in cookies if exists and config navbar', async () => {
    mockGetVisitedPageIdFromCookies.mockReturnValueOnce('page_id');
    mockGetPageById.mockResolvedValueOnce(fakePageContent);
    const pageContent = await getPageContent(fakeContext);
    expect(pageContent).toStrictEqual(fakePageContent);
    expect(mockConfigNavbar).toBeCalledTimes(1);
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
    await getPageContent(fakeContext);
    expect(mockGetPageId).toBeCalledTimes(1);
    expect(mockGetPageId).toBeCalledWith(fakeRoute, undefined);
  });
  test('should get page by id', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce({});
    mockGetPageId.mockReturnValueOnce('page_id');
    await getPageContent(fakeContext);
    expect(mockGetPageById).toBeCalledTimes(1);
    expect(mockGetPageById).toBeCalledWith(expect.anything(), 'page_id', true);
  });
  test('should set cookie with returned page id', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce({});
    mockGetPageId.mockReturnValueOnce('page_id');
    await getPageContent(fakeContext);
    expect(mockSetCookie).toBeCalledTimes(1);
    expect(mockSetCookie).toBeCalledWith(fakeContext, '/home', 'page_id');
  });
  test('should configure navbar', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce({});
    mockGetPageId.mockReturnValueOnce('page_id');
    mockGetPageById.mockResolvedValueOnce({ ...fakePageContent, navbar: {} });
    await getPageContent(fakeContext);
    expect(mockConfigNavbar).toBeCalledTimes(1);
  });
  test('should configure footer', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce({});
    mockGetPageId.mockReturnValueOnce('page_id');
    mockGetPageById.mockResolvedValueOnce({ ...fakePageContent, footer: {} });
    await getPageContent(fakeContext);
    expect(mockConfigFooter).toBeCalledTimes(1);
  });
  test('should return page content', async () => {
    mockGetRouteBySlug.mockResolvedValueOnce({});
    mockGetPageId.mockReturnValueOnce('page_id');
    mockGetPageById.mockResolvedValueOnce(fakePageContent);
    const pageContent = await getPageContent(fakeContext);
    expect(pageContent).toStrictEqual(fakePageContent);
  });
});
