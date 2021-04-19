import { check_box as CheckBoxIcon, Icon } from 'components/primitives/Icon';
import { Typography } from 'components/primitives/Typography';
import React, { forwardRef } from 'react';
import {
  StyledContainer,
  StyledIcon,
  StyledInput,
  StyledLabel,
  StyledTypography,
} from './CheckBox.styled';
import { Props } from './CheckBox.types';

export const CheckBox = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      checked,
      ariaLabel,
      label,
      disabled = false,
      onChange,
      testId = 'checkbox',
      className,
      customCss,
    }: Props,
    ref
  ) => {
    const onChangeHandler = (e) => {
      onChange?.(e);
    };
    const typographyMode = disabled
      ? Typography.Modes.Dark50
      : Typography.Modes.Dark100;

    return (
      <StyledTypography
        tag={Typography.Tags.Label}
        type={Typography.Types.Form}
        mode={typographyMode}
      >
        <StyledContainer>
          <StyledInput
            ref={ref}
            name={name}
            css={customCss}
            className={className}
            aria-label={ariaLabel}
            type="checkbox"
            disabled={disabled}
            onChange={onChangeHandler}
            checked={checked}
            data-testid={testId}
          />
          {checked && (
            <StyledIcon>
              <CheckBoxIcon type={Icon.Types.Rounded} />
            </StyledIcon>
          )}
        </StyledContainer>
        {label && <StyledLabel>{label}</StyledLabel>}
      </StyledTypography>
    );
  }
);
