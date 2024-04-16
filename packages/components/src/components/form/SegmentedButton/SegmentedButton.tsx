import { Button as ChakraButton, IconProps, ResponsiveValue, forwardRef, useMultiStyleConfig } from '@chakra-ui/react';
import { Flex } from '@components';
import { useResponsiveValue } from '@hooks';
import React, { FC, PropsWithChildren, ReactElement, cloneElement, isValidElement, useState } from 'react';
import {
  SegmentedButtonButtonProps,
  SegmentedButtonProps,
  SegmentedButtonSize,
  SegmentedButtonStaticMembers,
  SegmentedButtonStyles,
  SegmentedIconButtonProps,
  Value,
} from './types';

export const SegmentedButton: FC<PropsWithChildren<SegmentedButtonProps>> & SegmentedButtonStaticMembers = ({
  children,
  onChange,
  variant = 'primary',
  size = 'l',
  defaultValue = '',
  isDisabled = false,
}) => {
  const styles = useMultiStyleConfig('SegmentedButton') as SegmentedButtonStyles;
  const [selectedValue, setSelectedValue] = useState<Value>(defaultValue);
  const responsiveSize = useResponsiveValue(size) as SegmentedButtonSize;

  const handleChange = (value: Value) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <Flex {...styles.container} role="group">
      {(children as ReactElement[]).map((child) =>
        cloneElement(child, {
          key: child.props.value,
          onClick: () => handleChange(child.props.value),
          isActive: selectedValue === child.props.value,
          variant,
          size: responsiveSize,
          isDisabled,
          'aria-current': selectedValue === child.props.value,
        })
      )}
    </Flex>
  );
};

const Button = forwardRef<SegmentedButtonButtonProps, typeof ChakraButton>(
  ({ isActive, children, leadingIcon, trailingIcon, size, variant, ...rest }, ref) => {
    const styles = useMultiStyleConfig('SegmentedButton', { isActive, variant, size }) as SegmentedButtonStyles;
    const leadingIconSized = getIcon(leadingIcon, size);
    const trailingIconSized = getIcon(trailingIcon, size);
    return (
      <ChakraButton {...styles.button} size={size} {...rest} ref={ref}>
        {leadingIconSized}
        {children}
        {trailingIconSized}
      </ChakraButton>
    );
  }
);

SegmentedButton.Button = Button;

const IconButton = forwardRef<SegmentedIconButtonProps, typeof ChakraButton>(
  ({ isActive, icon, size, variant, ...rest }, ref) => {
    const styles = useMultiStyleConfig('SegmentedButton', { isActive, variant, size }) as SegmentedButtonStyles;
    const iconSized = getIcon(icon, size);
    return (
      <ChakraButton {...styles.button} {...styles.icon} size={size} {...rest} ref={ref}>
        {iconSized}
      </ChakraButton>
    );
  }
);

SegmentedButton.Icon = IconButton;

const getIcon = (icon: ReactElement<IconProps>, size: ResponsiveValue<SegmentedButtonSize>) => {
  if (!isValidElement(icon)) {
    return null;
  }

  return cloneElement(icon, { size } as Partial<IconProps>);
};
