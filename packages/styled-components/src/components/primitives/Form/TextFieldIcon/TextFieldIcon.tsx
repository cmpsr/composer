import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { Props } from './TextFieldIcon.types';
import {
  StyledWrapper,
  StyledIcon,
  StyledIconWrapper,
  StyledTextField,
} from './TextFieldIcon.styled';
import { IconPositions } from 'components/Components.types';

export const TextFieldIcon = ({
  className,
  iconPosition = IconPositions.Left,
  ariaLabel,
  name,
  placeholder,
  onChange,
  required,
  invalid,
  disabled = false,
  type = 'text',
  testId = 'textFieldIcon',
  icon,
  customCss,
  wrapperCustomCss,
}: Props) => {
  const [focused, setFocus] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const { current } = ref;

    const handleFocus = () => setFocus(true);

    const handleBlur = () => !current.value && setFocus(false);

    current.addEventListener('focus', handleFocus);
    current.addEventListener('blur', handleBlur);

    return () => {
      current.removeEventListener('focus', handleFocus);
      current.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <StyledWrapper css={wrapperCustomCss}>
      <StyledTextField
        customCss={customCss}
        testId={testId}
        className={cn(className, iconPosition)}
        ariaLabel={ariaLabel}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        disabled={disabled}
        invalid={invalid}
      />
      <StyledIconWrapper className={iconPosition}>
        <StyledIcon className={cn({ notFocused: !focused })}>{icon}</StyledIcon>
      </StyledIconWrapper>
    </StyledWrapper>
  );
};

TextFieldIcon.IconPositions = IconPositions;
