export interface Block {
  models: Model[];
  propsValues: PropsValue[];
}

export type Model = ResponsiveValue<string>;

export type PropsValue = ResponsiveValue<
  Record<
    string,
    | string
    | number
    | boolean
    | Array<string>
    | Record<string, string | string[] | number | boolean | number[] | boolean[]>
    | undefined
    | null
  >
>;

export interface ResponsiveValue<T> {
  base?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
}

export const breakpoints = ['base', 'md', 'lg', 'xl', 'xxl'];
