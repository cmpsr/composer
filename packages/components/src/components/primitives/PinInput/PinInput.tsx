import React, { FC } from 'react';
import { PinInput as ChakraPinInput, PinInputField as ChakraPinInputField } from '@chakra-ui/react';
import { PinInputProps, PinInputFieldProps } from './types';

export const PinInput: FC<PinInputProps> = (props) => <ChakraPinInput {...props} data-testid="cmpsr.pin-input" />;

export const PinInputField: FC<PinInputFieldProps> = (props) => <ChakraPinInputField {...props} />;
