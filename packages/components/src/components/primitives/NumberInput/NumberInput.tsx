import React from 'react';
import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper as ChakraIncrementStepper,
  NumberDecrementStepper as ChakraDecrementStepper,
  forwardRef,
  useStyles,
} from '@chakra-ui/react';
import { NumberInputProps } from './types';
import { IconCaretDown, IconCaretUp, Flex } from '@components';

const NumberInput = forwardRef<NumberInputProps, typeof ChakraNumberInput>((props, ref) => {
  return <ChakraNumberInput ref={ref} {...props} />;
});

// const NumberIncrementStepper = forwardRef((props, ref) => {
//   const styles = useStyles();
//   const { getIncrementButtonProps } = useNumberInput();
//   const increment = getIncrementButtonProps(props, ref);
//   // console.log('>>', increment);
//   return (
//     <StyledStepper {...increment} __css={styles.stepper}>
//       <IconCaretUp size="s" />
//     </StyledStepper>
//   );
// });

const IncrementStepper = forwardRef((props, ref) => {
  const styles = useStyles();
  return (
    <ChakraIncrementStepper ref={ref} {...props}>
      <IconCaretUp size="s" />
    </ChakraIncrementStepper>
  );
});

const DecrementStepper = forwardRef((props, ref) => {
  return (
    <ChakraDecrementStepper ref={ref} {...props}>
      <IconCaretDown size="s" />
    </ChakraDecrementStepper>
  );
});

const NumberInputNamespace = Object.assign(NumberInput, {
  NumberInputField,
  NumberInputStepper,
  IncrementStepper,
  DecrementStepper,
});

export { NumberInputNamespace as NumberInput };
