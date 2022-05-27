import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { ModelCollectionFragment, ModelFragment } from './fragments';
import { Block, BlockResult, Model, Page } from './types';

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
          footer {
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

  const { id, title, metaConfiguration, contentCollection, navbar, footer } = data.page;
  let content = [];
  content = addNavbar(navbar, content);
  content = addMainContent(contentCollection?.items, content);
  content = addFooter(footer, content);

  const theme = data.page.theme?.theme || null;

  return { id, title, content, metaConfiguration, theme };
};

const addNavbar = (navbar: { model: Model }, content: Block[]) => {
  if (!navbar) {
    return content;
  }
  return [{ models: [navbar?.model || {}], propsValues: [] }, ...content];
};

const addFooter = (footer: { model: Model }, content: Block[]) => {
  if (!footer) {
    return content;
  }
  return [...content, { models: [footer?.model || {}], propsValues: [] }];
};

const addMainContent = (blocksResult: BlockResult[], currentContent: Block[]) => {
  const pageContent = blocksResult?.map(getBlock) || [];
  return [...currentContent, ...pageContent];
};

const getBlock = (blockResult: BlockResult) => ({
  models: blockResult?.modelsCollection?.items,
  propsValues: blockResult?.propsValue || [],
});
