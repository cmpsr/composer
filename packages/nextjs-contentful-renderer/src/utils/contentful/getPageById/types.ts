import { Theme } from '@cmpsr/components';

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

export interface Block {
  models: Model[];
  propsValues: PropsValue[];
}

export type Model = ResponsiveValue<string>;

export type PropsValue = ResponsiveValue<
  Record<
    string,
    string | number | boolean | Record<string, string | string[] | number | boolean | number[] | boolean[]>
  >
>;

export interface ResponsiveValue<T> {
  base?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
}
