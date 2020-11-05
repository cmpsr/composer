import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { Props } from './CurrencyFieldIcon.types';
import { IconPositions } from 'components/Components.types';
import { CurrencyField } from 'components/primitives';
import {
  StyledIcon,
  StyledWrapper,
  StyledIconWrapper,
  StyledCurrencyField,
} from './CurrencyFieldIcon.styled';
import { Shapes } from 'components/Components.types';

export const CurrencyFieldIcon = ({
  className,
  ariaLabel,
  name,
  placeholder,
  onChange,
  required,
  type = 'number',
  invalid,
  disabled = false,
  shape = CurrencyField.Shapes.SemiRounded,
  icon,
  iconPosition = IconPositions.Left,
  inputMode,
  testId = 'currencyFieldIcon',
  customCss,
  wrapperCustomCss,
  wrapperClassName,
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
    <StyledWrapper
      className={wrapperClassName}
      css={wrapperCustomCss}
      data-testid="currencyFieldIconWrapper"
    >
      <StyledCurrencyField
        testId={testId}
        name={name}
        ariaLabel={ariaLabel}
        type={type}
        placeholder={placeholder}
        customCss={customCss}
        className={cn(className, iconPosition)}
        shape={shape}
        required={required}
        disabled={disabled}
        invalid={invalid}
        inputMode={inputMode}
        onChange={onChange}
        ref={ref}
      />
      <StyledIconWrapper className={iconPosition} data-testid="iconWrapper">
        <StyledIcon className={cn({ notFocused: !focused })}>{icon}</StyledIcon>
      </StyledIconWrapper>
    </StyledWrapper>
  );
};

CurrencyFieldIcon.IconPositions = IconPositions;
CurrencyFieldIcon.Shapes = Shapes;
