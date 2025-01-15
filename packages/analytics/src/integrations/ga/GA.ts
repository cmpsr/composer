import { IIntegration } from '../types';
import { IGAConfig } from './types';
import { loadGA } from './loadGA';
import { Identify, Track, Page, Group } from '../../types';

export class GA implements IIntegration {
  constructor(config: IGAConfig) {
    if (!config.trackingId) {
      throw new Error('Google Analytics trackingId is required for analytics');
    }
    const ga = loadGA();
    ga('create', config.trackingId, config.cookieDomain || 'auto');
  }

  identify: Identify = (userId) => {
    (window as any).ga('set', 'userId', userId);
    (window as any).ga('send', 'event', 'authentication', 'user-id available');
  };

  // Not supported
   
  group: Group = () => {};

  page: Page = (pageName, traits = {}) => {
    (window as any).ga('send', {
      hitType: 'pageview',
      page: traits.path || location.pathname,
      title: pageName,
    });
  };

  track: Track = (eventName, traits = {}) => {
    (window as any).ga('send', {
      hitType: 'event',
      eventCategory: traits.category || 'None',
      eventAction: eventName,
    });
  };

  // Not supported
   
  reset = () => {};
  revenue = () => {};
}
