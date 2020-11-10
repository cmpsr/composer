import React from 'react';
import cn from 'classnames';
import { Props } from './TextArea.types';
import { Shapes } from 'components/Components.types';
import { StyledTextArea } from './TextArea.styled';

export const TextArea = ({
  className,
  value = 'placeholder',
  name,
  disabled = false,
  invalid: isInvalid = false,
  required,
  placeholder,
  onChange,
  shape,
  customCss,
  testId = 'textArea',
}: Props) => (
  <StyledTextArea
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
);

TextArea.Shapes = Shapes;
