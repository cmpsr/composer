const iconSizes = ['s', 'm', 'l'] as const;
type IconSizes = typeof iconSizes[number];
export interface IconProps {
  color?: string;
  boxSize?: string;
  size?: IconSizes;
}
