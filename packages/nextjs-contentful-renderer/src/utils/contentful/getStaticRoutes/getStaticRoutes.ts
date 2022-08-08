import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Route } from '../getRouteBySlug/types';

export const getStaticRoutes = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  preview: boolean,
  domain: string
): Promise<Route[]> => {
  const { data } = await apolloClient.query({
    query: gql`
      query StaticRoutes($domain: String!, $preview: Boolean!) {
        routes: routeCollection(where: { isStatic: true, domain: $domain }, preview: $preview) {
          items {
            sys {
              id
            }
            id
            slug
          }
        }
      }
    `,
    variables: {
      domain,
      preview,
    },
  });

  if (!Array.isArray(data?.routes?.items)) {
    return [];
  }

  return data.routes.items.map(({ id, slug }) => ({
    id,
    slug,
    variants: [],
  }));
};
