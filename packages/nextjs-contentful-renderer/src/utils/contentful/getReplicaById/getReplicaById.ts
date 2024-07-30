import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';

export const getReplicaById = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  replicaId: string,
  preview: boolean,
  domain = process.env.SITE_DOMAIN
): Promise<string | null> => {
  const { data } = await apolloClient.query({
    query: gql`
      query replicaById($id: String!, $domain: String, $preview: Boolean) {
        replicaCollection(where: { sys: { id: $id } }, preview: $preview, limit: 1) {
          items {
            slug
          }
        }
      }
    `,
    variables: {
      id: replicaId,
      domain,
      preview,
    },
  });

  return data.replicaCollection.items[0]?.slug || null;
};
