import React, { ReactNode } from 'react';
import cn from 'classnames';
import { getButtonStateClassesFromType } from 'utils';

export const BUTTON_DEFAULT_TEST_ID = 'button';
export enum ButtonTypes {
  Primary = 'primary-btn',
  Secondary = 'secondary-btn',
}

export enum ButtonShapes {
  Rounded = 'rounded-btn-rounded',
  SemiRounded = 'rounded-btn-semi-rounded',
  Rectangle = 'rounded-btn-rectangle',
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
  type,
  htmlType = 'button',
  testId = BUTTON_DEFAULT_TEST_ID,
  disabled,
  shape,
}: Props) => {
  const typeStateClasses = getButtonStateClassesFromType(type);
  return (
    <button
      type={htmlType}
      className={cn(
        className,
        'flex focus:outline-none',
        type,
        typeStateClasses,
        shape
      )}
      onClick={onClick}
      data-testid={testId}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
