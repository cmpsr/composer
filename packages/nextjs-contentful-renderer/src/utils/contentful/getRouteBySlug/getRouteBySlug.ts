import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import omit from 'lodash/omit';
import { Replica, Route } from './types';

export const getRouteBySlug = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  slug: string,
  preview: boolean,
  domain = process.env.SITE_DOMAIN,
): Promise<Replica | Route> => {
  const normalizedSlug = slug.startsWith('/') ? slug : `/${slug}`;
  const { data } = await apolloClient.query({
    query: gql`
      query routeBySlug($slug: String, $domain: String, $preview: Boolean) {
        replica: replicaCollection(where: { domain: $domain, slug: $slug }, preview: $preview) {
          items {
            sys {
              id
            }
            id
            domain
            metaConfiguration
            modelData
            globalVariables
            pageTemplate {
              sys {
                id
              }
            }
            slug
            title
          }
        }
        route: routeCollection(where: { domain: $domain, slug: $slug }, preview: $preview) {
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

  // Resolve with Route, if available
  if (data.route.items.length) {
    return data.route.items.map((route) => ({
      id: route.id,
      slug,
      variants: route.variants.items.map((variant: any) => ({
        traffic: variant.traffic,
        page: variant.page.sys.id,
        utmCampaign: variant.utmCampaign,
      })),
    }))[0];
  }

  // Resolve with Replica
  return data.replica.items.map((replica) => ({
    ...omit(replica, ['domain', 'pageTemplate']),
    page: replica?.pageTemplate?.sys?.id,
    slug,
  }))[0];
};
