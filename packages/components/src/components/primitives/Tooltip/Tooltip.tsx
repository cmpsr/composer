import React from 'react';
import cn from 'classnames';
import ReactTooltip from 'react-tooltip';
import { getStyles } from './Tooltip.styles';

export const TOOLTIP_DEFAULT_TEST_ID = 'tooltip';

export enum TooltipPlace {
  Left = 'left',
  Right = 'right',
  Bottom = 'bottom',
  Top = 'top',
}

type Props = {
  id: string;
  place?: TooltipPlace;
  tooltip: React.ReactNode;
  element: React.ReactNode;
  testId?: string;
  backgroundColor?: string;
  className?: string;
};

export const Tooltip = ({
  id,
  place = TooltipPlace.Top,
  tooltip,
  element,
  testId = TOOLTIP_DEFAULT_TEST_ID,
  className,
  backgroundColor,
}: Props) => {
  const { arrowColor, defaultColor } = getStyles(place, backgroundColor);
  return (
    <div data-testid={testId}>
      <a data-tip data-for={id}>
        {element}
      </a>
      <ReactTooltip
        id={id}
        place={place}
        effect={'solid'}
        className={cn(defaultColor, arrowColor, className)}
      >
        {tooltip}
      </ReactTooltip>
    </div>
  );
};
