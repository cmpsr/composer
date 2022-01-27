import { TooltipProps as ChakraTooltipProps } from '@chakra-ui/react';

export const tooltipSides = ['top', 'bottom', 'left', 'right'] as const;
export const tooltipPositions = ['left', 'right', 'center'] as const;

export type TooltipSide = typeof tooltipSides[number];
export type TooltipPosition = typeof tooltipPositions[number];

export interface TooltipProps extends ChakraTooltipProps {
  side?: TooltipSide;
  positioning?: TooltipPosition;
  label: string;
}
