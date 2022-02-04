import { PinInputProps as ChakraPinInputProps, PinInputFieldProps as ChakraPinInputFieldProps } from '@chakra-ui/react';

export const pinInputVariants = ['outline', 'flushed'] as const;

export type PinInputVariant = typeof pinInputVariants[number];
export const pinInputSizes = ['s', 'm', 'l'] as const;
export type PinInputSize = typeof pinInputSizes[number];

export interface PinInputProps extends ChakraPinInputProps {
  variant?: PinInputVariant;
  size?: PinInputSize;
}

export interface PinInputFieldProps extends ChakraPinInputFieldProps {
  variant?: PinInputVariant;
}
