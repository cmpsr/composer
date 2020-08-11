import React, { ChangeEvent, forwardRef } from 'react';
import cn from 'classnames';
import { Icon } from 'components/primitives';
import { search as Search } from 'components/primitives/Icon/icons/action';
import { TextField, InputShapes } from 'components/primitives/form/TextField';

export enum IconPosition {
  Left = 'left-0 pl-3',
  Right = 'right-0 pr-3',
}

type Props = {
  className?: string;
  shape?: InputShapes;
  iconPosition?: IconPosition;
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchField = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      shape = InputShapes.SemiRounded,
      iconPosition = IconPosition.Left,
      ariaLabel,
      name,
      placeholder,
      onChange,
      type = 'search',
      disabled = false,
      required = false,
    }: Props,
    ref
  ) => {
    return (
      <div className="relative">
        <TextField
          ariaLabel={ariaLabel}
          className={cn(className, {
            'pl-10': iconPosition === IconPosition.Left,
          })}
          name={name}
          placeholder={placeholder}
          shape={shape}
          onChange={onChange}
          type={type}
          disabled={disabled}
          required={required}
          ref={ref}
        />
        <div
          className={cn(
            'absolute inset-y-0 flex items-center z-10',
            iconPosition
          )}
        >
          <Icon className="fill-current text-fill-black-200">
            <Search type="filled" />
          </Icon>
        </div>
      </div>
    );
  }
);
