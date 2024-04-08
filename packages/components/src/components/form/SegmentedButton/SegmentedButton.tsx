import { Button as ChakraButton, ResponsiveValue, useMultiStyleConfig } from '@chakra-ui/react';
import { Flex, IconProps } from '@components';
import { useResponsiveValue } from '@hooks';
import React, { FC, ReactElement, cloneElement, isValidElement, useState } from 'react';
import {
  ButtonProps,
  OptionValue,
  SegmentedButtonProps,
  SegmentedButtonSize,
  SegmentedButtonStaticMembers,
  SegmentedButtonStyles,
} from './types';

// Habrá varios tipos de botones, unos que aceptan iconos, que acepten texto + icono (opcional), pero no podrán ser combinados entre ellos.
// El primer elemento y el último tendrán un radius diferente a los que estén entre medias.
// Habrá que contemplar los distintos estados: default, selected, focus, selected/focus, hover, disabled
// El foco no se ve correctamente navegando con el teclado.

export const SegmentedButton: FC<SegmentedButtonProps> & SegmentedButtonStaticMembers = ({
  options,
  onChange,
  variant = 'primary',
  size = 'l',
  defaultOption = '',
  isDisabled = false,
}) => {
  const [selectedValue, setSelectedValue] = useState<OptionValue>(defaultOption);
  const responsiveSize = useResponsiveValue(size) as SegmentedButtonSize;

  const handleChange = (value: OptionValue) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <Flex>
      {options.map((option) =>
        cloneElement(option.segment, {
          key: option.value,
          onClick: () => handleChange(option.value),
          isActive: selectedValue === option.value,
          variant,
          size: responsiveSize,
          isDisabled,
        })
      )}
    </Flex>
  );
};

export const Button: FC<ButtonProps> = ({ isActive, children, leadingIcon, trailingIcon, size, variant, ...rest }) => {
  const styles = useMultiStyleConfig('SegmentedButton', { isActive, variant, size }) as SegmentedButtonStyles;
  const leadingIconSized = getIcon(leadingIcon, size);
  const trailingIconSized = getIcon(trailingIcon, size);
  return (
    <ChakraButton {...styles.button} size={size} {...rest}>
      {leadingIconSized}
      {children}
      {trailingIconSized}
    </ChakraButton>
  );
};

SegmentedButton.Button = Button;

const getIcon = (icon: ReactElement<IconProps>, size: ResponsiveValue<SegmentedButtonSize>) => {
  if (!isValidElement(icon)) {
    return null;
  }

  return cloneElement(icon, { size } as Partial<IconProps>);
};
