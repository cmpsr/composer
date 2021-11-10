import { CSSObject } from '@chakra-ui/system';
import { ComponentDefaultProps } from '@chakra-ui/theme';
import { TextVariant } from '../Text';

export const textPairingVariants = [
  'typepairing-font-header-4XL',
  'typepairing-font-header-3XL',
  'typepairing-font-header-2XL',
  'typepairing-font-header-XL',
  'typepairing-font-header-L',
  'typepairing-font-header-M',
  'typepairing-font-body-display-2XL',
  'typepairing-font-body-display-XL',
  'typepairing-font-body-display-L',
  'typepairing-font-body-display-M',
  'typepairing-font-body-display-S',
  'typepairing-font-body-bold',
  'typepairing-font-body-medium',
  'typepairing-font-body-bold-meta',
  'typepairing-font-body-medium-meta',
  'typepairing-font-body-regular-meta',
  'typepairing-font-body-meta-bold',
  'typepairing-font-body-meta-medium',
];
type TextPairingVariantTuple = typeof textPairingVariants;
export type TextPairingVariant = TextPairingVariantTuple[number];

type TextPairingParts = 'label' | 'subLabel';
export type TextPairingStyles = CSSObject &
  {
    [key in TextPairingParts]: {
      variant: TextVariant;
    };
  } & { columnGap: string };

export interface TextPairingProps extends ComponentDefaultProps {
  variant?: TextPairingVariant;
  label: string;
  subLabel: string;
}
