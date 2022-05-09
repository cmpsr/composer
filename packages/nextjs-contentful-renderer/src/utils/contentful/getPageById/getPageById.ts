import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Page } from './types';

export const getPageById = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  pageId: string,
  preview: boolean
): Promise<Page | undefined> => {
  const { data } = await apolloClient.query({
    query: gql`
      query getPageById($pageId: String!, $preview: Boolean) {
        page(id: $pageId, preview: $preview) {
          id
          title
          metaConfiguration
          contentCollection {
            items {
              modelsCollection {
                items {
                  base
                  md
                  lg
                  xl
                  xxl
                }
              }
              propsValue
            }
          }
        }
      }
    `,
    variables: {
      pageId,
      preview,
    },
  });

  if (!data.page) return undefined;

  const { id, title, metaConfiguration, contentCollection } = data.page;
  const content = contentCollection.items.map((item) => {
    return {
      mdxModels: item.modelsCollection.items,
      propsValues: item.propsValue || [],
    };
  });

  return { id, title, content, metaConfiguration };
};
