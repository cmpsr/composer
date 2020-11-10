import React from 'react';
import { Button, Typography, TextField } from 'components/primitives';
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
  customCss,
}: Props) => (
  <StyledWrapper data-testid={testId}>
    <StyledTextField
      customCss={customCss}
      className={className}
      ariaLabel={ariaLabel}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      shape={TextField.Shapes.SemiRounded}
    />
    <Button
      type={Button.Types.Primary}
      shape={Button.Shapes.Rectangle}
      onClick={onClick}
    >
      <Typography tag={Typography.Tags.Span} type={Typography.Types.Button}>
        {buttonLabel}
      </Typography>
    </Button>
  </StyledWrapper>
);
