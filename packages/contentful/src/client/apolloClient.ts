import { ApolloClient, InMemoryCache } from '@apollo/client';

import { ContentfulLink } from './';

import possibleTypes from '../types/possibleTypes.json';

export default function createApolloClient(initialState, ctx, preview = false) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: ContentfulLink({ preview }),
    cache: new InMemoryCache({ possibleTypes }).restore(initialState)
  });
}
