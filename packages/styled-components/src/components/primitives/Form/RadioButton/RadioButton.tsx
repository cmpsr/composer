import React, { forwardRef } from 'react';
import { Typography } from 'components/primitives/Typography';
import { Props } from './RadioButton.types';
import {
  StyledTypography,
  StyledLabel,
  StyledInput,
} from './RadioButton.styled';

export const RadioButton = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      checked,
      ariaLabel,
      label,
      disabled = false,
      onChange,
      testId = 'radioButton',
      className,
    }: Props,
    ref
  ) => {
    const typographyMode = disabled
      ? Typography.Modes.Dark50
      : Typography.Modes.Dark100;

    return (
      <StyledTypography
        tag={Typography.Tags.Label}
        type={Typography.Types.Form}
        mode={typographyMode}
      >
        <StyledInput
          ref={ref}
          name={name}
          className={className}
          aria-label={ariaLabel}
          type="radio"
          value={value}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          data-testid={testId}
        />
        <StyledLabel>{label}</StyledLabel>
      </StyledTypography>
    );
  }
);
