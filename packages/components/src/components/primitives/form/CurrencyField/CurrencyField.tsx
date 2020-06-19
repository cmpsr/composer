import React, { ChangeEvent, forwardRef } from 'react';
import cn from 'classnames';

import { Icon } from 'components/primitives';
import { attach_money as AttachMoney } from 'components/primitives/Icon/icons/editor';

type Props = {
  className?: string;
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  invalid?: boolean;
};

export const CurrencyField = forwardRef<HTMLInputElement, Props>(
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
      invalid,
    }: Props,
    ref
  ) => {
    return (
      <div className="flex">
        <span className=" flex items-center px-5 rounded-l-md bg-gray-400 text-gray-100">
          <Icon width={24} height={24} className="fill-current">
            <AttachMoney type="filled" />
          </Icon>
        </span>
        <input
          className={cn(
            'appearance-none rounded-r-md relative block w-full p-3 border placeholder-primary-fill-75 text-dark-100 focus:outline-none focus:border-fill-primary-100 focus:z-10 sm:text-sm sm:leading-5',
            { 'disabled:bg-fill-forms-disabled': disabled },
            { 'border-outline-forms-filled': !disabled },
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
        />
      </div>
    );
  }
);
