import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import merge from 'lodash/merge';
import { getPageById as getPageByIdFromContentful } from '../contentful';
import { configFooter } from './configFooter';
import { configNavbar } from './configNavbar';
import { PropsValue } from '@cmpsr/cml';

export const getPageById = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  pageId: string,
  preview: boolean,
  modelData?: PropsValue[][]
) => {
  const page = await getPageByIdFromContentful(apolloClient, pageId, preview);
  if (page) {
    if (modelData) {
      page.content = page.content.map((block, blockIndex) => ({
        ...block,
        propsValues: block.models.map((model, modelIndex) =>
          merge({}, block.propsValues[modelIndex] ?? {}, modelData?.[blockIndex]?.[modelIndex] ?? {})
        ),
      }));
    }
    page.content = configNavbar(page);
    page.content = configFooter(page);
  }
  return page;
};
