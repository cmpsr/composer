import invariant from 'invariant';
import fetch from 'cross-fetch';

import { createHttpLink } from 'apollo-link-http';

export const createContentfulLink = (options) => {
  const {
    accessToken,
    apiVersion,
    environment,
    space,
    headers,
  } = Object.assign(
    {},
    {
      environment: 'master',
      headers: {},
      apiVersion: 'v1',
    },
    options
  );

  invariant(
    space,
    'Contentful `space` ID missing from ContentfulLink initialization.'
  );
  invariant(
    accessToken,
    'Contentful `accessToken` missing from ContentfulLink initialization'
  );

  return createHttpLink({
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
    fetch,
    uri: `https://graphql.contentful.com/content/${apiVersion}/spaces/${space}/environments/${environment}`, // Server URL (must be absolute)
  });
};
