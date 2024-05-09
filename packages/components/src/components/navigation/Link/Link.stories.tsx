import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Link } from './Link';
import { linkSizes, linkVariants } from './types';
import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
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
          {['Default', 'Leading Icon', 'Trailing Icon', 'Disabled'].map((state, i) => (
            <Tr key={`${state}-${i}`} {...(variant === 'link-light' && { backgroundColor: 'background-page-03' })}>
              <Td>{state}</Td>
              {linkSizes.map((size, i) => (
                <Td key={`${variant}-${size}-${i}-${state}`}>
                  <Link
                    href="#"
                    role="link"
                    variant={variant}
                    size={size}
                    {...(state === 'Trailing Icon' && { trailingIcon: <IconExternalLink /> })}
                    {...(state === 'Leading Icon' && { leadingIcon: <IconExternalLink /> })}
                    {...(state === 'Disabled' && { isDisabled: true })}
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
  <Box maxWidth="680px">
    <Text>
      This example illustrates the use of the <code>isInline</code> property with the <code>Link</code> component. When{' '}
      <code>isInline</code> is set, the link is displayed inline, allowing the text to wrap naturally in confined
      spaces. Notice how the long link text:{' '}
      <Link _hover={{ textDecoration: 'underline' }} href="#" isInline>
        &quot;This is a very long link text that demonstrates effective wrapping within a narrow container&quot;
      </Link>{' '}
      integrates seamlessly with surrounding text, wrapping to the next line as needed.
    </Text>
    <Text mt="4">
      Here&apos;s another link with a trailing icon and extended content, demonstrating the inline wrapping behavior:{' '}
      <Link _hover={{ textDecoration: 'underline' }} href="#" isInline trailingIcon={<IconExternalLink />}>
        &quot;Long link text with an icon, showing how it wraps in a confined space&quot;
      </Link>{' '}
      in the text flow.
    </Text>
  </Box>
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
  isInline: false,
  isDisabled: false,
};
