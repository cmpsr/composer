import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { ModelCollectionFragment, ModelFragment } from './fragments';
import { BlockResult, Page } from './types';

export const getPageById = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  pageId: string,
  preview: boolean
): Promise<Page | undefined> => {
  const { data } = await apolloClient.query({
    query: gql`
      query getPageById($pageId: String!, $preview: Boolean) {
        page(id: $pageId, preview: $preview) {
          i
          title
          metaConfiguration
          navbar {
            model {
              ...ModelFragment
            }
          }
          theme {
            theme
          }
          contentCollection {
            items {
              modelsCollection {
                ...ModelCollectionFragment
              }
              propsValue
            }
          }
        }
      }
      ${ModelCollectionFragment}
      ${ModelFragment}
    `,
    variables: {
      pageId,
      preview,
    },
  });

  if (!data.page) return undefined;

  const { id, title, metaConfiguration, contentCollection } = data.page;
  const theme = data.page.theme?.theme || null;
  const navbar = data.page.navbar || null;

  const content = addMainContent(contentCollection?.items);

  return { id, title, content, metaConfiguration, theme, navbar };
};

const addMainContent = (blocksResult: BlockResult[]) => {
  return blocksResult?.map(getBlock) || [];
};

const getBlock = (blockResult: BlockResult) => ({
  models: blockResult?.modelsCollection?.items,
  propsValues: blockResult?.propsValue || [],
});
