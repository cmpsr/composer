import { Block, Model, Page } from 'src/utils/contentful/getPageById/types';

export const configNavbar = async (page: Partial<Page>): Promise<Block[]> => {
  const pageNavbar = page?.navbar;
  const content = page?.content;

  if (pageNavbar) {
    return concatNavbar(content, pageNavbar);
  }
  return content;
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
