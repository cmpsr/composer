import React from 'react';
import { Button as ChakraButton, forwardRef, useMultiStyleConfig } from '@chakra-ui/react';
import { ButtonProps } from './types';
import { Flex, IconSize, Spinner, SpinnerProps } from '@components';

export const Button = forwardRef<ButtonProps, typeof ChakraButton>(
  ({ children, variant, size, isLoading, leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, ...props }, ref) => {
    const { loading } = useMultiStyleConfig('Button', {
      variant,
      size,
      isLoading,
    }) as { loading: SpinnerProps };

    return (
      <ChakraButton
        ref={ref}
        spinner={<Spinner data-testid="cmpsr.button.spinner" {...loading} />}
        variant={variant}
        size={size}
        isLoading={isLoading}
        {...props}
      >
        <Flex direction="row" alignItems="center" columnGap="0.5rem">
          {LeadingIcon && <LeadingIcon size={getIconSize(size)} data-testid="cmpsr.button.leading-icon" />}
          {children}
          {TrailingIcon && <TrailingIcon size={getIconSize(size)} data-testid="cmpsr.button.trailing-icon" />}
        </Flex>
      </ChakraButton>
    );
  }
);

const getIconSize = (size: string): IconSize => (size === 'l' ? 'm' : size) as IconSize;
