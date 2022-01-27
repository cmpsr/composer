const iconSizes = ['s', 'm', 'l'] as const;
<<<<<<< HEAD
type IconSizes = typeof iconSizes[number];
export interface IconProps {
  color?: string;
  boxSize?: string;
  size?: IconSizes;
=======
type IconSize = typeof iconSizes[number];
export interface IconProps {
  color?: string;
  boxSize?: string;
  size?: IconSize;
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7
}
