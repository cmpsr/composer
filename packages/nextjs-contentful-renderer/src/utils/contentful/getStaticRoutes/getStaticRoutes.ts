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
        replicas: replicaCollection(where: { domain: $domain }, preview: $preview) {
          items {
            sys {
              id
              publishedAt
            }
            id
            slug
          }
        }
        routes: routeCollection(where: { isStatic: true, domain: $domain }, preview: $preview) {
          items {
            sys {
              id
            }
            id
            slug
            variantsCollection(limit: 1) {
              items {
                page {
                  sys {
                    publishedAt
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      domain,
      preview,
    },
  });

  return [
    ...(data?.routes?.items ?? []).map(({ id, slug, variantsCollection }) => ({
      id,
      lastmod: variantsCollection?.items?.[0]?.page?.sys?.publishedAt ?? null,
      slug,
      variants: [],
    })),
    ...(data?.replicas?.items ?? []).map(({ id, slug, sys }) => ({
      id,
      lastmod: sys?.publishedAt ?? null,
      slug,
      variants: [],
    })),
  ];
};
