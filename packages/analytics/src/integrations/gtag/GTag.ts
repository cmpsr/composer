import { IIntegration } from '../types';
import { IGTagConfig } from './types';
import { loadGTag } from './loadGTag';
import { Identify, Track, Page, Group } from 'types';

export class GTag implements IIntegration {
  constructor(config: IGTagConfig) {
    if (!config.trackingId) {
      throw new Error('TAG ID is required for gTag');
    }
    loadGTag(config);
  }

  identify: Identify = (userId) => {
    (window as any).dataLayer.push(function () {
      this.set('userId', userId);
    });
    (window as any).dataLayer.push({
      event: 'login',
      userId,
    });
  };

  // Not supported
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  group: Group = () => {};

  page: Page = (pageName, traits = {}) => {
    (window as any).dataLayer.push({
      event: 'page_view',
      page_location: traits.path || location.pathname,
      page_title: pageName,
    });
  };

  track: Track = (eventName, { category, ...traits } = {}) => {
    (window as any).dataLayer.push({
      event: eventName,
      event_category: category || 'None',
      ...traits,
    });
  };

  reset = () => {
    (window as any).dataLayer.push(function () {
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      this.reset();
    });
  };

  revenue = (price, quantity, type, productId = '1', currency = 'USD') => {
    (window as any).dataLayer.push({
      event: 'revenue',
      page_location: location.pathname,
      price,
      quantity,
      type,
      currency,
      productId,
    });
  };
}
