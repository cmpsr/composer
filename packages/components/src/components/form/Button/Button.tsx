import React from 'react';
import { Button as ChakraButton, forwardRef, IconProps, useMultiStyleConfig } from '@chakra-ui/react';
import { ButtonProps, ButtonSize } from './types';
import { ButtonVariant, Flex, LinkVariant, Spinner, SpinnerProps, SpinnerVariant } from '@components';
import { useResponsiveValue } from '@hooks';

export const Button = forwardRef<ButtonProps, typeof ChakraButton>(
  ({ children, variant, size, isLoading, leadingIcon, trailingIcon, ...props }, ref) => {
    const responsiveVariant = useResponsiveValue(variant) as ButtonVariant | LinkVariant;
    const responsiveSize = useResponsiveValue(size) as ButtonSize;
    const { loading, columnGap } = useMultiStyleConfig('Button', {
      variant,
      size: responsiveSize,
      isLoading,
    }) as { loading: SpinnerProps; columnGap: string };
    const leftIcon = getIcon(leadingIcon, responsiveSize);
    const rightIcon = getIcon(trailingIcon, responsiveSize);
    const isLinkVariant = responsiveVariant?.startsWith('link');

    return (
      <ChakraButton
        ref={ref}
        spinner={
          <Spinner
            data-testid="cmpsr.button.spinner"
            {...(isLinkVariant && { variant: responsiveVariant.split('-')[1] as SpinnerVariant })}
            {...loading}
          />
        }
        variant={variant}
        size={size}
        isLoading={isLoading}
        {...props}
      >
        <Flex direction="row" alignItems="center" columnGap={columnGap}>
          {leftIcon}
          {children}
          {rightIcon}
        </Flex>
      </ChakraButton>
    );
  },
);

const getIcon = (icon: React.ReactElement<IconProps>, size: ButtonSize) => {
  if (!React.isValidElement(icon)) {
    return null;
  }

  return React.cloneElement(icon, { size: getIconSize(size) } as Partial<IconProps>);
};

const getIconSize = (size: ButtonSize) => (size === 'l' ? 'm' : size);
