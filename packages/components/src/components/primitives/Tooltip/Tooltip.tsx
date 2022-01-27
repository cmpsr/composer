import React, { FC } from 'react';
import {
  PlacementWithLogical,
  Tooltip as ChakraTooltip,
  chakra,
} from '@chakra-ui/react';
import { TooltipProps } from './types';

const chakraPlacementPrefixToComposerPositioning = {
  left: 'start',
  right: 'end',
};

export const calculateTooltipPlacement = (
  side: string,
  positioning: string
) => {
  if (positioning === 'center') {
    return side;
  }

  return `${side}-${chakraPlacementPrefixToComposerPositioning[positioning]}`;
};

export const Tooltip: FC<TooltipProps> = ({
  side,
  positioning,
  children,
  ...props
}) => {
  const placement = calculateTooltipPlacement(
    side,
    positioning
  ) as PlacementWithLogical;

  return (
    <ChakraTooltip
      data-testid="cmpsr.tooltip"
      hasArrow
      placement={placement}
      {...props}
    >
      <chakra.span h="full" display="inline-block">
        {children}
      </chakra.span>
    </ChakraTooltip>
  );
};
