import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createContentfulLink } from '@cmpsr/contentful-core/lib/client';

/**
 * Creates an ApolloClient to access contentful.
 *
 * @param preview set to `true` to access un-published content
 * @param space contentful space where the data live
 * @param deliveryAccessToken contentful access token
 * @param previewAccessToken contentful preview access token
 * @returns am `ApolloClient` configured to get content from contentful
 */
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
