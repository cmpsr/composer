import React from 'react';
import cn from 'classnames';
import { Typography, TypographyTypes, Icon } from 'components/primitives';
import { error as Error } from 'components/primitives/Icon/icons/alert';

type Props = {
  error: string;
  className?: string;
};

export const ErrorField = ({ error, className }: Props) => (
  <span className={cn('flex items-center my-2 ml-3', className)}>
    <Icon
      width={18}
      height={18}
      className="fill-current text-fill-system-error mr-1"
    >
      <Error type="filled" />
    </Icon>
    <Typography tag="p" type={TypographyTypes.FormError}>
      {error}
    </Typography>
  </span>
);
