import { PinInputProps as ChakraPinInputProps, PinInputFieldProps } from '@chakra-ui/react';

export const pinInputVariants = ['outline', 'flushed'] as const;

export type PinInputVariant = typeof pinInputVariants[number];
export const pinInputSizes = ['s', 'm', 'l'] as const;
export type PinInputSize = typeof pinInputSizes[number];

export interface PinInputProps extends Omit<ChakraPinInputProps, 'children'> {
  variant?: PinInputVariant;
  size?: PinInputSize;
  numOfDigits?: number;
  pinInputFieldProps?: PinInputFieldProps;
}

