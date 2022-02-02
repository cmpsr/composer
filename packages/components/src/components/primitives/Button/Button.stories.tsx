import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from './Button';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { ButtonSizes, buttonVariants } from './types';
import * as Icons from '../Icons';

export default {
  component: Button,
  title: 'Components/Primitives/Button',
  argTypes: {
    variant: {
      options: buttonVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {buttonVariants.map((variant, i) => (
      <VStack key={`${variant}-${i}`}>
        <HStack>
          {ButtonSizes.map((size, i) => (
            <Button variant={variant} size={size} key={`${size}-${i}`}>
              {variant}
            </Button>
          ))}
        </HStack>
        <HStack>
          {ButtonSizes.map((size, i) => (
            <Button variant={variant} size={size} key={`${size}-${i}-disabled`} isDisabled>
              {variant}
            </Button>
          ))}
        </HStack>
        <HStack>
          {ButtonSizes.map((size, i) => (
            <Button variant={variant} size={size} key={`${size}-${i}-loading`} isLoading>
              {variant}
            </Button>
          ))}
        </HStack>
        <HStack>
          {ButtonSizes.map((size) => (
            <Button
              variant={variant}
              size={size}
              key={`${size}-${i}-with-icon`}
              trailingIcon={Icons.IconExternalLink}
              leadingIcon={Icons.IconExternalLink}
            >
              {variant}
            </Button>
          ))}
        </HStack>
      </VStack>
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = ({ showLeadingIcon, showTrailingIcon, ...args }) => (
  <Button
    {...args}
    {...(showLeadingIcon && { leadingIcon: Icons.IconExternalLink })}
    {...(showTrailingIcon && { trailingIcon: Icons.IconExternalLink })}
  ></Button>
);
export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'm',
  children: 'Composer button!',
  isLoading: false,
  showLeadingIcon: true,
  showTrailingIcon: true,
};
