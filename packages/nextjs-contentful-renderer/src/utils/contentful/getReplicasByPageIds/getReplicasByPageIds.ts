import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Replica } from './types';

export const getReplicasByPageIds = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  pageIds: string[],
  preview: boolean,
  domain = process.env.SITE_DOMAIN
): Promise<string[]> => {
  const { data } = await apolloClient.query({
    query: gql`
      query replicasByPageIds($ids: [String!], $domain: String, $preview: Boolean) {
        replicaCollection(where: { pageTemplate: { sys: { id_in: $ids } } }, preview: $preview) {
          items {
            slug
          }
        }
      }
    `,
    variables: {
      ids: pageIds,
      domain,
      preview,
    },
  });

  const replicaSlugs: string[] = data.replicaCollection.items.map((replica: Replica) => replica.slug);

  return [...new Set(replicaSlugs)];
};
