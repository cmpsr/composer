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
    console.debug(JSON.stringify(page.content), JSON.stringify(modelData));

    if (modelData) {
      page.content = page.content.map((block, blockIndex) => ({
        ...block,
        propsValues: block.models.map((model, modelIndex) =>
          merge(block.propsValues[modelIndex], modelData?.[blockIndex]?.[modelIndex] ?? {})
        ),
      }));
    }
    page.content = configNavbar(page);
    page.content = configFooter(page);
  }
  return page;
};
