import React, { FC } from 'react';
import { Select as ChakraSelect, useMultiStyleConfig } from '@chakra-ui/react';
import { SelectProps } from './types';

export const Select: FC<SelectProps> = ({ value, placeholder, ...props }) => {
  const {
    field: { color, placeholderColor },
  } = useMultiStyleConfig('Select', { value }) as {
    field: { color: string; placeholderColor: string };
  };

  let textColor = color;

  if (placeholder && (!value || value === '')) {
    textColor = placeholderColor;
  }

  return (
    <ChakraSelect
      data-testid="cmpsr.select"
      color={textColor}
      textColor={textColor}
      placeholder={placeholder}
      {...props}
    />
  );
};
