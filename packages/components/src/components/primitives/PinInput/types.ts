import React, { FC } from 'react';
import { PinInputProps as ChakraPinInputProps, PinInputFieldProps } from '@chakra-ui/react';
import { BoxProps } from '@components';

export const pinInputVariants = ['outline', 'flushed'] as const;
export const pinInputSizes = ['s', 'm', 'l'] as const;

export type PinInputVariant = typeof pinInputVariants[number];
export type PinInputSize = typeof pinInputSizes[number];

export interface PinInputProps extends Omit<ChakraPinInputProps, 'children'> {
  variant?: PinInputVariant;
  size?: PinInputSize;
  numOfDigits?: number;
  children?: React.ReactNode;
}

export interface PinInputStaticMembers {
  Container: FC<BoxProps>;
  Field: FC<PinInputFieldProps>;
}
