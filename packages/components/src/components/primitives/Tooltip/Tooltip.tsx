import React from 'react';
import ReactTooltip from 'react-tooltip';
import colors from '../../../../lib/styles/colors.js';

export const TOOLTIP_DEFAULT_TEST_ID = 'tooltip';

export enum BackgroundColor {
  Primary100 = colors['fill-primary'][100],
  Primary75 = colors['fill-primary'][75],
}

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
  tooltipBackground?: BackgroundColor;
};

export const Tooltip = ({
  id,
  place = TooltipPlace.Top,
  tooltip,
  element,
  testId = TOOLTIP_DEFAULT_TEST_ID,
  tooltipBackground = BackgroundColor.Primary100,
}: Props) => {
  return (
    <div data-testid={testId}>
      <a data-tip data-for={id}>
        {element}
      </a>
      <ReactTooltip
        backgroundColor={`${tooltipBackground}`}
        id={id}
        place={place}
        effect={'solid'}
      >
        {tooltip}
      </ReactTooltip>
    </div>
  );
};
