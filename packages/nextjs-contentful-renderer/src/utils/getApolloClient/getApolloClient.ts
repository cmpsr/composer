import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createContentfulLink } from '@cmpsr/contentful-core';

export const getApolloClient = ({
  preview = false,
  space = process.env.CONTENTFUL_SPACE_ID,
  deliveryAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
  previewAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW,
  environment = process.env.CONTENTFUL_ENVIRONMENT,
} = {}) =>
  new ApolloClient({
    link: createContentfulLink({
      space,
      accessToken: preview ? previewAccessToken : deliveryAccessToken,
      environment,
    }) as any,
    cache: new InMemoryCache({}),
  });
