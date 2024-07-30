import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Block, Page } from './types';

export const getPagesByBlockIds = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  blockIds: string[],
  preview: boolean
): Promise<string[]> => {
  const { data } = await apolloClient.query({
    query: gql`
      query pagesByBlockIds($ids: [String!], $preview: Boolean) {
        blockCollection(where: { sys: { id_in: $ids } }, preview: $preview) {
          items {
            sys {
              id
            }
            linkedFrom {
              pageCollection {
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
      ids: blockIds,
      preview,
    },
  });

  const pageIds: string[] = data.blockCollection.items.flatMap((block: Block) =>
    block.linkedFrom.pageCollection.items.map((page: Page) => page.sys.id)
  );

  return [...new Set(pageIds)];
};
