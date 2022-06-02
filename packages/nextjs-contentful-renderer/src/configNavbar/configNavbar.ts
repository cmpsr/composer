import { Block, Navbar, Page } from 'src/utils/contentful/getPageById/types';

export const configNavbar = (page: Partial<Page>): Block[] =>
  page.navbar ? concatNavbar(page.content, page.navbar) : page.content;

const concatNavbar = (originalContent: Block[], navbar: Navbar) => {
  const content = Array.from(originalContent || []);
  const navbarBlock = convertNavbarToBlock(navbar);
  content.unshift(navbarBlock);
  return content;
};

const convertNavbarToBlock = (navbar: Navbar) => ({ models: [navbar.model || {}], propsValues: [] });
