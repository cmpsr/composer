import { TextProps as ChakraTextProps } from '@chakra-ui/layout';
import { textVariants } from '../../../theme/ComposerTheme/Components/Text';

export { textVariants };

type TextVariantTuple = typeof textVariants;
export type TextVariant = TextVariantTuple[number];

export interface TextProps extends ChakraTextProps {
  variant?: TextVariant;
}
