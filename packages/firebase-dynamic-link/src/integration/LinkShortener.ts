import { LinkShortenerConfig, ShortLink } from './types';
import { SERVICE_URL } from './constants';
import fetch from 'isomorphic-unfetch';

export class LinkShortener {
  private config: LinkShortenerConfig;

  constructor(config: LinkShortenerConfig) {
    this.config = config;
  }

  async short(url: string): Promise<ShortLink> {
    const response = await fetch(SERVICE_URL + this.config.apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dynamicLinkInfo: {
          domainUriPrefix: this.config.domainUriPrefix,
          link: url,
        },
      }),
    });
    return response.json();
  }
}
