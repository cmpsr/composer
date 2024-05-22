import React, { FC } from 'react';
import { type InfoButtonProps } from './types';
import { IconHelp, ButtonIcon } from '@cmpsr/components';

export const InfoButton: FC<InfoButtonProps> = ({ onClick }) => {
  return (
    <ButtonIcon
      variant="ghost"
      color="text-link-secondary-default"
      onClick={onClick}
      ml="spacer-2"
      icon={<IconHelp />}
      aria-label="Why we ask?"
    />
  );
};
