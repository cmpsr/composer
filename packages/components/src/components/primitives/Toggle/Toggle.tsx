import React, { useState, MouseEvent, useEffect } from 'react';
import cn from 'classnames';
import { Props } from './Toggle.types';
import { StyledLabel, StyledInput, StyledSpan } from './Toggle.styled';

export const Toggle = ({
  className,
  on,
  testId = 'toggle',
  onStateChanged,
  disabled = false,
}: Props) => {
  const [isOn, setOn] = useState(on ?? false);

  const changeState = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    e.preventDefault();
    onStateChanged && onStateChanged(!isOn);
    setOn(!isOn);
  };

  return (
    <StyledLabel data-testid={testId} onClick={changeState}>
      <StyledInput type="checkbox" disabled={disabled} />
      <StyledSpan
        className={cn(className, { on: isOn, disabled })}
      ></StyledSpan>
    </StyledLabel>
  );
};
