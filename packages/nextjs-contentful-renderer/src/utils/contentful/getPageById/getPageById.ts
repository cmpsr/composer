import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { composeRight } from '../../functional';
import { addBlockByPosition, pushBlocksCollection } from '../addBlocks';
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
  const content = composeRight(addBlockByPosition(navbar), pushBlocksCollection(contentCollection?.items || []))([]);
  return { id, title, content, metaConfiguration };
};
