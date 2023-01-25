import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Route } from './types';

export const getRouteBySlug = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  slug: string,
  preview: boolean,
  domain = process.env.SITE_DOMAIN
): Promise<Route> => {
  const normalizedSlug = slug.startsWith('/') ? slug : `/${slug}`;
  const { data } = await apolloClient.query({
    query: gql`
      query routeBySlug($slug: String, $domain: String, $preview: Boolean) {
        route: routeCollection(where: { slug: $slug, domain: $domain }, preview: $preview) {
          items {
            id
            variants: variantsCollection(limit: 10) {
              items {
                traffic
                utmCampaign
                page {
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      slug: normalizedSlug,
      domain,
      preview,
    },
  });

  const result = data.route.items.map((route) => {
    return {
      id: route.id,
      slug,
      variants: route.variants.items.map((variant: any) => ({
        traffic: variant.traffic,
        page: variant.page.sys.id,
        utmCampaign: variant.utmCampaign,
      })),
    };
  })[0];

  return result;
};
