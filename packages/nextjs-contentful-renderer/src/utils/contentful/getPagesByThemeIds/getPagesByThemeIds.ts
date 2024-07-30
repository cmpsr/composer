import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Page } from './types';

export const getPagesByThemeIds = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  themeIds: string[],
  preview: boolean,
): Promise<string[] | null> => {
  const { data } = await apolloClient.query({
    query: gql`
      query pagesByThemeIds($ids: String!, $preview: Boolean) {
        pageCollection(
          where: { theme: { sys: { id_in: $ids } } }
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
      ids: themeIds,
      preview,
    },
  });

  const pageIds: string[] = data.pageCollection.items.map((page: Page) => page.sys.id);

  return [...new Set(pageIds)];
};
