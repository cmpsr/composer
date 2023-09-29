import { TextareaProps as ChakraTextareaProps, ResponsiveValue } from '@chakra-ui/react';

export const textareaVariants = ['outline', 'flushed'] as const;
export const textareaSizes = ['s', 'm', 'l'] as const;

export type TextareaSize = (typeof textareaSizes)[number];
export type TextareaVariant = (typeof textareaVariants)[number];

export interface TextareaProps extends ChakraTextareaProps {
  size?: ResponsiveValue<TextareaSize>;
  variant?: ResponsiveValue<TextareaVariant>;
}
