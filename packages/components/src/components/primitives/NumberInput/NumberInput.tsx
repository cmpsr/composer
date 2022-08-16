import React from 'react';
import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper as ChakraIncrementStepper,
  NumberDecrementStepper as ChakraDecrementStepper,
  forwardRef,
  NumberIncrementStepperProps,
  NumberDecrementStepperProps,
} from '@chakra-ui/react';
import { NumberInputProps } from './types';
import { IconCaretDown, IconCaretUp } from '@components';

const NumberInput = forwardRef<NumberInputProps, typeof ChakraNumberInput>((props, ref) => (
  <ChakraNumberInput ref={ref} {...props} />
));

const IncrementStepper = forwardRef<NumberIncrementStepperProps, typeof ChakraIncrementStepper>((props, ref) => (
  <ChakraIncrementStepper ref={ref} {...props}>
    <IconCaretUp size="s" />
  </ChakraIncrementStepper>
));

const DecrementStepper = forwardRef<NumberDecrementStepperProps, typeof ChakraDecrementStepper>((props, ref) => (
  <ChakraDecrementStepper ref={ref} {...props}>
    <IconCaretDown size="s" />
  </ChakraDecrementStepper>
));

const NumberInputNamespace = Object.assign(NumberInput, {
  Field: NumberInputField,
  Stepper: NumberInputStepper,
  IncrementStepper,
  DecrementStepper,
});

export { NumberInputNamespace as NumberInput };
