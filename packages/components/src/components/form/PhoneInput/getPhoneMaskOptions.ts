import { MaskitoOptions } from '@maskito/core';
import { PhoneMaskOptions } from './types';
import { maskitoPhoneOptionsGenerator } from '@maskito/phone';
import metadata from 'libphonenumber-js/min/metadata';

export const getPhoneMaskOptions = ({ countryIsoCode, mask }: PhoneMaskOptions): MaskitoOptions => {
  if (mask) return { mask };

  const phoneOptions = maskitoPhoneOptionsGenerator({ countryIsoCode, metadata });
  return phoneOptions;
};
