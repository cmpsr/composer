import React, { FC } from 'react';
import {
  Flex,
  PinInput as ChakraPinInput,
  PinInputField as ChakraPinInputField,
  PinInputFieldProps,
} from '@chakra-ui/react';
import { PinInputProps, PinInputStaticMembers } from './types';

export const PinInput: FC<PinInputProps> & PinInputStaticMembers = ({
  children,
  numOfDigits = 4,
  placeholder = '0',
  pinInputFieldProps,
  ...rest
}) => {
  const digits = Array.from(Array(numOfDigits).keys());

  return (
    <Flex justifyContent="center" columnGap="0.5rem">
      <ChakraPinInput data-testid="cmpsr.pin-input" placeholder={placeholder} {...rest}>
        {children || digits.map((digit) => <ChakraPinInputField key={digit} {...pinInputFieldProps} />)}
      </ChakraPinInput>
    </Flex>
  );
};

const InputField: FC<PinInputFieldProps> = (props) => <ChakraPinInputField {...props} />;

PinInput.Field = InputField;
