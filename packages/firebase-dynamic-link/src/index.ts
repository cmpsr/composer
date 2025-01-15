import { LinkShortener } from './integration/LinkShortener';

export * from './integration/types';
export * from './integration/LinkShortener';

const getLinkShortener = (
  domainUriPrefix: string,
  apiKey: string = process.env.FIREBASE_API_KEY,
): LinkShortener => {
  return new LinkShortener({ domainUriPrefix, apiKey });
};

export default getLinkShortener;
