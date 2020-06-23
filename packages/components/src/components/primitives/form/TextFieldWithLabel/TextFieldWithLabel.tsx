import React, { ChangeEvent, forwardRef } from 'react';
import cn from 'classnames';
import {
  InputShapes,
  TextField,
  InputMode,
} from 'components/primitives/form/TextField';
import {
  Typography,
  TypographyTypes,
  TypographyMode,
} from 'components/primitives';

type Props = {
  textFieldClassName?: string;
  labelClassName?: string;
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
  label: string;
  inputMode?: InputMode;
};

export const TextFieldWithLabel = forwardRef<HTMLInputElement, Props>(
  (
    {
      textFieldClassName,
      labelClassName,
      shape,
      ariaLabel,
      name,
      placeholder,
      onChange,
      required,
      type = 'text',
      disabled,
      invalid,
      maxLength,
      label,
      inputMode,
    }: Props,
    ref
  ) => {
    return (
      <>
        <Typography
          className={cn(labelClassName)}
          mode={TypographyMode.Dark100}
          tag={'label'}
          htmlFor={name}
          type={TypographyTypes.FormLabel}
        >
          {label}
        </Typography>
        <TextField
          ref={ref}
          className={cn(textFieldClassName)}
          ariaLabel={ariaLabel}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          invalid={invalid}
          shape={shape}
          inputMode={inputMode}
        />
      </>
    );
  }
);
