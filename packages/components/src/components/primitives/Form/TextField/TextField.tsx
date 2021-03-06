import React, { forwardRef } from 'react';
import cn from 'classnames';
import { Shapes } from 'components/Components.types';
import { Props, Modes, Type } from './TextField.types';
import { StyledInput } from './TextField.styled';

export const TextField: Type = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      shape,
      ariaLabel,
      name,
      placeholder,
      onChange,
      required,
      type = 'text',
      disabled = false,
      invalid = false,
      maxLength,
      inputMode,
      testId = 'textField',
      customCss,
      ...rest
    }: Props,
    ref
  ) => (
    <StyledInput
      data-testid={testId}
      css={customCss}
      className={cn(className, shape, {
        invalid: invalid,
      })}
      aria-label={ariaLabel}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      required={required}
      ref={ref}
      maxLength={maxLength}
      inputMode={inputMode}
      {...rest}
    />
  )
);

TextField.Shapes = Shapes;
TextField.Modes = Modes;
