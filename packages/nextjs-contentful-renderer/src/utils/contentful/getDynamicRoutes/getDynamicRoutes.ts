import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Route } from '../getRouteBySlug/types';

export const getDynamicRoutes = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  preview: boolean,
  domain: string
): Promise<Route[]> => {
  const { data } = await apolloClient.query({
    query: gql`
      query DynamicRoutes($domain: String!, $preview: Boolean!) {
        routes: routeCollection(
          where: {
            AND: [
              { isStatic: false, domain: $domain }
              { variantsCollection_exists: true }
              { variants: { page_exists: true } }
            ]
          }
          preview: $preview
        ) {
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

  return [...(data?.routes?.items ?? [])].map(({ id, slug, variantsCollection }) => ({
    id,
    slug,
    lastmod: variantsCollection?.items?.[0]?.page?.sys?.publishedAt ?? null,
    variants: [],
  }));
};
