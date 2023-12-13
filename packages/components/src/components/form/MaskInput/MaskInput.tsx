import React from 'react';
import { forwardRef, useMergeRefs } from '@chakra-ui/react';
import { MaskInputProps } from './types';
import { Input } from '@components';
import { useMaskito } from '@maskito/react';
import { getMaskOptions } from './getMaskOptions';

export const MaskInput = forwardRef<MaskInputProps, typeof Input>(({ maskOptions, ...props }, ref) => {
  const maskInputOptions = getMaskOptions(maskOptions);
  const maskedInputRef = useMaskito({ options: maskInputOptions });
  const maskInputRef = useMergeRefs(ref, maskedInputRef);

  return <Input ref={maskInputRef} {...props} />;
});
