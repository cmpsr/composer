export interface ShortLink {
  shortLink: string;
  previewLink?: string;
}

export interface LinkShortenerConfig {
  apiKey: string;
  domainUriPrefix: string;
}
