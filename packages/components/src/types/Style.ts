type StyleObject = {
  text?: string;
  bg?: string;
  'grid-cols'?: number;
  gap?: number;
};

export type Style = {
  default?: StyleObject;
  sm?: StyleObject;
  md?: StyleObject;
  lg?: StyleObject;
  xl?: StyleObject;
};
