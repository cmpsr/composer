import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

import { ContentfulLink } from './';

import introspectionQueryResultData from '../schema/fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

export default function createApolloClient(initialState, ctx, preview = false) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: ContentfulLink({ preview }),
    cache: new InMemoryCache({ fragmentMatcher }).restore(initialState),
  });
}
