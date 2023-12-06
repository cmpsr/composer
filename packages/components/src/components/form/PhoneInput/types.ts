import { CountryCode } from 'libphonenumber-js';
import { InputProps } from '../Input';

export interface PhoneInputProps extends InputProps {
  maskOptions?: PhoneMaskOptions;
}

export type PhoneMaskOptions = {
  countryIsoCode?: CountryCode;
};
