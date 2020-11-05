import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  strokeWidth?: number;
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
