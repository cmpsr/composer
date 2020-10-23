export type Props = {
  text: string;
  className?: string;
  highlightClassName?: string;
  testId?: string;
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
