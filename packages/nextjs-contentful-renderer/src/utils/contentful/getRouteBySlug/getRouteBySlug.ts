import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import omit from 'lodash/omit';
import { Replica, Route } from './types';

export const getRouteBySlug = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  slug: string,
  preview: boolean,
  domain = process.env.SITE_DOMAIN
): Promise<Replica | Route> => {
  const normalizedSlug = slug.startsWith('/') ? slug : `/${slug}`;
  const { data: routeData } = await apolloClient.query({
    query: gql`
      query routeBySlug($slug: String, $domain: String, $preview: Boolean) {
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
  if (routeData.route.items.length) {
    return routeData.route.items.map((route) => ({
      id: route.id,
      slug,
      variants: route.variants.items.map((variant: any) => ({
        traffic: variant.traffic,
        page: variant.page.sys.id,
        utmCampaign: variant.utmCampaign,
      })),
    }))[0];
  }

  try {
    const { data: replicaData } = await apolloClient.query({
      query: gql`
        query replicaBySlug($slug: String, $domain: String, $preview: Boolean) {
          replica: replicaCollection(where: { domain: $domain, slug: $slug }, preview: $preview) {
            items {
              sys {
                id
              }
              id
              domain
              metaConfiguration
              modelData
              pageTemplate {
                sys {
                  id
                }
              }
              slug
              title
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

    // Resolve with Replica
    return replicaData.replica.items.map((replica) => ({
      ...omit(replica, ['domain', 'pageTemplate']),
      page: replica?.pageTemplate?.sys?.id,
      slug,
    }))[0];
  } catch (err) {
    // @todo Potentially track this, so we can reach out to installations that might need to be updated - Ryan
    return null;
  }
};
