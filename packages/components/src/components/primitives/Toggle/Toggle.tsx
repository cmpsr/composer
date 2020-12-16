import React, { useState, MouseEvent } from 'react';
import cn from 'classnames';
import { Props } from './Toggle.types';
import { StyledLabel, StyledInput, StyledSpan } from './Toggle.styled';

export const Toggle = ({
  className,
  enabled,
  testId = 'toggle',
  onStateChanged,
  disabled = false,
}: Props) => {
  const [isEnabled, setEnabled] = useState(enabled ?? false);

  const toggle = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    e.preventDefault();
    onStateChanged(!isEnabled);
    setEnabled(!isEnabled);
  };

  return (
    <StyledLabel data-testid={testId} onClick={toggle}>
      <StyledInput type="checkbox" disabled={disabled} />
      <StyledSpan
        className={cn(className, { enabled: isEnabled, disabled })}
      ></StyledSpan>
    </StyledLabel>
  );
};
