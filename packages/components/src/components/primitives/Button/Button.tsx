import React from 'react';
import cn from 'classnames';
import { StyledButton } from './Button.styled';
import { Types, HtmlTypes, Props } from './Button.types';
import { Shapes } from 'components/Components.types';

export const Button = ({
  children,
  className,
  customCss,
  onClick,
  type,
  htmlType = HtmlTypes.Button,
  testId = 'button',
  disabled = false,
  shape,
}: Props) => (
  <StyledButton
    data-testid={testId}
    type={htmlType}
    onClick={onClick}
    className={cn(className, type, shape)}
    css={customCss}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

Button.Types = Types;
Button.HtmlTypes = HtmlTypes;
Button.Shapes = Shapes;
