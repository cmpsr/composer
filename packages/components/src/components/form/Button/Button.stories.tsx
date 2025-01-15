import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Button } from './Button';
import { buttonSizes, buttonVariants } from './types';
import * as Icons from '../../media/Icons';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { linkVariants } from '@components';

export default {
  component: Button,
  title: 'Components/Form/Button',
  argTypes: {
    variant: {
      options: buttonVariants,
      control: { type: 'select' },
    },
    size: {
      options: buttonSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
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
      {[...buttonVariants, ...linkVariants.filter((v) => v !== 'link')].map((variant, i) => (
        <Fragment key={i}>
          {['Default', 'Leading Icon', 'Trailing Icon', 'Both Icons', 'Disabled', 'Loading'].map((state, i) => (
            <Tr key={`${state}-${i}`}>
              <Td>{state}</Td>
              {buttonSizes.map((size, i) => (
                <Td key={`${variant}-${size}-${i}-${state}`}>
                  <Button
                    variant={variant}
                    size={size}
                    {...{
                      ...(state === 'Disabled' && {
                        isDisabled: true,
                      }),
                    }}
                    {...{
                      ...(state === 'Loading' && {
                        isLoading: true,
                      }),
                    }}
                    {...{
                      ...(state === 'Both Icons' && {
                        trailingIcon: <Icons.IconExternalLink />,
                        leadingIcon: <Icons.IconExternalLink />,
                      }),
                    }}
                    {...{
                      ...(state === 'Trailing Icon' && {
                        trailingIcon: <Icons.IconExternalLink />,
                      }),
                    }}
                    {...{
                      ...(state === 'Leading Icon' && {
                        leadingIcon: <Icons.IconExternalLink />,
                      }),
                    }}
                  >
                    {variant}
                  </Button>
                </Td>
              ))}
            </Tr>
          ))}
        </Fragment>
      ))}
    </Tbody>
  </Table>
);
export const All = AllTemplate.bind({});

const Template = ({ showLeadingIcon, showTrailingIcon, ...args }) => (
  <Button
    {...(showLeadingIcon && { leadingIcon: <Icons.IconExternalLink /> })}
    {...(showTrailingIcon && { trailingIcon: <Icons.IconExternalLink /> })}
    {...args}
  />
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'm',
  children: 'Composer button!',
  isLoading: false,
  showLeadingIcon: true,
  showTrailingIcon: true,
  isDisabled: false,
};
