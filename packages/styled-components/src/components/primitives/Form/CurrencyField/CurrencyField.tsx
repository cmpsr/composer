import React, { forwardRef } from 'react';
import cn from 'classnames';
import { Shapes } from 'components/Components.types';
import { Icon, attach_money as AttachMoney } from 'components/primitives';
import {
  StyledWrapper,
  StyledIconWrapper,
  StyledInput,
  StyledIcon,
} from './CurrencyField.styled';
import { Props, Type, Modes } from './CurrencyField.types';

export const CurrencyField: Type = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      ariaLabel,
      name,
      placeholder,
      shape = Shapes.SemiRounded,
      disabled = false,
      invalid = false,
      type = 'number',
      required,
      inputMode,
      testId = 'currencyField',
      customCss,
      onChange,
    }: Props,
    ref
  ) => (
    <StyledWrapper>
      <StyledIconWrapper className={cn(shape)}>
        <StyledIcon>
          <AttachMoney type={Icon.Types.Filled} />
        </StyledIcon>
      </StyledIconWrapper>
      <StyledInput
        data-testid={testId}
        aria-label={ariaLabel}
        css={customCss}
        className={cn(className, shape, { invalid: invalid, custom: customCss})}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        ref={ref}
        inputMode={inputMode}
      />
    </StyledWrapper>
  )
);

CurrencyField.Shapes = Shapes;
CurrencyField.Modes = Modes;
