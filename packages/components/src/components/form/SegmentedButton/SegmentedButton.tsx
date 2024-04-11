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
  SegmentedIconButtonProps,
} from './types';

export const SegmentedButton: FC<SegmentedButtonProps> & SegmentedButtonStaticMembers = ({
  options,
  onChange,
  variant = 'primary',
  size = 'l',
  defaultOption = '',
  isDisabled = false,
}) => {
  const styles = useMultiStyleConfig('SegmentedButton') as SegmentedButtonStyles;
  const [selectedValue, setSelectedValue] = useState<OptionValue>(defaultOption);
  const responsiveSize = useResponsiveValue(size) as SegmentedButtonSize;

  const handleChange = (value: OptionValue) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <Flex {...styles.container} role="group">
      {options.map((option) =>
        cloneElement(option.segment, {
          key: option.value,
          onClick: () => handleChange(option.value),
          isActive: selectedValue === option.value,
          variant,
          size: responsiveSize,
          isDisabled,
          'aria-current': selectedValue === option.value,
        })
      )}
    </Flex>
  );
};

const Button: FC<ButtonProps> = ({ isActive, children, leadingIcon, trailingIcon, size, variant, ...rest }) => {
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

const IconButton: FC<SegmentedIconButtonProps> = ({ isActive, icon, size, variant, ...rest }) => {
  const styles = useMultiStyleConfig('SegmentedButton', { isActive, variant, size }) as SegmentedButtonStyles;
  const iconSized = getIcon(icon, size);
  return (
    <ChakraButton {...styles.button} {...styles.icon} size={size} {...rest}>
      {iconSized}
    </ChakraButton>
  );
};

SegmentedButton.Icon = IconButton;

const getIcon = (icon: ReactElement<IconProps>, size: ResponsiveValue<SegmentedButtonSize>) => {
  if (!isValidElement(icon)) {
    return null;
  }

  return cloneElement(icon, { size } as Partial<IconProps>);
};
