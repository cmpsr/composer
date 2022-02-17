import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Link } from './Link';
import { VStack, Divider, HStack, StackDivider } from '@chakra-ui/react';
import { linkSizes, linkVariants } from './types';
import * as Icons from '../Icons';

export default {
  component: Link,
  title: 'Components/Primitives/Link',
} as Meta;

const AllTemplate = () => {
  return (
    <VStack>
      {linkSizes.map((size, key) => (
        <Fragment key={key}>
          <Link size={size} role="link" href="#">
            Size {size.toUpperCase()} link
          </Link>
          <Divider />
          <>
            <Link leadingIcon={Icons.IconExternalLink} size={size} role="link" href="#">
              Size {size.toUpperCase()} link with left icon
            </Link>
            <Divider />
            <Link trailingIcon={Icons.IconExternalLink} size={size} role="link" href="#">
              Size {size.toUpperCase()} link with right icon
            </Link>
            <Divider />
          </>
        </Fragment>
      ))}
    </VStack>
  );
};

export const All = AllTemplate.bind({});

const AllVariantsTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {linkVariants.map((variant, i) => (
      <VStack key={`${variant}-${i}`}>
        <HStack>
          {linkSizes.map((size, i) => (
            <Link size={size} role="link" href="#" variant={variant} key={`${size}-${i}`}>
              {variant}
            </Link>
          ))}
        </HStack>
      </VStack>
    ))}
  </VStack>
);

export const AllVariants = AllVariantsTemplate.bind({});

const Template = ({ showLeadingIcon, showTrailingIcon, ...args }) => (
  <VStack>
    <Link
      href="#"
      role="link"
      {...(showLeadingIcon && { leadingIcon: Icons.IconExternalLink })}
      {...(showTrailingIcon && { trailingIcon: Icons.IconExternalLink })}
      {...args}
    >
      Playground
    </Link>
  </VStack>
);

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  showLeadingIcon: true,
  showTrailingIcon: true,
  variant: undefined,
};
