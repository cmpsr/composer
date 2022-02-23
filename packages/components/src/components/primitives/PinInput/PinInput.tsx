import React, { FC } from 'react';
import { PinInput as ChakraPinInput, PinInputField } from '@chakra-ui/react';
import { PinInputProps, PinInputStaticMembers } from './types';
import { Flex, FlexProps } from '@components';

const renderFieldsByNumOfDigits: (numOfDigits: number) => React.ReactNode[] = (numOfDigits) => {
  const fields: React.ReactNode[] = [];
  for (let digit = 0; digit < numOfDigits; digit++) {
    fields.push(<PinInputField key={digit} />);
  }
  return fields;
};

export const PinInput: FC<PinInputProps> & PinInputStaticMembers = ({
  children,
  numOfDigits = 4,
  placeholder = '0',
  ...rest
}) => {
  return (
    <PinInput.Container>
      <ChakraPinInput placeholder={placeholder} {...rest}>
        {children || renderFieldsByNumOfDigits(numOfDigits)}
      </ChakraPinInput>
    </PinInput.Container>
  );
};

const PinInputContainer = (props: FlexProps) => <Flex columnGap="0.5rem" {...props} />;

PinInput.Field = PinInputField;
PinInput.Container = PinInputContainer;
