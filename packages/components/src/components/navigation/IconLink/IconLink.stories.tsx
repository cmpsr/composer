import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { IconLink } from './IconLink';
import { iconLinkSizes, iconLinkVariants } from './types';
import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { IconSend, Text } from '@components';

export default {
  component: IconLink,
  title: 'Components/Navigation/IconLink',
  argTypes: {
    variant: {
      options: [...iconLinkVariants],
      control: { type: 'select' },
    },
    size: {
      options: iconLinkSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllVariantsTemplate = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Variant</Th>
        <Th>S</Th>
        <Th>M</Th>
        <Th>L</Th>
      </Tr>
    </Thead>
    <Tbody>
      {[...iconLinkVariants.filter((v) => v !== 'link')].map((variant, i) => (
        <Fragment key={i}>
          <Tr key={`${variant}-${i}`}>
            <Td>{variant}</Td>
            {iconLinkSizes.map((size, i) => (
              <Td key={`${variant}-${size}-${i}`}>
                <IconLink href="#" role="link" variant={variant} size={size} icon={<IconSend />} />
              </Td>
            ))}
          </Tr>
        </Fragment>
      ))}
    </Tbody>
  </Table>
);

export const AllVariants = AllVariantsTemplate.bind({});

export const WrappedByText = () => (
  <Box maxWidth="680px">
    <Text>
      This example illustrates the use of the <code>isInline</code> property with the <code>IconLink</code> component.
      When <code>isInline</code> is set, the link is displayed inline, allowing the text to wrap naturally in confined
      spaces. Notice how the following icon link
      <IconLink _hover={{ textDecoration: 'underline' }} href="#" isInline icon={<IconSend />} />
      integrates seamlessly with surrounding text, wrapping to the next line as needed.
    </Text>
  </Box>
);

const Template = ({ ...args }) => (
  <IconLink href="#" role="link" icon={<IconSend />} {...args}>
    Playground
  </IconLink>
);

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  variant: undefined,
  isInline: false,
};
