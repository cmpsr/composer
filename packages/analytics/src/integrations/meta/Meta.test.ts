import { Meta } from './Meta';

const mockMeta = {
  revenue: jest.fn(),
};
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

  it('should revenue', () => {
    const metaPixel = new Meta({ pixelAccountId: '1234' });
    metaPixel.revenue(19.55, 1, 'new', 'USD');
    expect(mockMeta.revenue).toHaveBeenCalled();
    expect(mockMeta.revenue).toHaveBeenCalledWith('track', 'Purchase', {
      content_type: 'product',
      contents: [{ id: '1', quantity: 1 }],
      value: 19.55,
      currency: 'USD',
    });
  });
});
