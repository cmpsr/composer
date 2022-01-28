import React, { FC, useEffect, useState } from 'react';
import {
  FormControl as ChakraFormControl,
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
  Switch as ChakraSwitch,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { SwitchProps } from './types';

const generateRandomId = () => Math.random().toString(36).slice(2);

export const Switch: FC<SwitchProps> = ({ label, labelPosition, ...props }) => {
  const [componentId] = useState(generateRandomId());

  const [isChecked, setChecked] = useState(props.isChecked);

  useEffect(() => {
    setChecked(props.isChecked);
  }, [props.isChecked]);

  const { rightLabel, leftLabel } = useMultiStyleConfig('Switch', {
    variant: props.variant,
    size: props.size,
    isDisabled: props.isDisabled,
    isChecked,
  }) as { rightLabel: ChakraFormLabelProps; leftLabel: ChakraFormLabelProps };

  return (
    <ChakraFormControl
      display="flex"
      alignItems="center"
      data-testid="cmpsr.switch"
    >
      {label && labelPosition === 'left' && (
        <ChakraFormLabel
          {...leftLabel}
          data-testid="cmpsr.switch-left-label"
          htmlFor={`cmpsr.${componentId}`}
        >
          {label}
        </ChakraFormLabel>
      )}
      <ChakraSwitch
        {...props}
        isChecked={isChecked}
        onChange={(evt) => {
          setChecked(evt.target.checked);
          props.onChange && props.onChange(evt);
        }}
        id={`cmpsr.${componentId}`}
      />
      {label && labelPosition === 'right' && (
        <ChakraFormLabel
          {...rightLabel}
          data-testid="cmpsr.switch-right-label"
          htmlFor={`cmpsr.${componentId}`}
        >
          {label}
        </ChakraFormLabel>
      )}
    </ChakraFormControl>
  );
};
