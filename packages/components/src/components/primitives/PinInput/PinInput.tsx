import React, { FC } from 'react';
import { PinInput as ChakraPinInput, PinInputField as ChakraPinInputField, PinInputFieldProps } from '@chakra-ui/react';
import { PinInputProps, PinInputStaticMembers } from './types';
import { Flex } from '@components';

const renderFieldsByNumOfDigits: (numOfDigits: number, pinInputFieldProps: PinInputFieldProps) => React.ReactNode[] = (
  numOfDigits,
  pinInputFieldProps
) => {
  const fields: React.ReactNode[] = [];
  for (let digit = 0; digit < numOfDigits; digit++) {
    fields.push(<ChakraPinInputField key={digit} {...pinInputFieldProps} />);
  }
  return fields;
};

export const PinInput: FC<PinInputProps> & PinInputStaticMembers = ({
  children,
  numOfDigits = 4,
  placeholder = '0',
  pinInputFieldProps,
  ...rest
}) => {
  return (
    <Flex justifyContent="center" columnGap="0.5rem">
      <ChakraPinInput data-testid="cmpsr.pin-input" placeholder={placeholder} {...rest}>
        {children || renderFieldsByNumOfDigits(numOfDigits, pinInputFieldProps)}
      </ChakraPinInput>
    </Flex>
  );
};

PinInput.Field = ChakraPinInputField;
