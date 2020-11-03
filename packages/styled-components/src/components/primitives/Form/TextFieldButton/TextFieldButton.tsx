import React from 'react';
import { Button, Typography } from 'components/primitives';
import { Props } from './TextFieldButton.types';
import { StyledWrapper, StyledTextField } from './TextFieldButton.styled';

export const TextFieldButton = ({
  className,
  ariaLabel,
  name,
  placeholder,
  onChange,
  required,
  type = 'text',
  onClick,
  buttonLabel = 'Button',
  testId = 'textFieldButton',
}: Props) => (
  <StyledWrapper data-testid={testId}>
    <StyledTextField
      className={className}
      ariaLabel={ariaLabel}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
    />
    <Button type={Button.Types.Primary} onClick={onClick}>
      <Typography tag={Typography.Tags.Span} type={Typography.Types.Button}>
        {buttonLabel}
      </Typography>
    </Button>
  </StyledWrapper>
);
