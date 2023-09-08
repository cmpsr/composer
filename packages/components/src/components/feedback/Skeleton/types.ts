import { SkeletonProps as ChakraSkeletonProps, SkeletonTextProps } from '@chakra-ui/react';

export const skeletonVariants = ['default', 'text', 'circle'] as const;
export type SkeletonVariant = (typeof skeletonVariants)[number];

export interface SkeletonProps extends ChakraSkeletonProps, SkeletonTextProps {
  variant?: SkeletonVariant;
  testId?: string;
}
