import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { composeRight } from '../../functional';
import { addCommonBlock } from './commonBlocks';
import { ModelCollectionFragment } from './fragments';
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
          navbar {
            modelsCollection(limit: 1) {
              ...ModelFragment
            }
            propsValue
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
    `,
    variables: {
      pageId,
      preview,
    },
  });

  if (!data.page) return undefined;

  const { id, title, metaConfiguration, contentCollection, navbar } = data.page;
  const content = composeRight(getMainContent(contentCollection), addCommonBlock(navbar, 0))([]);
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
