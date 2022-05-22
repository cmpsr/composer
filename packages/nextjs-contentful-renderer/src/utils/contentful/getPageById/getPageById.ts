import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { composeRight } from '../../functional';
import { addCommonBlock } from './commonBlocks';
import { CommonBlockFragment, ModelCollectionFragment } from './fragments';
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
          navigationBarsCollection {
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

  const { id, title, metaConfiguration, contentCollection, navigationBarsCollection } = data.page;
  const content = composeRight(getMainContent(contentCollection), addCommonBlock(navigationBarsCollection))([]);
  return { id, title, content, metaConfiguration };
};

const getMainContent = (contentCollection) => {
  return (currentContent) => {
    const pageContent = contentCollection.items.map((item) => {
      return {
        models: item.modelsCollection.items,
        propsValues: item.propsValue || [],
      };
    });

    return [...currentContent, ...pageContent];
  };
};
