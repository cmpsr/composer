import { FlexProps, ImageProps, TextPairingProps } from '@cmpsr/components';
import { FC } from 'react';

export const mediaBlockVariants = ['vertical', 'horizontal'] as const;
export type MediaBlockVariant = typeof mediaBlockVariants[number];

export interface MediaBlockProps extends FlexProps {
  variant?: MediaBlockVariant;
  alignItems?: 'start' | 'center' | 'end';
}

export interface MediaBlockStaticMembers {
  Image: FC<ImageProps>;
  TextPairing: FC<TextPairingProps>;
}
