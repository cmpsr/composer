import { getPageId } from '.';

describe('getPageId', () => {
  const route = {
    id: 'route_id',
    slug: 'slug',
    variants: [
      {
        traffic: 0.7,
        page: 'page_a_id',
      },
      {
        traffic: 0.3,
        page: 'page_b_id',
      },
      {
        traffic: 0,
        page: 'page_campaign_id',
        utmCampaign: 'campaign',
      },
    ],
  };
  test('should get variant matching the utmCampaign', () => {
    const pageId = getPageId(route, 'campaign');
    expect(pageId).toBe(route.variants[2].page);
  });
  test('should get variant matching an item of the utmCampaign', () => {
    const pageId = getPageId(route, ['campaign']);
    expect(pageId).toBe(route.variants[2].page);
  });
  test.each`
    randomValue | expectedPage
    ${0.6}      | ${'page_a_id'}
    ${0.8}      | ${'page_b_id'}
    ${1.1}      | ${'page_a_id'}
  `('should return $expectedPage page id for $randomValue', ({ randomValue, expectedPage }) => {
    const randomSpy = jest.spyOn(Math, 'random');
    randomSpy.mockReturnValue(randomValue);
    const pageId = getPageId(route);
    expect(pageId).toBe(expectedPage);
  });
});
