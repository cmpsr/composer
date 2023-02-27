import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import merge from 'lodash/merge';
import { getPageById as getPageByIdFromContentful } from '../contentful';
import { configFooter } from './configFooter';
import { configNavbar } from './configNavbar';

export const getPageById = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  pageId: string,
  preview: boolean,
  modelData?: any
) => {
  const page = await getPageByIdFromContentful(apolloClient, pageId, preview);
  if (page) {
    if (modelData) {
      page.content = page.content.map((block, index) => ({
        ...block,
        propsValues: merge(block.propsValues, modelData?.[index] ?? {}),
      }));
    }
    page.content = configNavbar(page);
    page.content = configFooter(page);
  }
  return page;
};
