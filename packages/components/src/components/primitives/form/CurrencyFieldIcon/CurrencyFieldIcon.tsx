import React, { ChangeEvent, forwardRef } from 'react';
import cn from 'classnames';

import { Icon } from 'components/primitives';
import { attach_money as AttachMoney } from 'components/primitives/Icon/icons/editor';
import { InputMode } from 'components/primitives/form/TextField';

type Props = {
  className?: string;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  icon: React.ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  invalid?: boolean;
  inputMode?: InputMode;
};

export const CurrencyFieldIcon = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      ariaLabel,
      name,
      placeholder,
      onChange,
      required,
      type = 'number',
      disabled = false,
      icon,
      invalid,
      inputMode,
    }: Props,
    ref
  ) => {
    return (
      <div className="flex relative">
        <span className=" flex items-center px-5 rounded-l-md bg-gray-400 text-gray-100">
          <Icon width={24} height={24} className="fill-current">
            <AttachMoney type="filled" />
          </Icon>
        </span>
        <input
          className={cn(
            'appearance-none rounded-r-md relative block w-full p-3 border placeholder-primary-fill-75 text-dark-100 focus:outline-none focus:border-fill-primary-900 focus:z-10 sm:text-sm sm:leading-5',
            { 'disabled:bg-fill-form-disabled': disabled },
            { 'border-outline-form-filled': !disabled },
            { 'border-fill-system-error': invalid },
            className
          )}
          aria-label={ariaLabel}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
          inputMode={inputMode}
        />
        <div
          className={cn('absolute inset-y-0 flex items-center right-0 pr-3')}
        >
          {icon}
        </div>
      </div>
    );
  }
);
