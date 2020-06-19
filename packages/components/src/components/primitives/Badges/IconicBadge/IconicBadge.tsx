import React, { ReactNode } from 'react';
import cn from 'classnames';
import { Icon } from 'components/primitives/Icon';

export const ICONIC_BADGE_DEFAULT_TEST_ID = 'iconicBadge';

export enum BadgeColor {
  Error = 'bg-fill-system-error',
  Primary = 'bg-fill-primary-100',
  Secondary = 'bg-fill-secondary-100',
}

type Props = {
  icon: ReactNode;
  className?: string;
  testId?: string;
  color?: BadgeColor;
};

export const IconicBadge = ({
  icon,
  color = BadgeColor.Secondary,
  className,
  testId = ICONIC_BADGE_DEFAULT_TEST_ID,
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
      <Icon className="p-0.15 fill-current text-fill-white">{icon}</Icon>
    </div>
  );
};
