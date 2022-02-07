import React, { FC } from 'react';
import { Button as ChakraButton, useMultiStyleConfig } from '@chakra-ui/react';
import { ButtonProps } from './types';
import { Flex, IconSize, Spinner, SpinnerProps } from 'components';

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  size,
  isLoading,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  ...props
}) => {
  const { loading } = useMultiStyleConfig('Button', {
    variant,
    size,
    isLoading,
  }) as { loading: SpinnerProps };

  return (
    <ChakraButton
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
};

const getIconSize = (size: string): IconSize => (size === 'l' ? 'm' : size) as IconSize;
