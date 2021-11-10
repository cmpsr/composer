import { CSSObject } from '@chakra-ui/system';
import { ComponentDefaultProps } from '@chakra-ui/theme';
import { TextVariant } from '../Text';

export const textPairingVariants = [
  'textpairing-font-header-4XL',
  'textpairing-font-header-3XL',
  'textpairing-font-header-2XL',
  'textpairing-font-header-XL',
  'textpairing-font-header-L',
  'textpairing-font-header-M',
  'textpairing-font-body-display-2XL',
  'textpairing-font-body-display-XL',
  'textpairing-font-body-display-L',
  'textpairing-font-body-display-M',
  'textpairing-font-body-display-S',
  'textpairing-font-body-bold',
  'textpairing-font-body-medium',
  'textpairing-font-body-bold-meta',
  'textpairing-font-body-medium-meta',
  'textpairing-font-body-regular-meta',
  'textpairing-font-body-meta-bold',
  'textpairing-font-body-meta-medium',
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
