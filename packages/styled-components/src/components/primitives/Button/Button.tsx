import React, { ReactNode } from 'react';
import cn from 'classnames';
import { StyledButton } from './Button.styled';

export const BUTTON_DEFAULT_TEST_ID = 'button';
export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum ButtonShapes {
  Rounded = 'rounded',
  SemiRounded = 'semiRounded',
  Rectangle = 'rectangle'
}

type Props = {
  children?: ReactNode;
  className?: string;
  onClick?: (...args: any[]) => void;
  type?: ButtonTypes;
  htmlType?: 'button' | 'submit' | 'reset';
  testId?: string;
  disabled?: boolean;
  shape?: ButtonShapes;
};

export const Button = ({
  children,
  className,
  onClick,
  type = ButtonTypes.Primary,
  htmlType = 'button',
  testId = BUTTON_DEFAULT_TEST_ID,
  disabled,
  shape
}: Props) => (
  <StyledButton
    data-testid={testId}
    type={htmlType}
    onClick={onClick}
    className={cn(className, type, shape)}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);
