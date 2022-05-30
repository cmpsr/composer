import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Block, Model, Page } from 'src/utils/contentful/getPageById/types';
import { getDefaultNavbar } from '../utils/contentful/getDefaultNavbar';

interface QueryConfig {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  domain: string | undefined;
  preview: boolean;
}

export const configNavbar = async (
  page: Partial<Page>,
  { apolloClient, domain, preview }: QueryConfig
): Promise<Block[]> => {
  const pageNavbar = page?.navbar;
  const content = page?.content;

  if (pageNavbar) {
    return concatNavbar(content, pageNavbar);
  }

  const defaultUniversalNavbar = await getDefaultNavbar(apolloClient, domain, preview);

  if (!defaultUniversalNavbar) {
    return content;
  }

  return concatNavbar(content, defaultUniversalNavbar);
};

const concatNavbar = (originalContent: Block[], navbar: { model: Model }) => {
  const content = Array.from(originalContent || []);
  const navbarBlock = convertNavbarToBlock(navbar);
  content.unshift(navbarBlock);
  return content;
};

const convertNavbarToBlock = (navbar: { model: Model }) => {
  return { models: [navbar?.model || {}], propsValues: [] };
};
