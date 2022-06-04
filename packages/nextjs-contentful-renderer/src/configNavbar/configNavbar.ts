import { Block, Page } from 'src/utils/contentful/getPageById/types';
import { insertSection } from '../utils/insertSection';

export const configNavbar = (page: Partial<Page>): Block[] => insertSection(page.content, page.navbar, 'unshift');
