import { HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

export interface ContentfulLinkOptions {
  accessToken: string;
  space: string;
  environment?: string;
  apiVersion?: string;
  headers?: Record<string, string>;
}

export const createContentfulLink = ({
  accessToken,
  space,
  environment = 'master',
  apiVersion = 'v1',
  headers = {},
}: ContentfulLinkOptions): HttpLink => {
  if (!space) {
    throw new Error('Contentful `space` ID is required for initialization.');
  }

  if (!accessToken) {
    throw new Error('Contentful `accessToken` is required for initialization.');
  }

  const uri = `https://graphql.contentful.com/content/${apiVersion}/spaces/${space}/environments/${environment}`;

  return new HttpLink({
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
    fetch,
    uri,
  });
};
