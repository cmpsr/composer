import React, { ChangeEvent, forwardRef } from 'react';
import cn from 'classnames';
import {
  Typography,
  TypographyMode,
  TypographyTypes,
} from 'components/primitives/Typography';
import { getRadioButtonClasses } from 'utils/getRadioButtonClasses';

export const RADIO_BUTTON_DEFAULT_TEST_ID = 'radio';

type Props = {
  name?: string;
  value?: string;
  checked?: boolean;
  ariaLabel?: string;
  label?: string;
  disabled?: boolean;
  testId?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButton = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      checked,
      ariaLabel,
      label,
      disabled = false,
      onChange,
      testId = RADIO_BUTTON_DEFAULT_TEST_ID,
      className,
    }: Props,
    ref
  ) => {
    const { radio, radioBorder, labelClass } = getRadioButtonClasses(disabled);
    const typographyMode = disabled
      ? TypographyMode.Dark50
      : TypographyMode.Dark100;

    return (
      <Typography
        className="inline-flex items-center"
        tag="label"
        type={TypographyTypes.Form}
        mode={typographyMode}
      >
        <input
          ref={ref}
          name={name}
          className={cn('form-radio ', radio, radioBorder, className)}
          aria-label={ariaLabel}
          type="radio"
          value={value}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          data-testid={testId}
        />
        <span className={labelClass}>{label}</span>
      </Typography>
    );
  }
);
