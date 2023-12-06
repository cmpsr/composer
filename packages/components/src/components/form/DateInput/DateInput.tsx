import React from 'react';
import { forwardRef, useMergeRefs } from '@chakra-ui/react';
import { DateInputProps } from './types';
import { Input } from '@components';
import { useMaskito } from '@maskito/react';
import { getDateMaskOptions } from './getDateMaskOptions';

export const DateInput = forwardRef<DateInputProps, typeof Input>(({ maskOptions = {}, ...props }, ref) => {
  const dateMaskOptions = getDateMaskOptions(maskOptions);
  const dateMaskedRef = useMaskito({ options: dateMaskOptions });
  const dateInputRef = useMergeRefs(ref, dateMaskedRef);

  return <Input ref={dateInputRef} {...props} />;
});
