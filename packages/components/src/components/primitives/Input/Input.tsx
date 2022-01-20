import React, {
  Input as ChakraInput,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputLeftAddon as ChakraInputLeftAddon,
  InputRightAddon as ChakraInputRightAddon,
} from '@chakra-ui/react';
import { FC } from 'react';
import { InputProps } from './types';

export const Input: FC<InputProps> = ({
  trailingIcon,
  showTrailingIcon,
  leftLabel,
  rightLabel,
  ...props
}) => {
  return (
    <ChakraInputGroup>
      {trailingIcon && showTrailingIcon && !leftLabel && (
        <ChakraInputLeftElement pointerEvents="none" children={trailingIcon} />
      )}
      {leftLabel && <ChakraInputLeftAddon children={leftLabel} />}
      <ChakraInput {...props} />
      {rightLabel && <ChakraInputRightAddon children={rightLabel} />}
    </ChakraInputGroup>
  );
};
