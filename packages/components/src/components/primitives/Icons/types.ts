export const iconSizes = ['xs', 's', 'm', 'l'] as const;
type IconSize = typeof iconSizes[number];

export interface IconProps {
  color?: string;
  boxSize?: string;
  size?: IconSize;
}
