import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { Icon } from 'components/primitives';
import { person as Person } from 'components/primitives/Icon/icons/social';

type Props = {
  className?: string;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const TextFieldIcon = ({
  className,
  iconPosition = 'left',
  ariaLabel,
  name,
  placeholder,
  onChange,
  required,
  disabled = false,
  type = 'text',
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
    <div className="relative">
      <input
        className={cn(
          className,
          'appearance-none rounded-md relative block w-full p-3 border placeholder-primary-fill-75 text-gray-900 focus:outline-none focus:border-fill-primary-900 focus:z-10 sm:text-sm sm:leading-5',
          { 'pl-10': iconPosition === 'left' },
          { 'bg-gray-200': disabled, 'border-outline-primary-100': !disabled }
        )}
        aria-label={ariaLabel}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        value={value}
        disabled={disabled}
      />
      <div
        className={cn('absolute inset-y-0 flex items-center', {
          'left-0 pl-3': iconPosition === 'left',
          'right-0 pr-3': iconPosition === 'right',
        })}
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
