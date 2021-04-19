import React, { forwardRef } from 'react';
import cn from 'classnames';
import { Props } from './TextArea.types';
import { Shapes } from 'components/Components.types';
import { StyledTextArea } from './TextArea.styled';

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      className,
      value = '',
      name,
      disabled = false,
      invalid: isInvalid = false,
      required,
      placeholder,
      onChange,
      shape,
      customCss,
      testId = 'textArea',
    }: Props,
    ref
  ) => (
    <StyledTextArea
      ref={ref}
      data-testid={testId}
      css={customCss}
      className={cn(className, shape, { invalid: isInvalid })}
      disabled={disabled}
      defaultValue={value}
      placeholder={placeholder}
      name={name}
      required={required}
      onChange={onChange}
    />
  )
);

TextArea.Shapes = Shapes;
