import { Block, Page } from '../../contentful/getPageById/types';
import { insertSection } from '../insertSection';

export const configNavbar = (page: Partial<Page>): Block[] => insertSection(page.content, page.navbar, 'unshift');
