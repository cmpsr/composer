import React, { FC } from 'react';
import { type DecisionTreeInputProps } from './types';
import { MaskInput } from '@cmpsr/components';

export const DecisionTreeInput: FC<DecisionTreeInputProps> = ({ trailingMask, ...props }) => {
  return (
    <MaskInput
      maskOptions={{
        mask: /^\d{0,3}(\.\d{0,2})?$/,
        postfix: ` ${trailingMask}`,
      }}
      {...props}
    />
  );
};
