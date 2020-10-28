export enum Color {
  Primary = 'primary',
  White = 'white',
}

export enum CircularSize {
  Small = 'small',
  Large = 'large',
}

export type Props = {
  className?: string;
  strokeWidth?: number;
  testId?: string;
  size?: CircularSize;
  color?: Color;
};
