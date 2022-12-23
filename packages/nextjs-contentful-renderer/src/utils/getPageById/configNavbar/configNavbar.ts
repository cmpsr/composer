import { Block } from '@cmpsr/cml';
import { Page } from '../../contentful/getPageById/types';
import { insertBlock } from '../insertBlock';

export const configNavbar = (page: Partial<Page>): Block[] => insertBlock(page.content, page.navbar?.[0], 'unshift');
