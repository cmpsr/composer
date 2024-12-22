import { Identify, Group, Track } from 'types';
import { IIntegration } from '../types';
import { setup } from './loadMeta';
import { MetaConfig } from './types';

export class Meta implements IIntegration {
  private readonly fbq;

  constructor(config: MetaConfig) {
    const { $fbq } = setup().init(config.pixelAccountId);
    this.fbq = $fbq;
  }

  revenue = (price, quantity, type, productId = '1', currency = 'USD') => {
    if (type.toLowerCase() !== 'new') {
      this.fbq('track', 'InitiateCheckout', {
        content_type: 'product',
        contents: [{ id: productId, quantity }],
        value: price,
        currency,
      });
    } else {
      this.fbq('track', 'Purchase', {
        content_type: 'product',
        contents: [{ id: productId, quantity }],
        value: price,
        currency,
      });
    }
  };

  track: Track = (eventName, traits = {}) => {
    this.fbq('trackCustom', eventName, traits);
  };

  // Not supported
   
  identify: Identify = () => {};
  page: Group = () => {}; // Each time the Pixel loads, it automatically calls fbq('track', 'PageView') to track a PageView standard event
  group: Group = () => {};
  reset = () => {};
}
