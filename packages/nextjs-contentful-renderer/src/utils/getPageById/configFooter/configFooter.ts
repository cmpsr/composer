import { insertSection } from '../insertSection';
import { Block, Page } from '../../contentful/getPageById/types';

export const configFooter = (page: Partial<Page>): Block[] => insertSection(page.content, page.footer, 'push');
