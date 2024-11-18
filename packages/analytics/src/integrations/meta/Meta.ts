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

  revenue = (price, quantity, type, currency = 'USD') => {
    this.fbq('track', 'Purchase', {
      content_type: 'product',
      contents: [{ id: '1', quantity }],
      value: price,
      currency,
    });
  };

  // Not supported
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  identify: Identify = () => {};
  track: Track = () => {};
  page: Group = () => {};
  group: Group = () => {};
  reset = () => {};
}
