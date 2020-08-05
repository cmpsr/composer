import React from 'react';
import cn from 'classnames';
import {
  Typography,
  TypographyTypes,
  TypographyMode,
} from 'components/primitives/Typography';

export const NUMERIC_BADGE_DEFAULT_TEST_ID = 'numericBadge';

export enum BadgeColor {
  Error = 'bg-fill-system-error',
  Primary = 'bg-fill-primary-900',
  Secondary = 'bg-fill-secondary-100',
}

type Props = {
  number: number;
  className?: string;
  testId?: string;
  color?: BadgeColor;
  maximumNumber?: number;
};

export const NumericBadge = ({
  number,
  color = BadgeColor.Secondary,
  className,
  testId = NUMERIC_BADGE_DEFAULT_TEST_ID,
  maximumNumber = 9,
}: Props) => {
  return (
    <div
      className={cn(
        className,
        color,
        'flex items-center justify-center rounded-full h-5 w-5'
      )}
      data-testid={testId}
    >
      <Typography
        className="overflow-hidden truncate p-0.15"
        mode={TypographyMode.Light100}
        tag="span"
        type={TypographyTypes.Eyebrow}
      >
        {number > maximumNumber ? `${maximumNumber}+` : number}
      </Typography>
    </div>
  );
};
