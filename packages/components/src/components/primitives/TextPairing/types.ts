import { FC } from 'react';
import { CSSObject, ResponsiveValue } from '@chakra-ui/system';
import { ComponentDefaultProps } from '@chakra-ui/theme';
import { FlexProps } from '@cmpsr/components';

import { TextVariant } from '../Text';
import { TextProps } from '..';

export const textPairingVariants = [
  'textpairing-header-4XL',
  'textpairing-header-3XL',
  'textpairing-header-2XL',
  'textpairing-header-XL',
  'textpairing-header-L',
  'textpairing-header-M',
  'textpairing-body-display-2XL',
  'textpairing-body-display-XL',
  'textpairing-body-display-L',
  'textpairing-body-display-M',
  'textpairing-body-display-S',
  'textpairing-body-bold',
  'textpairing-body-medium',
  'textpairing-body-bold-meta',
  'textpairing-body-medium-meta',
  'textpairing-body-regular-meta',
  'textpairing-body-meta-bold',
  'textpairing-body-meta-medium',
] as const;
export type TextPairingVariant = typeof textPairingVariants[number];

type TextPairingParts = 'label' | 'subLabel';
export type TextPairingStyles = CSSObject &
  {
    [key in TextPairingParts]: {
      variant: TextVariant;
    };
  } & { container: FlexProps };

export interface TextPairingProps extends Omit<ComponentDefaultProps, 'variant'> {
  variant?: ResponsiveValue<TextPairingVariant>;
}

export interface TextPairingStaticMembers {
  Label: FC<TextProps & Omit<TextProps, 'variant'>>;
  SubLabel: FC<TextProps & Omit<TextProps, 'variant'>>;
}

export type TextPairingType = FC<TextPairingProps> & TextPairingStaticMembers;
