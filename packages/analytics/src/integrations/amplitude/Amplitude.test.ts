import { Amplitude } from './Amplitude';

const mockAmplitude = {
  init: jest.fn(),
  setUserId: jest.fn(),
  setGroup: jest.fn(),
  track: jest.fn(),
  reset: jest.fn(),
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
        trait: 'trait',
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
