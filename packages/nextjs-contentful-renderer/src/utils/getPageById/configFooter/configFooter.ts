import { Block } from '@cmpsr/cml';
import { insertBlock } from '../insertBlock';
import { Page } from '../../contentful/getPageById/types';

export const configFooter = (page: Partial<Page>): Block[] => insertBlock(page.content, page.footer?.[0], 'push');
