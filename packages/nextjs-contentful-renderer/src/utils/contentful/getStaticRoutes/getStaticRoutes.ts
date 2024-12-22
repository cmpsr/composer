import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Route } from '../getRouteBySlug/types';

export const getStaticRoutes = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  preview: boolean,
  domain: string,
): Promise<Route[]> => {
  const allData = {
    routes: [],
    replicas: [],
  };

  let shouldContinue = true;
  let totalRetrieved = 0;
  while (shouldContinue) {
    const limit = 500;
    const data = await getData(apolloClient, preview, domain, limit, totalRetrieved);
    allData.routes.push(...data.routes.items);
    allData.replicas.push(...data.replicas.items);
    totalRetrieved += limit;
    shouldContinue = totalRetrieved < data.routes.total || totalRetrieved < data.replicas.total;
  }

  return [...allData.routes, ...allData.replicas].map(({ id, slug }) => ({
    id,
    slug,
    variants: [],
  }));
};

interface SlugsData {
  routes: {
    total: number;
    items: {
      id: string;
      slug: string;
    }[];
  };
  replicas: {
    total: number;
    items: {
      id: string;
      slug: string;
    }[];
  };
}

const getData = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  preview: boolean,
  domain: string,
  limit: number,
  skip: number,
): Promise<SlugsData> => {
  const { data } = await apolloClient.query({
    query: gql`
      query StaticRoutes($domain: String!, $preview: Boolean!, $limit: Int!, $skip: Int!) {
        replicas: replicaCollection(where: { domain: $domain }, limit: $limit, skip: $skip, preview: $preview) {
          total
          items {
            id
            slug
          }
        }
        routes: routeCollection(
          where: { isStatic: true, domain: $domain }
          limit: $limit
          skip: $skip
          preview: $preview
        ) {
          total
          items {
            id
            slug
          }
        }
      }
    `,
    variables: {
      domain,
      preview,
      limit,
      skip,
    },
  });

  return data;
};
