import { GTag } from './GTag';

const mockGTag = {
  push: jest.fn(),
};

jest.mock('./loadGTag', () => {
  return {
    loadGTag: () => {
      (window as any).dataLayer = mockGTag;
      return mockGTag;
    },
  };
});

describe('GTag', () => {
  const gtm = new GTag({ trackingId: '1234' });

  it('should set user id on identify', () => {
    gtm.identify('user-id');
    expect(mockGTag.push).toHaveBeenCalledWith({
      event: 'login',
      userId: 'user-id',
    });
  });
  it('should track page view', () => {
    gtm.page('page-name', { trait: 'trait', path: 'path' });
    expect(mockGTag.push).toHaveBeenCalledWith({
      event: 'page_view',
      page_location: 'path',
      page_title: 'page-name',
    });
  });
  it('should track event', () => {
    gtm.track('event-name', { category: 'cat5', trait: 'trait' });
    expect(mockGTag.push).toHaveBeenCalledWith({
      event: 'event-name',
      event_category: 'cat5',
      trait: 'trait',
    });
  });

  it('should revenue', () => {
    gtm.revenue(19.55, 1, 'new');
    expect(mockGTag.push).toHaveBeenCalledWith({
      event: 'revenue',
      page_location: location.pathname,
      price: 19.55,
      quantity: 1,
      type: 'new',
      currency: 'USD',
      productId: '1',
    });
  });
});
