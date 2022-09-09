import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { getPageById as getPageByIdFromContentful } from '../contentful';
import { configFooter } from './configFooter';
import { configNavbar } from './configNavbar';

export const getPageById = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  pageId: string,
  preview: boolean
) => {
  const page = await getPageByIdFromContentful(apolloClient, pageId, preview);
  if (page) {
    page.content = configNavbar(page);
    page.content = configFooter(page);
  }
  return page;
};
