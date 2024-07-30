import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';

export const getRoutesByVariantIds = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  variantIds: string[],
  preview: boolean,
  domain = process.env.SITE_DOMAIN
): Promise<string[]> => {
  const { data } = await apolloClient.query({
    query: gql`
      query routesByVariantIds($ids: [String!], $domain: String, $preview: Boolean) {
        variantCollection(where: { sys: { id_in: $ids } }, preview: $preview) {
          items {
            sys {
              id
            }
            linkedFrom {
              routeCollection {
                items {
                  slug
                  isStatic
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      ids: variantIds,
      domain,
      preview,
    },
  });

  const routeSlugs: string[] = data.variantCollection.items.flatMap((variant: any) =>
    variant.linkedFrom.routeCollection.items
      .filter((route: any) => route.isStatic)
      .map((route: any) => route.slug)
  );

  return [...new Set(routeSlugs)];
};
