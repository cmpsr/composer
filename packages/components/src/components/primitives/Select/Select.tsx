import React, { FC } from 'react';
import { Select as ChakraSelect, useMultiStyleConfig } from '@chakra-ui/react';
import { SelectProps } from './types';
import { IconChevronDown } from '..';

export const Select: FC<SelectProps> = ({ value, placeholder, ...props }) => {
  const {
    field: {
      color,
      placeholderColor,
      _disabled: { disabledPlaceHolderColor },
    },
  } = useMultiStyleConfig('Select', { value, iconSize: props.iconSize }) as {
    field: { color: string; placeholderColor: string; _disabled: { disabledPlaceHolderColor: string } };
  };

  let textColor = props?.isDisabled ? disabledPlaceHolderColor : color;

  if (placeholder && (!value || value === '')) {
    textColor = props?.isDisabled ? disabledPlaceHolderColor : placeholderColor;
  }

  return (
    <ChakraSelect
      data-testid="cmpsr.select"
      textColor={textColor}
      placeholder={placeholder}
      icon={<IconChevronDown />}
      value={value}
      {...props}
    />
  );
};
