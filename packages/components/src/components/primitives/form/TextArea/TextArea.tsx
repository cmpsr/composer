import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import { InputShapes } from 'components/primitives/form/TextField';
import { getTextAreaClasses } from 'utils/getTextAreaClasses';

type Props = {
  className?: string;
  value?: string;
  name: string;
  disabled?: boolean;
  isInvalid?: boolean;
  required?: boolean;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  shape?: InputShapes;
};

export const TextArea = ({
  className,
  value = 'Placeholder',
  name,
  disabled = false,
  isInvalid = false,
  required,
  placeholder,
  onChange,
  shape = InputShapes.SemiRounded,
}: Props) => {
  const textarea = getTextAreaClasses(isInvalid);
  return (
    <textarea
      className={cn(textarea, className, shape)}
      disabled={disabled}
      defaultValue={value}
      placeholder={placeholder}
      name={name}
      required={required}
      onChange={onChange}
    />
  );
};
