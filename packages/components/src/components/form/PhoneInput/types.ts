import { ChangeEvent } from 'react';
import { CountryCode } from 'libphonenumber-js';
import { InputProps } from '../Input';
import { MaskitoMask } from '@maskito/core';

export interface PhoneInputProps extends Omit<InputProps, 'onChange'> {
  maskOptions?: PhoneMaskOptions;
  onChange?: (event: ChangeEvent<HTMLInputElement>, isValid: boolean) => void;
}

export type PhoneMaskOptions = {
  countryIsoCode?: CountryCode;
  mask?: MaskitoMask;
};
