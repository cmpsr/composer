import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';

export const getRouteById = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  routeId: string,
  preview: boolean,
  domain = process.env.SITE_DOMAIN
): Promise<string | null> => {
  const { data } = await apolloClient.query({
    query: gql`
      query routeById($id: String!, $domain: String, $preview: Boolean) {
        routeCollection(where: { sys: { id: $id }, domain: $domain }, preview: $preview) {
          items {
            slug
          }
        }
      }
    `,
    variables: {
      id: routeId,
      domain,
      preview,
    },
  });

  return data.routeCollection.items[0]?.slug || null;
};
