import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { compose } from '../../functional';
import { addCommonBlock } from './commonBlocks';
import { CommonBlockFragment, ModelCollectionFragment } from './fragments';
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
          navigationBarsCollection {
            items {
              ...CommonBlockFragment
            }
          }
          footersCollection {
            items {
              ...CommonBlockFragment
            }
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
      ${CommonBlockFragment}
    `,
    variables: {
      pageId,
      preview,
    },
  });

  if (!data.page) return undefined;

  const { id, title, metaConfiguration, contentCollection, navigationBarsCollection, footersCollection } = data.page;
  const content = compose(
    getMainContent(contentCollection),
    addCommonBlock(navigationBarsCollection),
    addCommonBlock(footersCollection)
  )([]);
  return { id, title, content, metaConfiguration };
};

const getMainContent = (contentCollection: { items: BlockResult[] }) => {
  return (currentContent: Block[]) => {
    const pageContent = contentCollection.items.map((item) => ({
      models: item.modelsCollection.items,
      propsValues: item.propsValue || [],
    }));

    return [...currentContent, ...pageContent];
  };
};
