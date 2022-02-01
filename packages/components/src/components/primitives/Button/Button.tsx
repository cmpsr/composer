import React, { FC } from 'react';
import { Button as ChakraButton, Flex, useMultiStyleConfig } from '@chakra-ui/react';
import { ButtonProps } from './types';
import { Spinner } from 'components/primitives/Spinner';
import { SpinnerProps } from 'components/primitives/Spinner/types';

export const Button: FC<ButtonProps> = ({
  children,
  trailingIcon: TrailingIcon,
  leadingIcon: LeadingIcon,
  ...props
}) => {
  const { loading, iconSize } = useMultiStyleConfig('Button', {
    variant: props.variant,
    size: props.size,
    isLoading: props.isLoading,
    iconSize: props.iconSize,
  }) as { loading: SpinnerProps; iconSize: 's' | 'm' | 'xs' | 'l' };

  return (
    <ChakraButton spinner={<Spinner data-testid="cmpsr.button.spinner" {...loading} />} {...props}>
      <Flex direction="row" alignItems="center" columnGap="0.5rem">
        {LeadingIcon && <LeadingIcon data-testid="cmpsr.button.icon.leading" size={iconSize} />}
        {children}
        {TrailingIcon && <TrailingIcon data-testid="cmpsr.button.icon.trailing" size={iconSize} />}
      </Flex>
    </ChakraButton>
  );
};
