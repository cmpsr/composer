import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Page } from './types';

export const getPagesByNavbarIds = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  navbarIds: string[],
  preview: boolean,
): Promise<string[] | null> => {
  const { data } = await apolloClient.query({
    query: gql`
      query pagesByNavbarIds($ids: String!, $preview: Boolean) {
        pageCollection(
          where: { navbar: { sys: { id_in: $ids } } }
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
      ids: navbarIds,
      preview,
    },
  });

  const pageIds: string[] = data.pageCollection.items.map((page: Page) => page.sys.id);

  return [...new Set(pageIds)];
};
