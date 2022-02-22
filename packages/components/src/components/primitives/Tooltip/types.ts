import { ReactNode } from 'react';
import { TooltipProps as ChakraTooltipProps } from '@chakra-ui/react';

export interface TooltipProps extends ChakraTooltipProps {
  label: string | ReactNode;
}
