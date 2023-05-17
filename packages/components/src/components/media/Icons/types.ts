import { StyleProps } from '@chakra-ui/react';

export const iconSizes = ['xs', 's', 'm', 'l'] as const;
export type IconSize = typeof iconSizes[number];

export interface IconProps extends StyleProps {
  boxSize?: string | number;
  size?: IconSize;
}
