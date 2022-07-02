import { getStaticPageContent } from '.';

const mockApolloClient = {};
jest.mock('../utils/getApolloClient', () => ({
  getApolloClient: () => mockApolloClient,
}));

const mockGetPageById = jest.fn();
const mockGetRouteBySlug = jest.fn();
jest.mock('../utils/contentful', () => ({
  getPageById: (...params) => mockGetPageById(...params),
  getRouteBySlug: (...params) => mockGetRouteBySlug(...params),
}));

describe('getStaticPageContent', () => {
  const slug = 'some/page/slug';
  test('should get route with default parameters', async () => {
    await getStaticPageContent(slug);
    expect(mockGetRouteBySlug).toBeCalledTimes(1);
    expect(mockGetRouteBySlug).toBeCalledWith(mockApolloClient, slug, false, undefined);
  });

  describe('invalid route', () => {
    test('should get route with given parameters', async () => {
      await getStaticPageContent(slug, true, 'domain');
      expect(mockGetRouteBySlug).toBeCalledTimes(1);
      expect(mockGetRouteBySlug).toBeCalledWith(mockApolloClient, slug, true, 'domain');
    });
    test('should return undefined if no route', async () => {
      mockGetRouteBySlug.mockResolvedValueOnce(undefined);
      const page = await getStaticPageContent(slug);
      expect(page).not.toBeDefined();
    });
    test('should return undefined if route has no variants', async () => {
      mockGetRouteBySlug.mockResolvedValueOnce({});
      const page = await getStaticPageContent(slug);
      expect(page).not.toBeDefined();
    });
    test('should return undefined if route variants are empty', async () => {
      mockGetRouteBySlug.mockResolvedValueOnce({ variants: [] });
      const page = await getStaticPageContent(slug);
      expect(page).not.toBeDefined();
    });
    test('should return undefined if route variant has no page', async () => {
      mockGetRouteBySlug.mockResolvedValueOnce({ variants: [{}] });
      const page = await getStaticPageContent(slug);
      expect(page).not.toBeDefined();
    });
  });

  describe('get page', () => {
    const fakeRoute = { variants: [{ page: 'page_id' }, { page: 'page_id_1' }] };
    beforeEach(() => {
      mockGetRouteBySlug.mockResolvedValueOnce(fakeRoute);
    });
    test('should get the page corresponding to the first variant of the route', async () => {
      await getStaticPageContent(slug);
      expect(mockGetPageById).toBeCalledTimes(1);
      expect(mockGetPageById).toBeCalledWith(mockApolloClient, fakeRoute.variants[0].page, false);
    });
    test('should return page content', async () => {
      const fakePage = { content: 'page' };
      mockGetPageById.mockResolvedValueOnce(fakePage);
      const page = await getStaticPageContent(slug);
      expect(page).toStrictEqual(fakePage);
    });
  });
});
