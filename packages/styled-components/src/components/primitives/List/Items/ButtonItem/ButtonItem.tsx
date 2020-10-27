import React from 'react';
import { Props } from './Button.types';
import { StyledButton } from './ButtonItem.styled';

export const ButtonItem = ({
  className,
  children,
  onClick,
  disabled,
  testId = 'buttonItem',
}: Props) => {
  return (
    <StyledButton
      testId={testId}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
