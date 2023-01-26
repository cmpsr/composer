import { BoxProps as ChakraBoxProps, StyleProps } from '@chakra-ui/react';

export interface CardProps extends ChakraBoxProps {
  filled?: boolean;
  elevated?: boolean;
  outlined?: boolean;
}

export type CardStyle = StyleProps;
