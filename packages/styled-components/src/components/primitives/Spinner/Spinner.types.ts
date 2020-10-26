export type Props = {
  className?: string;
  strokeWidth?: number;
  testId?: string;
  size?: Sizes;
  color?: Colors;
};

export enum Sizes {
  Small = 'small',
  Large = 'large',
}

export enum Colors {
  Primary = 'primary',
  White = 'white',
}
