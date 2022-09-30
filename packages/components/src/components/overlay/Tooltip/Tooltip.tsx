import React, { FC } from 'react';
import { Tooltip as ChakraTooltip } from '@chakra-ui/react';
import { TooltipProps } from './types';

export const Tooltip: FC<TooltipProps> = ({ hasArrow = true, placement = 'auto', ...props }) => (
  <ChakraTooltip hasArrow={hasArrow} placement={placement} {...props} />
);
