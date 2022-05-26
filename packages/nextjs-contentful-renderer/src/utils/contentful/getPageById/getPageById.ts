import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { ModelCollectionFragment, ModelFragment } from './fragments';
import { Block, BlockResult, Page } from './types';

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

  const { id, title, metaConfiguration, contentCollection, navbar } = data.page;
  const theme = data.page.theme?.theme || null;
  let content = [];

  if (navbar) {
    content.push({ models: [navbar?.model || {}], propsValues: [] });
  }

  content = addMainContent(contentCollection?.items, content);

  return { id, title, content, metaConfiguration, theme };
};

const addMainContent = (blocksResult: BlockResult[], currentContent: Block[]) => {
  const pageContent = blocksResult?.map(getBlock) || [];

  return [...currentContent, ...pageContent];
};

const getBlock = (blockResult: BlockResult) => ({
  models: blockResult?.modelsCollection?.items,
  propsValues: blockResult?.propsValue || [],
});
