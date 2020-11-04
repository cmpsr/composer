export type BaseProps = {
  className?: string;
  testId?: string;
  theme?: Theme;
};

export type CssCustomizableProps = BaseProps & {
  customCss?: string;
};

export type Theme = any;

export enum Shapes {
  Rounded = 'rounded',
  SemiRounded = 'semiRounded',
  Rectangle = 'rectangle',
}

export enum IconPositions {
  Left = 'left',
  Right = 'right',
}
