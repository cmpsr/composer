import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { CommonBlock, Page } from './types';

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
          navigationBarsCollection {
            items {
              default
              position
              block {
                propsValue
                modelsCollection(limit: 1) {
                  items {
                    id
                    base
                    md
                    lg
                    xl
                    xxl
                  }
                }
              }
            }
          }
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

  const { id, title, metaConfiguration, contentCollection, navigationBarsCollection } = data.page;
  let content = contentCollection.items.map((item) => {
    return {
      models: item.modelsCollection.items,
      propsValues: item.propsValue || [],
    };
  });

  content = addCommonBlock(content, navigationBarsCollection);
  return { id, title, content, metaConfiguration };
};

const addCommonBlock = (
  currentContent: Array<{ mdxModels: []; propsValues: [] }>,
  commonBlocks: { items?: CommonBlock[] }
) => {
  let content = [...currentContent];
  const block = getDefaultCommonBlock(commonBlocks);
  content = insertCommonBlock(content, block);
  return content;
};

const getDefaultCommonBlock = (commonBlocks: { items?: CommonBlock[] }) => {
  const blocks = commonBlocks?.items || [];
  const hasCommonBlocks = blocks.length > 0;

  if (!hasCommonBlocks) return null;

  let block = blocks[0];
  const defaultBlock = blocks.find((item) => item.default);

  if (defaultBlock) {
    block = defaultBlock;
  }

  return block;
};

const insertCommonBlock = (
  content: Array<{ mdxModels: []; propsValues: [] }>,
  commonBlock: CommonBlock,
  defaultPosition = 0
) => {
  if (!commonBlock) return content;

  const contentCopy = [...content];

  const item = {
    models: commonBlock?.block?.modelsCollection?.items,
    propsValues: commonBlock?.block?.propsValue || [],
  };

  let position = defaultPosition;
  if (commonBlock.position) {
    position = commonBlock.position - 1;
  }

  contentCopy.splice(position, 0, item);
  return contentCopy;
};
