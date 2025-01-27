import { Identify, Group, Page, Track } from 'types';
import { IIntegration } from '../types';
import { loadAmplitude } from './loadAmplitude';
import { AmplitudeConfig } from './types';

export class Amplitude implements IIntegration {
  constructor(config: AmplitudeConfig) {
    const amplitude = loadAmplitude();
    const customConfig = {
      autocapture: {
        formInteractions: config.autoCaptureForms ?? true,
        pageViews: config.autoCaptureViews ?? true,
        fileDownloads: config.autoCaptureDownloads ?? true,
        elementInteractions: config.autoCaptureElementInteractions ?? true,
      },
    };

    console.log(config, 'config');
    console.log(customConfig, 'custom config');
    console.log(config.autoCaptureForms, 'config autocaptureforms');
    console.log(config.autoCaptureForms ?? true, 'config.autoCaptureForms ?? true');
    console.log(config.autoCaptureViews, 'config autoCaptureViews');
    console.log(config.autoCaptureViews ?? true, 'config.autoCaptureViews ?? true');
    console.log(config.autoCaptureDownloads, 'config autoCaptureDownloads');
    console.log(config.autoCaptureDownloads ?? true, 'config.autoCaptureDownloads ?? true');

    amplitude.init(config.apiKey, customConfig);
  }

  identify: Identify = (userId, traits) => {
    const amplitude = (window as any).amplitude;
    amplitude.setUserId(userId);
    if (traits) {
      const identifyEvent = new amplitude.Identify();
      Object.entries(traits).forEach(([key, value]) => {
        identifyEvent.set(key, value);
      });
      amplitude.identify(identifyEvent);
    }
  };

  group: Group = (groupId, traits) => {
    (window as any).amplitude.setGroup(groupId, traits);
  };

  page: Page = (pageName, traits) => {
    console.log('PAGE AAAAAAAAAAAAAAAAAAAAAAAAAAA');
    (window as any).amplitude.track({
      event_type: '[Amplitude] Page Viewed',
      event_properties: {
        page_name: pageName,
        '[Amplitude] Page Domain': window.location.hostname,
        '[Amplitude] Page Location': window.location.href,
        '[Amplitude] Page Path': window.location.pathname,
        '[Amplitude] Page Title': window.document.title,
        '[Amplitude] Page URL': window.location.href,
        ...traits,
      },
    });
  };

  track: Track = (eventName, traits = undefined) => {
    (window as any).amplitude.track(eventName, traits);
  };

  reset = () => {
    (window as any).amplitude.reset();
  };

  revenue = (price, quantity, type) => {
    const amplitude = (window as any).amplitude;
    const event = new amplitude.Revenue().setPrice(price).setQuantity(quantity).setRevenueType(type);
    amplitude.revenue(event);
  };
}
