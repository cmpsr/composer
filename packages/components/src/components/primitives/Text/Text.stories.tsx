import React from 'react';
import { Meta } from '@storybook/react';
import { Text, textVariants } from '.';
import { Box, Flex, Spacer, Stack, StackDivider } from '@chakra-ui/layout';

export default {
  component: Text,
  title: 'Components/Primitives/Text',
  argTypes: {
    variant: {
      options: textVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = ({ text }: { text: string }) => (
  <Stack spacing="2rem" py="2rem" divider={<StackDivider borderColor="#888" />}>
    {textVariants.map((variant) => (
      <Flex key={variant} px="1rem">
        <Box>
          <Text variant={variant}>{variant}</Text>
        </Box>
        <Spacer />
        <Box>
          <Text variant={variant}>{text}</Text>
        </Box>
      </Flex>
    ))}
  </Stack>
);

export const All = AllTemplate.bind({});
All.args = {
  text: 'Composer rocks!',
};

const ResponsiveTemplate = (args) => (
  <Box py="2rem">
    <Text
      {...args}
      variant={{
        base: 'text-header-L',
        md: 'text-header-2XL',
        lg: 'text-header-4XL',
      }}
    />
  </Box>
);
export const ResponsiveVariant = ResponsiveTemplate.bind({});
ResponsiveVariant.args = {
  children: 'Composer rocks!',
};

const Template = (args) => (
  <Box py="2rem">
    <Text {...args} />
  </Box>
);
export const Playground = Template.bind({});
Playground.args = {
  children: 'Composer rocks!',
  as: 'h1',
  variant: 'text-header-4XL',
};
