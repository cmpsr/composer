import { Block, Footer, Page } from 'src/utils/contentful/getPageById/types';

export const configFooter = (page: Partial<Page>): Block[] =>
  page.footer ? concatFooter(page.content, page.footer) : page.content;

const concatFooter = (originalContent: Block[], footer: Footer) => {
  const content = Array.from(originalContent || []);
  const footerBlock = convertFooterToBlock(footer);
  content.push(footerBlock);
  return content;
};

const convertFooterToBlock = (footer: Footer) => ({ models: [footer.model || {}], propsValues: [] });
