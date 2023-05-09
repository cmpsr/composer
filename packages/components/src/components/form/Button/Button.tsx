import React from 'react';
import { Button as ChakraButton, forwardRef, IconProps, useMultiStyleConfig } from '@chakra-ui/react';
import { ButtonProps, ButtonSize } from './types';
import { Flex, Spinner, SpinnerProps, SpinnerVariant } from '@components';

export const Button = forwardRef<ButtonProps, typeof ChakraButton>(
  ({ children, variant, size, isLoading, leadingIcon, trailingIcon, ...props }, ref) => {
    const { loading } = useMultiStyleConfig('Button', {
      variant,
      size,
      isLoading,
    }) as { loading: SpinnerProps };
    const leftIcon = getIcon(leadingIcon, size);
    const rightIcon = getIcon(trailingIcon, size);
    const isLinkVariant = variant?.startsWith('link');

    return (
      <ChakraButton
        ref={ref}
        spinner={
          <Spinner
            data-testid="cmpsr.button.spinner"
            {...(isLinkVariant && { variant: variant.split('-')[1] as SpinnerVariant })}
            {...loading}
          />
        }
        variant={variant}
        size={size}
        isLoading={isLoading}
        {...props}
      >
        <Flex direction="row" alignItems="center" columnGap="0.5rem">
          {leftIcon}
          {children}
          {rightIcon}
        </Flex>
      </ChakraButton>
    );
  }
);

const getIcon = (icon: React.ReactElement<IconProps>, size: ButtonSize) => {
  if (!React.isValidElement(icon)) {
    return null;
  }

  return React.cloneElement(icon, { size: getIconSize(size) } as Partial<IconProps>);
};

const getIconSize = (size: ButtonSize) => (size === 'l' ? 'm' : size);
