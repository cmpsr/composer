import React, { ChangeEvent, useEffect, useRef } from 'react';
import { forwardRef, useMergeRefs } from '@chakra-ui/react';
import { PhoneInputProps } from './types';
import { Input } from '@components';
import { useMaskito } from '@maskito/react';
import { getPhoneMaskOptions } from './getPhoneMaskOptions';
import { isValidPhoneNumber } from 'libphonenumber-js/core';
import metadata from 'libphonenumber-js/min/metadata';

export const PhoneInput = forwardRef<PhoneInputProps, typeof Input>(
  ({ maskOptions = { countryIsoCode: 'US' }, onChange, ...props }, ref) => {
    const phoneMaskOptions = getPhoneMaskOptions(maskOptions);
    const phoneMaskedRef = useMaskito({ options: phoneMaskOptions });
    const internalInputRef = useRef<HTMLInputElement>(null);
    const combinedRefs = useMergeRefs(phoneMaskedRef, internalInputRef, ref);

    useEffect(() => {
      const currentInput = internalInputRef.current;
      if (currentInput) {
        const handleChange = (event: ChangeEvent<HTMLInputElement> | Event) => {
          const target = event.target as HTMLInputElement;
          const isValid = isValidPhoneNumber(target.value, maskOptions.countryIsoCode, metadata);

          if (onChange) {
            onChange(event as ChangeEvent<HTMLInputElement>, isValid);
          }
        };

        currentInput.addEventListener('input', handleChange);
        return () => {
          currentInput.removeEventListener('input', handleChange);
        };
      }
    }, [onChange]);

    return <Input ref={combinedRefs} {...props} />;
  },
);
