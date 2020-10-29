import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  text: string;
  highlightClassName?: string;
  size?: Sizes;
  backgroundColor?: BackgroundColors;
  isHighlighted?: boolean;
};

export enum Sizes {
  ExtraSmall = 'extraSmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum BackgroundColors {
  Primary900 = 'primary900',
  Primary600 = 'primary600',
}
