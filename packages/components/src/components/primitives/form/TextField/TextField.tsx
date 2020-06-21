import React, { ChangeEvent, forwardRef } from 'react';
import cn from 'classnames';
import { getTextFieldStateClasses } from 'utils';

export enum InputShapes {
  Rounded = 'rounded-input-rounded',
  SemiRounded = 'rounded-input-semi-rounded',
  Rectangle = 'rounded-input-rectangle',
}

type Props = {
  className?: string;
  shape?: InputShapes;
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  type?: string;
  maxLength?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const TextField = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      shape = InputShapes.SemiRounded,
      ariaLabel,
      name,
      placeholder,
      onChange,
      required,
      type = 'text',
      disabled = false,
      invalid = false,
      maxLength,
    }: Props,
    ref
  ) => {
    const textFieldStateClasses = getTextFieldStateClasses(disabled, invalid);

    return (
      <input
        className={cn(className, 'form-input', textFieldStateClasses, shape)}
        aria-label={ariaLabel}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        required={required}
        ref={ref}
        maxLength={maxLength}
      />
    );
  }
);
