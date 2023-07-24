import { Theme } from '@cmpsr/components';
import { Block, PropsValue } from '@cmpsr/cml';

export interface Page {
  id: string;
  title: string;
  metaConfiguration?: PageMetaData;
  globalVariables?: PropsValue;
  content: Block[];
  theme: Partial<Theme>;
  navbar: Block[];
  footer: Block[];
}

export interface PageMetaData {
  [id: string]: PageMeta;
}

interface PageMeta {
  propertyName: string;
  propertyValue: string;
  content: string;
}
