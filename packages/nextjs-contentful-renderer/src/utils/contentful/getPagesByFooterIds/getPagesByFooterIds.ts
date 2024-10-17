import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Page } from './types';

export const getPagesByFooterIds = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  footerIds: string[],
  preview: boolean,
): Promise<string[] | null> => {
  const { data } = await apolloClient.query({
    query: gql`
      query pagesByFooterIds($ids: [String!], $preview: Boolean) {
        pageCollection(
          where: { footer: { sys: { id_in: $ids } } }
          preview: $preview
        ) {
          items {
            sys {
              id
            }
          }
        }
      }
    `,
    variables: {
      ids: footerIds,
      preview,
    },
  });

  const pageIds: string[] = data.pageCollection.items.map((page: Page) => page.sys.id);

  return [...new Set(pageIds)];
};
