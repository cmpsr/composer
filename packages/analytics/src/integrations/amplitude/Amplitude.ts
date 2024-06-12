import { Identify, Group, Page, Track } from 'types';
import { IIntegration } from '../types';
import { loadAmplitude } from './loadAmplitude';
import { AmplitudeConfig } from './types';

export class Amplitude implements IIntegration {
  constructor(config: AmplitudeConfig) {
    const amplitude = loadAmplitude();
    amplitude.init(config.apiKey);
  }

  identify: Identify = (userId) => {
    (window as any).setUserId(userId);
  };

  group: Group = (groupId, traits) => {
    (window as any).amplitude.setGroup(groupId, traits);
  };

  page: Page = (pageName, traits) => {
    
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
    })
  };
  
  track: Track = (eventName, traits = undefined) => {
    (window as any).amplitude.track(eventName, traits);
  };
  
  reset = () => {
    (window as any).reset();
  };
}
