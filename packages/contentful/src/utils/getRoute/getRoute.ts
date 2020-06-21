import gql from 'graphql-tag';

import createApolloClient from 'client/apolloClient';
import { RouteQuery } from 'types/RouteQuery';

export const getRoute = async (slug: string): Promise<RouteQuery> => {
  const apolloClient = createApolloClient({}, true, false);
  const result = await apolloClient.query({
    query: gql(`query RouteQuery($slug: String!) {
    routeCollection(where: { slug: $slug }, limit: 1) {
      items {
        id
        slug
        page {
          sys {
            id
          }
        }
        variants
      }
    }
  }
  `),
    variables: { slug },
  });
  return result.data;
};
