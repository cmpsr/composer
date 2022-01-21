import { TextareaProps as ChakraTextareaProps } from "@chakra-ui/react";

export const textareaVariants = [
  "default",
] as const;

export type TextareaVariant = typeof textareaVariants[number];

export interface TextareaProps extends ChakraTextareaProps {
  variant?: TextareaVariant;
}