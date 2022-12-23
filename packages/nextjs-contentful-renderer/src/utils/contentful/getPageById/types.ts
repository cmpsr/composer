import { Theme } from '@cmpsr/components';
import { Block } from '@cmpsr/cml';

export interface Page {
  id: string;
  title: string;
  metaConfiguration?: PageMetaData;
  content: Block[];
  theme: Partial<Theme>;
  navbar: Block[];
  footer: Block[];
}

interface PageMetaData {
  [id: string]: PageMeta;
}

interface PageMeta {
  propertyName: string;
  propertyValue: string;
  content: string;
}
