import React, { forwardRef } from 'react';
import { TextField } from 'components/primitives/Form/TextField';
import { Typography } from 'components/primitives';
import { Props, Type } from './TextFieldWithLabel.types';
import { Shapes } from 'components/Components.types';
import { Modes } from 'components/primitives/Form/TextField/TextField.types';

export const TextFieldWithLabel: Type = forwardRef<HTMLInputElement, Props>(
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
      labelCustomCss,
      textFieldCustomCss,
      testId = 'textFieldWithLabel',
    }: Props,
    ref
  ) => (
    <>
      <Typography
        customCss={labelCustomCss}
        className={labelClassName}
        mode={Typography.Modes.Dark100}
        tag={Typography.Tags.Label}
        htmlFor={name}
        type={Typography.Types.FormLabel}
      >
        {label}
      </Typography>
      <TextField
        testId={testId}
        ref={ref}
        customCss={textFieldCustomCss}
        className={textFieldClassName}
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
  )
);

TextFieldWithLabel.Shapes = Shapes;
TextFieldWithLabel.Modes = Modes;
