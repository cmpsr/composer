import { TextareaProps as ChakraTextareaProps } from "@chakra-ui/react";

export const textareaSizes = ['s', 'm'] as const;
export const textareaVariants = ["default"] as const;

export type TextareaSize = typeof textareaSizes[number];
export type TextareaVariant = typeof textareaVariants[number];

export interface TextareaProps extends ChakraTextareaProps {
  variant?: TextareaVariant;
  size?: TextareaSize;
}