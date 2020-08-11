import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import {
  Button,
  ButtonTypes,
  Typography,
  TypographyTypes,
} from 'components/primitives';

type Props = {
  className?: string;
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  buttonLabel?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
};

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
}: Props) => {
  return (
    <div className="flex">
      <input
        className={cn(
          'appearance-none rounded-l-md relative block w-full p-3 border border-outline-primary-900 placeholder-primary-fill-75 text-gray-900 focus:outline-none focus:border-fill-primary-900 focus:z-10 sm:text-sm sm:leading-5',
          className
        )}
        aria-label={ariaLabel}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Button type={ButtonTypes.Primary} onClick={onClick}>
        <Typography tag="span" type={TypographyTypes.Button}>
          {buttonLabel}
        </Typography>
      </Button>
    </div>
  );
};
