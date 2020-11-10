import React from 'react';
import cn from 'classnames';
import { Button, Typography, TextFieldIcon } from 'components/primitives';
import { Props } from './TextFieldIconButton.types';
import { IconPositions } from 'components/Components.types';
import {
  StyledWrapper,
  textFieldIconStyling,
  wrapperStyling,
} from './TextFieldIconButton.styled';

export const TextFieldIconButton = ({
  className,
  ariaLabel,
  name,
  placeholder,
  onChange,
  required,
  type = 'text',
  onClick,
  iconPosition = IconPositions.Left,
  buttonContent = 'Button',
  icon,
  disabled,
  invalid,
  customCss,
  testId = 'textFieldIconButton',
}: Props) => (
  <StyledWrapper>
    <TextFieldIcon
      customCss={`${
        customCss
          ? `${textFieldIconStyling}${customCss}`
          : `${textFieldIconStyling}`
      }`}
      wrapperCustomCss={wrapperStyling}
      testId={testId}
      className={cn(className, iconPosition)}
      ariaLabel={ariaLabel}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      invalid={invalid}
      icon={icon}
      iconPosition={iconPosition}
    />
    <Button
      type={Button.Types.Primary}
      shape={Button.Shapes.Rectangle}
      onClick={onClick}
    >
      <Typography tag={Typography.Tags.Span} type={Typography.Types.Button}>
        {buttonContent}
      </Typography>
    </Button>
  </StyledWrapper>
);

TextFieldIconButton.IconPositions = IconPositions;
