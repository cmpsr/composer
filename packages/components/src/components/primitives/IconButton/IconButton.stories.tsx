import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { IconButton } from './IconButton';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { iconButtonSizes, iconButtonVariants } from './types';
import { IconCloud } from '@components';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';

export default {
  component: IconButton,
  title: 'Components/Primitives/IconButton',
  argTypes: {
    size: {
      options: iconButtonSizes,
      control: { type: 'select' },
    },
    variant: {
      options: iconButtonVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {iconButtonVariants.map((variant) => (
      <VStack key={variant}>
        <HStack>
          {iconButtonSizes.map((size) => (
            <IconButton icon={<IconCloud />} aria-label={size} variant={variant} size={size} key={size} />
          ))}
        </HStack>
        <HStack>
          {iconButtonSizes.map((size) => (
            <IconButton icon={<IconCloud />} aria-label={size} variant={variant} size={size} key={size} isDisabled />
          ))}
        </HStack>
        <HStack>
          {iconButtonSizes.map((size) => (
            <IconButton icon={<IconCloud />} aria-label={size} variant={variant} size={size} key={size} isRound />
          ))}
        </HStack>
        <HStack>
          {iconButtonSizes.map((size) => (
            <IconButton icon={<IconCloud />} aria-label={size} variant={variant} size={size} key={size} isLoading />
          ))}
        </HStack>
      </VStack>
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

export const AllTemplate1 = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>State</Th>
        <Th>XS</Th>
        <Th>S</Th>
        <Th>M</Th>
        <Th>L</Th>
      </Tr>
    </Thead>
    <Tbody>
      {iconButtonVariants.map((variant, i) => (
        <Fragment key={i}>
          {[false, true].map((isRound) =>
            ['default', 'disabled', 'loading'].map((state, i) => (
              <Tr key={`${state}-${i}`}>
                <Td>
                  {variant}-{state}-{isRound ? 'rounded' : 'squared'}
                </Td>
                {iconButtonSizes.map((size, i) => (
                  <Td key={`${variant}-${size}-${i}-${state}`}>
                    <IconButton
                      icon={<IconCloud />}
                      aria-label={size}
                      variant={variant}
                      size={size}
                      {...{
                        ...(state === 'disabled' && {
                          isDisabled: true,
                        }),
                      }}
                      {...{
                        ...(state === 'loading' && {
                          isLoading: true,
                        }),
                      }}
                      isRound={isRound}
                    />
                  </Td>
                ))}
              </Tr>
            ))
          )}
        </Fragment>
      ))}
    </Tbody>
  </Table>
);

const Template = (args) => <IconButton icon={<IconCloud />} isLoading {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'l',
  isDisabled: false,
  isLoading: false,
};
