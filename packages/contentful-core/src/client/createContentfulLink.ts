import invariant from 'invariant';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';

export interface Headers {
  [key: string]: string;
}

export interface Options {
  accessToken: string;
  apiVersion?: string;
  environment?: string;
  space: string;
  headers?: Headers;
}

export const createContentfulLink = (options: Options): ApolloLink => {
  const {
    accessToken,
    apiVersion,
    environment,
    space,
    headers,
  } = Object.assign({}, {
    environment: 'master',
    headers: {},
    apiVersion: 'v1',
  }, options);

  invariant(space, 'Contentful `space` ID missing from ContentfulLink initialization.');
  invariant(accessToken, 'Contentful `accessToken` missing from ContentfulLink initialization');

  return createHttpLink({
    headers: {
      ...headers,
      'Authorization': `Bearer ${accessToken}`,
    },
    uri: `https://graphql.contentful.com/content/${apiVersion}/spaces/${space}/environments/${environment}`, // Server URL (must be absolute)
  });
};
