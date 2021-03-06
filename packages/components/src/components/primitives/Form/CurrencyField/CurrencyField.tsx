import React, { forwardRef } from 'react';
import cn from 'classnames';
import { Shapes } from 'components/Components.types';
import { Icon, attach_money as AttachMoney } from 'components/primitives';
import {
  StyledWrapper,
  StyledIconWrapper,
  StyledInput,
  StyledIcon,
  StyledRightChildContainer,
} from './CurrencyField.styled';
import { Props, Type } from './CurrencyField.types';
import { Modes } from 'components/primitives/Form/TextField/TextField.types';

export const CurrencyField: Type = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      ariaLabel,
      name,
      placeholder,
      shape,
      disabled = false,
      invalid = false,
      type = 'number',
      required,
      inputMode,
      testId = 'currencyField',
      customCss,
      onChange,
      children,
    }: Props,
    ref
  ) => (
    <StyledWrapper>
      <StyledIconWrapper className={shape}>
        <StyledIcon>
          <AttachMoney type={Icon.Types.Filled} />
        </StyledIcon>
      </StyledIconWrapper>
      <StyledInput
        data-testid={testId}
        aria-label={ariaLabel}
        css={customCss}
        className={cn(className, shape, { invalid: invalid })}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        ref={ref}
        inputMode={inputMode}
      />
      {children && (
        <StyledRightChildContainer>{children}</StyledRightChildContainer>
      )}
    </StyledWrapper>
  )
);

CurrencyField.Shapes = Shapes;
CurrencyField.Modes = Modes;
