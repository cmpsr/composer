import React from 'react';
import { forwardRef, useMergeRefs } from '@chakra-ui/react';
import { PhoneInputProps } from './types';
import { Input } from '@components';
import { useMaskito } from '@maskito/react';
import { getPhoneMaskOptions } from './getPhoneMaskOptions';

export const PhoneInput = forwardRef<PhoneInputProps, typeof Input>(({ maskOptions = {}, ...props }, ref) => {
  const phoneMaskOptions = getPhoneMaskOptions(maskOptions);
  const phoneMaskedRef = useMaskito({ options: phoneMaskOptions });
  const phoneInputRef = useMergeRefs(ref, phoneMaskedRef);

  return <Input ref={phoneInputRef} {...props} />;
});
