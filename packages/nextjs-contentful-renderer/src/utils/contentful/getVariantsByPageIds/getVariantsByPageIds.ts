import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Page, Variant } from './types';

export const getVariantsByPageIds = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  pageIds: string[],
  preview: boolean
): Promise<string[]> => {
  const { data } = await apolloClient.query({
    query: gql`
      query variantsByPageIds($ids: [String!], $preview: Boolean) {
        pageCollection(where: { sys: { id_in: $ids } }, preview: $preview) {
          items {
            sys {
              id
            }
            linkedFrom {
              variantCollection {
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
      ids: pageIds,
      preview,
    },
  });

  const variantIds: string[] = data.pageCollection.items.flatMap((page: Page) =>
    page.linkedFrom.variantCollection.items.map((variant: Variant) => variant.sys.id)
  );

  return [...new Set(variantIds)];
};
