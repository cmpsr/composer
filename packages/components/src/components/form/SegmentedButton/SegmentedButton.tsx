import { Button as ChakraButton, IconProps, ResponsiveValue, forwardRef, useMultiStyleConfig } from '@chakra-ui/react';
import { Flex } from '@components';
import { useResponsiveValue } from '@hooks';
import React, { FC, ReactElement, cloneElement, isValidElement } from 'react';
import {
  SegmentedButtonButtonProps,
  SegmentedButtonProps,
  SegmentedButtonSize,
  SegmentedButtonStaticMembers,
  SegmentedIconButtonProps,
  SegmentedButtonContextProps,
  SegmentedButtonStyles,
  SegmentedButtonValue,
} from './types';
import { createContext } from '@chakra-ui/react-utils';

const [SegmentedButtonProvider, useSegmentedButtonContext] = createContext<SegmentedButtonContextProps>({
  name: 'SegmentedButtonContext',
});

export const SegmentedButton: FC<SegmentedButtonProps> & SegmentedButtonStaticMembers = ({
  children,
  onChange,
  variant = 'primary',
  size = 'l',
  isDisabled = false,
  selectedValue,
  defaultValue,
  ...rest
}) => {
  const responsiveSize = useResponsiveValue(size) as SegmentedButtonSize;
  const value = selectedValue !== undefined ? selectedValue : defaultValue;

  const getButtonStyles = (isActive?: boolean) => {
    return useMultiStyleConfig('SegmentedButton', { variant, size: responsiveSize, isActive }) as SegmentedButtonStyles;
  };
  const handleChange = (newValue: SegmentedButtonValue) => {
    onChange(newValue);
  };

  return (
    <SegmentedButtonProvider value={{ getButtonStyles }}>
      <Flex {...getButtonStyles().container} role="group" {...rest}>
        {children.map((child) =>
          cloneElement(child, {
            key: child.props.value,
            onClick: () => handleChange(child.props.value),
            isActive: value === child.props.value,
            size: responsiveSize,
            isDisabled,
            'aria-current': value === child.props.value,
          }),
        )}
      </Flex>
    </SegmentedButtonProvider>
  );
};

const Button = forwardRef<SegmentedButtonButtonProps, typeof ChakraButton>(
  ({ children, leadingIcon, trailingIcon, size, isActive, ...rest }, ref) => {
    const { getButtonStyles } = useSegmentedButtonContext();
    const leadingIconSized = getIcon(leadingIcon, size);
    const trailingIconSized = getIcon(trailingIcon, size);
    return (
      <ChakraButton {...getButtonStyles(isActive).button} size={size} {...rest} ref={ref}>
        {leadingIconSized}
        {children}
        {trailingIconSized}
      </ChakraButton>
    );
  },
);

SegmentedButton.Button = Button;

const IconButton = forwardRef<SegmentedIconButtonProps, typeof ChakraButton>(
  ({ icon, size, isActive, ...rest }, ref) => {
    const { getButtonStyles } = useSegmentedButtonContext();
    const buttonStyles = getButtonStyles(isActive);
    const iconSized = getIcon(icon, size);
    return (
      <ChakraButton {...buttonStyles.button} {...buttonStyles.icon} size={size} {...rest} ref={ref}>
        {iconSized}
      </ChakraButton>
    );
  },
);

SegmentedButton.Icon = IconButton;

const getIcon = (icon: ReactElement<IconProps>, size: ResponsiveValue<SegmentedButtonSize>) => {
  if (!isValidElement(icon)) {
    return null;
  }
  return cloneElement(icon, { size } as Partial<IconProps>);
};
