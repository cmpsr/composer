import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import merge from 'lodash/merge';
import { getPageById as getPageByIdFromContentful } from '../contentful';
import type { Replica } from '../contentful/getRouteBySlug/types';
import { configFooter } from './configFooter';
import { configNavbar } from './configNavbar';

export const getPageById = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  pageId: string,
  preview: boolean,
  replica?: Replica
) => {
  const page = await getPageByIdFromContentful(apolloClient, pageId, preview);
  if (page) {
    // Override title from replica
    if (replica?.title) {
      page.title = replica.title;
    }

    // Merge metaConfiguration from replica
    if (replica?.metaConfiguration) {
      page.metaConfiguration = merge({}, page.metaConfiguration, replica.metaConfiguration);
    }

    // Merge metaConfiguration from replica
    if (replica?.globalVariables) {
      page.globalVariables = merge({}, page.globalVariables, replica.globalVariables);
    }

    // Merge modelData from replica
    if (replica?.modelData) {
      page.content = page.content.map((block, blockIndex) => ({
        ...block,
        propsValues: block.models.map((model, modelIndex) => {
          if (replica.modelData?.[blockIndex]?.[modelIndex]) {
            return merge({}, block.propsValues[modelIndex] ?? {}, replica.modelData?.[blockIndex]?.[modelIndex] ?? {});
          }

          return block.propsValues[modelIndex];
        }),
      }));
    }
    page.content = configNavbar(page);
    page.content = configFooter(page);
  }
  return page;
};
