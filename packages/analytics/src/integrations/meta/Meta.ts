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

  revenue = (type, price, quantity, productId = '1', currency = 'USD') => {
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

  // Not supported
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  identify: Identify = () => {};
  track: Track = () => {};
  page: Group = () => {};
  group: Group = () => {};
  reset = () => {};
}
