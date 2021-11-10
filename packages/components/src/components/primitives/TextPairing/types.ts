import { CSSObject } from '@chakra-ui/system';
import { ComponentDefaultProps } from '@chakra-ui/theme';
import { TextVariant } from '../Text';

export const textPairingVariants = ['typepairing-font-header-4XL'];
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
