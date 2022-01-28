import { TextareaProps as ChakraTextareaProps } from "@chakra-ui/react";

export const textareaSizes = ['s', 'm'] as const;

export type TextareaSize = typeof textareaSizes[number];

export interface TextareaProps extends ChakraTextareaProps {
  size?: TextareaSize;
}