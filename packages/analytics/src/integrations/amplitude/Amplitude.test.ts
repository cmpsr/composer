import { Amplitude } from './Amplitude';

class Identify {
  set(key: string, value: any) {
    this[key] = value;
  }
}
const mockAmplitudeRevenue = {
  setPrice: jest.fn().mockReturnThis(),
  setQuantity: jest.fn().mockReturnThis(),
  setRevenueType: jest.fn().mockReturnThis(),
};
const mockAmplitude = {
  init: jest.fn(),
  setUserId: jest.fn(),
  setGroup: jest.fn(),
  track: jest.fn(),
  reset: jest.fn(),
  Identify,
  identify: jest.fn(),
  Revenue: jest.fn().mockImplementation(() => mockAmplitudeRevenue),
  revenue: jest.fn(),
};
jest.mock('./loadAmplitude', () => {
  return {
    loadAmplitude: () => {
      (window as any).amplitude = mockAmplitude;
      return mockAmplitude;
    },
  };
});

describe('Amplitude', () => {
  it('should initialize amplitude', () => {
    new Amplitude({ apiKey: '1234' });
    expect(mockAmplitude.init).toHaveBeenCalledWith('1234');
  });
  it('should set user id on identify', () => {
    const amplitude = new Amplitude({ apiKey: '1234' });
    amplitude.identify('user-id');
    expect(mockAmplitude.setUserId).toHaveBeenCalledWith('user-id');
  });
  it('should set user traits on identify', () => {
    const amplitude = new Amplitude({ apiKey: '1234' });
    amplitude.identify('user-id', { prop1: 1, prop2: 'value2' });
    expect(mockAmplitude.identify).toHaveBeenCalledWith(expect.objectContaining({ prop1: 1, prop2: 'value2' }));
  });
  it('should set group on group', () => {
    const amplitude = new Amplitude({ apiKey: '1234' });
    amplitude.group('group-id', { trait: 'trait' });
    expect(mockAmplitude.setGroup).toHaveBeenCalledWith('group-id', { trait: 'trait' });
  });
  it('should track page view', () => {
    const amplitude = new Amplitude({ apiKey: '1234' });
    amplitude.page('page-name', { trait: 'trait' });
    expect(mockAmplitude.track).toHaveBeenCalledWith({
      event_type: '[Amplitude] Page Viewed',
      event_properties: {
        page_name: 'page-name',
        '[Amplitude] Page Domain': window.location.hostname,
        '[Amplitude] Page Location': window.location.href,
        '[Amplitude] Page Path': window.location.pathname,
        '[Amplitude] Page Title': window.document.title,
        '[Amplitude] Page URL': window.location.href,
      },
    });
  });
  it('should track event', () => {
    const amplitude = new Amplitude({ apiKey: '1234' });
    amplitude.track('event-name', { trait: 'trait' });
    expect(mockAmplitude.track).toHaveBeenCalledWith('event-name', { trait: 'trait' });
  });
  it('should reset', () => {
    const amplitude = new Amplitude({ apiKey: '1234' });
    amplitude.reset();
    expect(mockAmplitude.reset).toHaveBeenCalled();
  });
});
