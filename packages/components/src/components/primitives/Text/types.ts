import { TextProps as ChakraTextProps } from '@chakra-ui/layout';
import { ResponsiveValue } from '@chakra-ui/react';
import { textVariants } from 'theme/ComposerTheme/Components/Text';

export { textVariants };

type TextVariantTuple = typeof textVariants;
export type TextVariant = TextVariantTuple[number];

export interface TextProps extends Omit<ChakraTextProps, 'variant'> {
  variant?: ResponsiveValue<TextVariant>;
}
