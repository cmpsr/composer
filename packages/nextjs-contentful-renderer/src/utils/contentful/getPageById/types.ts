export interface Page {
  id: string;
  title: string;
  metaConfiguration?: PageMetaData;
  content: Block[];
}

interface PageMetaData {
  [id: string]: PageMeta;
}

interface PageMeta {
  propertyName: string;
  propertyValue: string;
  content: string;
}

interface Block {
  models: Model[];
  propsValues: PropValue[];
}

type Model = ResponsiveValue<string>;

type PropValue = ResponsiveValue<Record<string, string>>;

interface ResponsiveValue<T> {
  base?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
}
