import React from 'react';
import { Props } from './ButtonItem.types';
import { StyledButton } from './ButtonItem.styled';
import { Button } from 'components/primitives';

export const ButtonItem = ({
  className,
  children,
  onClick,
  disabled,
  testId = 'buttonItem',
}: Props) => (
  <StyledButton
    testId={testId}
    className={className}
    onClick={onClick}
    disabled={disabled}
    type={Button.Types.Primary}
    shape={Button.Shapes.Rectangle}
  >
    {children}
  </StyledButton>
);
