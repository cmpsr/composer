import { IIntegration } from '../types';
import { ISegmentConfig } from './types';
import { loadSnippet } from './loadSnippet';
import { Identify, Track, Page, Group } from '../../types';

export class Segment implements IIntegration {
  constructor(config: ISegmentConfig) {
    if (!config.writeKey) {
      throw new Error('Segment writeKey is required for analytics');
    }
    const analytics = loadSnippet();
    analytics.load(config.writeKey);
  }

  identify: Identify = (userId, traits) => {
    (window as any).analytics.identify(userId, traits);
  };

  group: Group = (groupId, traits) => {
    (window as any).analytics.group(groupId, traits);
  };

  page: Page = (pageName, traits = {}) => {
    const { category, ...rest } = traits;
    if (category) {
      (window as any).analytics.page(category, pageName, rest);
    } else {
      (window as any).analytics.page(pageName, rest);
    }
  };

  track: Track = (eventName, traits) => {
    (window as any).analytics.track(eventName, traits);
  };

  reset = () => {
    (window as any).analytics.reset();
  };

  // Not supported
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  revenue = () => {};
  user = () => ({});
}
