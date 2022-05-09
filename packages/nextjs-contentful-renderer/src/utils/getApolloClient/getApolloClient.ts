import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createContentfulLink } from '@cmpsr/contentful-core/lib/client';

export const getApolloClient = (
  preview = false,
  space = process.env.CONTENTFUL_SPACE_ID,
  deliveryAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
  previewAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW
) =>
  new ApolloClient({
    link: createContentfulLink({
      space,
      accessToken: preview ? previewAccessToken : deliveryAccessToken,
    }),
    cache: new InMemoryCache({}),
  });
