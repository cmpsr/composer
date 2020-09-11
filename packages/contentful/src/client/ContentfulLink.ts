import { HttpLink } from '@apollo/client';
import fetch from 'isomorphic-unfetch';

import { getAuthLink } from './';

export const ContentfulLink = ({ preview = false }) => {
  const environment = process.env.CONTENTFUL_ENVIRONMENT
    ? process.env.CONTENTFUL_ENVIRONMENT
    : 'master';
  return getAuthLink(preview).concat(
    new HttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${environment}`, // Server URL (must be absolute)
      fetch
    })
  );
};
