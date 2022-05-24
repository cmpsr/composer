import { gql } from '@apollo/client';
import { GetPageById, Page } from './types';

export const getPageById = async ({
  apolloClient,
  pageId,
  preview,
  skipTheme,
}: GetPageById): Promise<Page | undefined> => {
  const { data } = await apolloClient.query({
    query: gql`
      query getPageById($pageId: String!, $preview: Boolean, $skipTheme: Boolean!) {
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
          theme @skip(if: $skipTheme) {
            defaultTheme
            theme
          }
        }
      }
    `,
    variables: {
      pageId,
      preview,
      skipTheme,
    },
  });

  if (!data.page) return undefined;

  const { id, title, metaConfiguration, contentCollection, theme } = data.page;
  const content = contentCollection.items.map((item) => {
    return {
      models: item.modelsCollection.items,
      propsValues: item.propsValue || [],
    };
  });

  return { id, title, content, metaConfiguration, theme: theme?.theme };
};
