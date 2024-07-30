import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Block, Model } from './types';

export const getBlocksByModelIds = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  modelIds: string[],
  preview: boolean
): Promise<string[]> => {
  const { data } = await apolloClient.query({
    query: gql`
      query blocksByModelIds($ids: [String!], $preview: Boolean) {
        modelCollection(where: { sys: { id_in: $ids } }, preview: $preview) {
          items {
            sys {
              id
            }
            linkedFrom {
              blockCollection {
                items {
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
      ids: modelIds,
      preview,
    },
  });

  const blockIds: string[] = data.modelCollection.items.flatMap((model: Model) =>
    model.linkedFrom.blockCollection.items.map((block: Block) => block.sys.id)
  );

  return [...new Set(blockIds)];
};
