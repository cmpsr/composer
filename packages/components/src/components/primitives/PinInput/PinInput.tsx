import React, { FC } from 'react';
import { HStack, PinInput as ChakraPinInput, PinInputField as ChakraPinInputField } from '@chakra-ui/react';
import { PinInputProps } from './types';

export const PinInput: FC<PinInputProps> = ({ numOfDigits = 1, placeholder = '0', pinInputFieldProps, ...rest }) => {
  const digits = Array.from(Array(numOfDigits).keys());

  return (
    <HStack>
      <ChakraPinInput data-testid="cmpsr.pin-input" placeholder={placeholder} {...rest}>
        {digits.map((digit) => (
          <ChakraPinInputField key={digit} {...pinInputFieldProps} />
        ))}
      </ChakraPinInput>
    </HStack>
  );
};
