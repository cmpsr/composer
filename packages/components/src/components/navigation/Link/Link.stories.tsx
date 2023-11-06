import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Link } from './Link';
import { linkSizes, linkVariants } from './types';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { buttonVariants, IconExternalLink, Text } from '@components';

export default {
  component: Link,
  title: 'Components/Navigation/Link',
  argTypes: {
    variant: {
      options: [...linkVariants, ...buttonVariants],
      control: { type: 'select' },
    },
    size: {
      options: linkSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllVariantsTemplate = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>State</Th>
        <Th>S</Th>
        <Th>M</Th>
        <Th>L</Th>
      </Tr>
    </Thead>
    <Tbody>
      {[...linkVariants.filter((v) => v !== 'link'), ...buttonVariants].map((variant, i) => (
        <Fragment key={i}>
          {['Default', 'Leading Icon', 'Trailing Icon'].map((state, i) => (
            <Tr key={`${state}-${i}`}>
              <Td>{state}</Td>
              {linkSizes.map((size, i) => (
                <Td key={`${variant}-${size}-${i}-${state}`}>
                  <Link
                    href="#"
                    role="link"
                    variant={variant}
                    size={size}
                    {...{ ...(state === 'Trailing Icon' && { trailingIcon: <IconExternalLink /> }) }}
                    {...{ ...(state === 'Leading Icon' && { leadingIcon: <IconExternalLink /> }) }}
                  >
                    Link with {variant}
                  </Link>
                </Td>
              ))}
            </Tr>
          ))}
        </Fragment>
      ))}
    </Tbody>
  </Table>
);

export const AllVariants = AllVariantsTemplate.bind({});

export const WrappedByText = () => (
  <Text>
    A{' '}
    <Link _hover={{ textDecoration: 'underline' }} href="#">
      link
    </Link>{' '}
    in the middle of a text with a custom decoration foo
  </Text>
);

const Template = ({ showLeadingIcon, showTrailingIcon, ...args }) => (
  <Link
    href="#"
    role="link"
    {...(showLeadingIcon && { leadingIcon: <IconExternalLink /> })}
    {...(showTrailingIcon && { trailingIcon: <IconExternalLink /> })}
    {...args}
  >
    Playground
  </Link>
);

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  showLeadingIcon: true,
  showTrailingIcon: true,
  variant: undefined,
};
