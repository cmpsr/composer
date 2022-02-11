import React, { FC } from 'react';
import {
  FormControl as ChakraFormControl,
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
  Switch as ChakraSwitch,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { SwitchProps } from './types';

const generateRandomId = () => Math.random().toString(36).slice(2);

export const Switch: FC<SwitchProps> = ({ label, labelPosition = 'left', id, ...props }) => {
  const componentId = id ?? generateRandomId();
  const isLeftLabel = labelPosition === 'left';

  const { label: labelStyle } = useMultiStyleConfig('Switch', {
    size: props.size,
    isDisabled: props.isDisabled,
  }) as { label: ChakraFormLabelProps };

  return (
    <ChakraFormControl display="flex" alignItems="center" data-testid="cmpsr.switch" gap="0.5rem">
      {label && (
        <ChakraFormLabel
          {...labelStyle}
          data-testid={`cmpsr.switch-${labelPosition}-label`}
          htmlFor={`cmpsr.${componentId}`}
          order={isLeftLabel ? '1' : '2'}
        >
          {label}
        </ChakraFormLabel>
      )}
      <ChakraSwitch {...props} id={`cmpsr.${componentId}`} order={isLeftLabel ? '2' : '1'} />
    </ChakraFormControl>
  );
};
