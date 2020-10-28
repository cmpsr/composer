export type BaseProps = {
  className?: string;
  testId?: string;
  theme?: Theme;
};

export type Theme = any;

export enum Shapes {
  Rounded = 'rounded',
  SemiRounded = 'semiRounded',
  Rectangle = 'rectangle',
}
