export type Props = {
  number: number;
  className?: string;
  testId?: string;
  color?: Color;
  maximumNumber?: number;
};

export enum Color {
  Error = 'error',
  Primary = 'primary',
  Secondary = 'secondary',
}
