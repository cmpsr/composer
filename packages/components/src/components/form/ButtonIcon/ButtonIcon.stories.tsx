import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { ButtonIcon } from './ButtonIcon';
import { buttonIconSizes, buttonIconVariants } from './types';
import { IconCloud } from '@components';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';

export default {
  component: ButtonIcon,
  title: 'Components/Form/ButtonIcon',
  parameters: {
    docs: {
      description: {
        component:
          'Note: The ButtonIcon component has replaced the previous IconButton. We recommend utilizing ButtonIcon instead. ',
      },
    },
  },
  argTypes: {
    size: {
      options: buttonIconSizes,
      control: { type: 'select' },
    },
    variant: {
      options: buttonIconVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

export const All = () => (
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
      {buttonIconVariants.map((variant, i) => (
        <Fragment key={i}>
          {[false, true].map((isRound) =>
            ['default', 'disabled', 'loading'].map((state, i) => (
              <Tr key={`${state}-${i}`}>
                <Td>
                  {variant}-{state}-{isRound ? 'rounded' : 'squared'}
                </Td>
                {buttonIconSizes.map((size, i) => (
                  <Td key={`${variant}-${size}-${i}-${state}`}>
                    <ButtonIcon
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
            )),
          )}
        </Fragment>
      ))}
    </Tbody>
  </Table>
);

const Template = (args) => <ButtonIcon icon={<IconCloud />} isLoading {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'l',
  isDisabled: false,
  isLoading: false,
  isRound: false,
};
