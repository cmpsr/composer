import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { Icon } from 'components/primitives';
import { person as Person } from 'components/primitives/Icon/icons/social';

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
  value?: string | number;
  iconPosition?: 'left' | 'right';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
};

export const TextFieldIconButton = ({
  className,
  ariaLabel,
  name,
  placeholder,
  onChange,
  required,
  type = 'text',
  onClick,
  iconPosition = 'left',
  value,
}: Props) => {
  const [focused, setFocus] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const { current } = ref;

    const handleFocus = () => {
      setFocus(true);
    };
    const handleBlur = () => {
      if (!current.value) {
        setFocus(false);
      }
    };

    current.addEventListener('focus', handleFocus);
    current.addEventListener('blur', handleBlur);

    return () => {
      current.removeEventListener('focus', handleFocus);
      current.removeEventListener('blur', handleBlur);
    };
  }, [ref]);

  return (
    <div className="flex relative">
      <input
        className={cn(
          className,
          'appearance-none rounded-l-md relative block w-full p-3 border border-outline-primary-100 placeholder-primary-fill-75 text-gray-900 focus:outline-none focus:border-fill-primary-100 focus:z-10 sm:text-sm sm:leading-5',
          { 'pl-10': iconPosition === 'left' },
        )}
        aria-label={ariaLabel}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        value={value}
      />
      <Button type={ButtonTypes.Primary} onClick={onClick}>
        <Typography tag="span" type={TypographyTypes.Button}>
          Button
        </Typography>
      </Button>
      <div
        className={cn(
          'absolute inset-y-0 flex items-center',
          { 'left-0 pl-3': iconPosition === 'left' },
          { 'right-0 pr-3': iconPosition === 'right' },
        )}
      >
        <Icon
          width={24}
          height={24}
          className={cn('fill-current', { 'text-gray-500': !focused })}
        >
          <Person type="filled" />
        </Icon>
      </div>
    </div>
  );
};
