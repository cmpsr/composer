import { insertSection } from '../utils/insertSection';
import { Block, Page } from 'src/utils/contentful/getPageById/types';

export const configFooter = (page: Partial<Page>): Block[] => insertSection(page.content, page.footer, 'push');
