import { Meta } from './Meta';

const mockMeta = jest.fn();
const init = jest.fn().mockImplementation(() => ({ $fbq: mockMeta }));
jest.mock('./loadMeta', () => {
  return {
    setup: jest.fn().mockImplementation(() => ({ init })),
  };
});

describe('Meta', () => {
  it('should initialize meta pixel', () => {
    new Meta({ pixelAccountId: '1234' });
    expect(init).toHaveBeenCalledWith('1234');
  });

  it('should revenue with new type', () => {
    const metaPixel = new Meta({ pixelAccountId: '1234' });
    metaPixel.revenue(19.55, 1, 'new');
    expect(mockMeta).toHaveBeenCalled();
    expect(mockMeta).toHaveBeenCalledWith('track', 'Purchase', {
      content_type: 'product',
      contents: [{ id: '1', quantity: 1 }],
      value: 19.55,
      currency: 'USD',
    });
  });

  it('should revenue with draft type', () => {
    const metaPixel = new Meta({ pixelAccountId: '1234' });
    metaPixel.revenue(19.55, 1, 'draft');
    expect(mockMeta).toHaveBeenCalled();
    expect(mockMeta).toHaveBeenCalledWith('track', 'InitiateCheckout', {
      content_type: 'product',
      contents: [{ id: '1', quantity: 1 }],
      value: 19.55,
      currency: 'USD',
    });
  });

  it('should track event', () => {
    const metaPixel = new Meta({ pixelAccountId: '1234' });
    metaPixel.track('event-name', { trait: 'trait' });
    expect(mockMeta).toHaveBeenCalled();
    expect(mockMeta).toHaveBeenCalledWith('trackCustom', 'event-name', { trait: 'trait' });
  });
});
