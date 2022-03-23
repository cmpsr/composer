import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Link } from './Link';
import { linkSizes, linkVariants } from './types';
import * as Icons from '../Icons';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export default {
  component: Link,
  title: 'Components/Primitives/Link',
  argTypes: {
    variant: {
      options: linkVariants,
      control: { type: 'select' },
    },
    size: {
      options: linkSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

export const All = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Size</Th>
        <Th>Text only</Th>
        <Th>With leading icon</Th>
        <Th>With trailing Icon</Th>
      </Tr>
    </Thead>
    <Tbody>
      {linkSizes.map((size) => (
        <Tr key="size">
          <Td>{size.toUpperCase()}</Td>
          <Td>
            <Link size={size} href="#">
              Size {size.toUpperCase()} link
            </Link>
          </Td>
          <Td>
            <Link size={size} href="#" leadingIcon={Icons.IconExternalLink}>
              Size {size.toUpperCase()} link with leading icon
            </Link>
          </Td>
          <Td>
            <Link size={size} href="#" trailingIcon={Icons.IconExternalLink}>
              Size {size.toUpperCase()} link with trailing icon
            </Link>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

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
      {linkVariants.map((variant, i) => (
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
                    {...{ ...(state === 'Trailing Icon' && { trailingIcon: Icons.IconExternalLink }) }}
                    {...{ ...(state === 'Leading Icon' && { leadingIcon: Icons.IconExternalLink }) }}
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

const Template = ({ showLeadingIcon, showTrailingIcon, ...args }) => (
  <Link
    href="#"
    role="link"
    {...(showLeadingIcon && { leadingIcon: Icons.IconExternalLink })}
    {...(showTrailingIcon && { trailingIcon: Icons.IconExternalLink })}
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
