import React, { FC } from 'react';
import { Skeleton as ChakraSkeleton, SkeletonText, SkeletonCircle } from '@chakra-ui/react';
import { SkeletonProps } from './types';

export const Skeleton: FC<SkeletonProps> = ({ variant = 'default', ...rest }) => {
  const skeletonComponents = {
    default: ChakraSkeleton,
    text: SkeletonText,
    circle: SkeletonCircle,
  };

  const SkeletonComponent = skeletonComponents[variant];

  return <SkeletonComponent {...rest} />;
};
