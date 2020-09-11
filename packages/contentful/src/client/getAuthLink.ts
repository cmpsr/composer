/* istanbul ignore file */
import { setContext } from '@apollo/client/link/context';

export const getAuthLink = (preview = false) => {
  return setContext((_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: preview
        ? `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW}`
        : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY}`
    }
  }));
};
