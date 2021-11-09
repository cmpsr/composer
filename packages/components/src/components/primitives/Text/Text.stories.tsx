import React from 'react';
import { Meta } from '@storybook/react';
import { Text, textVariants } from '.';
import { Box, Flex, Spacer, Stack, StackDivider } from '@chakra-ui/layout';

export default {
  component: Text,
  title: 'Components/Primitives/Text',
} as Meta;

const AllTemplate = ({ text }: { text: string }) => (
  <Stack
    bg="white"
    spacing="2rem"
    py="2rem"
    divider={<StackDivider borderColor="#888" />}
  >
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

const Template = (args) => (
  <Box bg="white" py="2rem">
    <Text {...args} />
  </Box>
);
export const Playground = Template.bind({});
Playground.args = {
  children: 'Composer rocks!',
  as: 'h1',
  variant: 'font-header-4XL',
};
