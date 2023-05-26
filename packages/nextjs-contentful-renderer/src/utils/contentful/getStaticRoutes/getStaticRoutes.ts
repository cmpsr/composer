import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Route } from '../getRouteBySlug/types';

export const getStaticRoutes = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  preview: boolean,
  domain: string
): Promise<Route[]> => {
  const { data: routesData } = await apolloClient.query({
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

  let replicasData = null;

  try {
    const { data: replicaDataResponse } = await apolloClient.query({
      query: gql`
        query StaticReplicas($domain: String!, $preview: Boolean!) {
          replicas: replicaCollection(where: { domain: $domain }, preview: $preview) {
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

    replicasData = replicaDataResponse;
  } catch (e) {
    // @todo Potentially track this, so we can reach out to installations that might need to be updated - Ryan
    // Or, warn in the console so they know an update is available
  }

  return [...(routesData?.routes?.items ?? []), ...(replicasData?.replicas?.items ?? [])].map(({ id, slug }) => ({
    id,
    slug,
    variants: [],
  }));
};
