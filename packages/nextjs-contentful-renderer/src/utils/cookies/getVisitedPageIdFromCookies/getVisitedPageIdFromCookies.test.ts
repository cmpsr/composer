import { getVisitedPageIdFromCookies } from '.';

describe('getVisitedPageIdFromCookies', () => {
  const fakeContext: any = {
    req: {
      cookies: {
        'x-cmpsr-pages-/home': 'page_id',
      },
    },
  };

  test('should return page id for existing slug', async () => {
    const pageId = getVisitedPageIdFromCookies(fakeContext, '/home');
    expect(pageId).toStrictEqual('page_id');
  });

  test('should return undefined for non existing slug', () => {
    const pageId = getVisitedPageIdFromCookies(fakeContext, '/other/page');
    expect(pageId).not.toBeDefined();
  });
});
