import React from 'react';
import cn from 'classnames';
import ReactTooltip from 'react-tooltip';
import tw from 'twin.macro';
import styled from 'styled-components';

export const TOOLTIP_DEFAULT_TEST_ID = 'tooltip';

export enum BackgroundColor {
  Primary100 = '!bg-fill-primary-100',
  Primary75 = '!bg-fill-primary-75',
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
  backgroundColor?: BackgroundColor;
  className?: string;
};

const TooltipWrapper = styled(ReactTooltip)`
  &:after {
    ${({ background }) =>
      background &&
      (background === BackgroundColor.Primary100
        ? tw`border-fill-primary-100`
        : tw`border-fill-primary-75`)}
  }
  &:before {
    ${({ background }) =>
      background &&
      (background === BackgroundColor.Primary100
        ? tw`border-fill-primary-100`
        : tw`border-fill-primary-75`)}
  }
`;

export const Tooltip = ({
  id,
  place = TooltipPlace.Top,
  tooltip,
  element,
  testId = TOOLTIP_DEFAULT_TEST_ID,
  backgroundColor = BackgroundColor.Primary100,
  className,
}: Props) => {
  return (
    <div data-testid={testId}>
      <a data-tip data-for={id}>
        {element}
      </a>
      <TooltipWrapper
        backgroundColor="none"
        background={backgroundColor}
        id={id}
        place={place}
        effect={'solid'}
        className={cn(backgroundColor, className)}
        overridePosition={({ left, top }, _e, _t, node) => {
          return {
            top,
            left: typeof node === 'string' ? left : Math.max(left, 0),
          };
        }}
      >
        {tooltip}
      </TooltipWrapper>
    </div>
  );
};
