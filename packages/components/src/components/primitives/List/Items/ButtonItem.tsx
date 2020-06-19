import React, { ReactNode } from 'react';
import cn from 'classnames';
import { Button } from 'components/primitives/Button';
import { getItemClasses } from 'utils/getDropdownClasses';

type Props = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const ButtonItem = ({
  className,
  children,
  onClick,
  disabled,
}: Props) => {
  const { wrapper } = getItemClasses();
  return (
    <Button
      className={cn(wrapper, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
