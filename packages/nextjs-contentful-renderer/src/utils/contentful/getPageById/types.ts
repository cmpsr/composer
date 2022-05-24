import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export interface Page {
  id: string;
  title: string;
  metaConfiguration?: PageMetaData;
  content: Block[];
  theme: Record<string, unknown>;
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

export type PropsValue = ResponsiveValue<Record<string, string>>;

export interface ResponsiveValue<T> {
  base?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
}

export interface GetPageById {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  pageId: string;
  preview?: boolean;
  skipTheme?: boolean;
}
