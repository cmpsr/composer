import React from 'react';
import { Meta } from '@storybook/react';
import { TextPairing, TextPairingVariant, textPairingVariants } from '.';
import { Text } from 'components';
import { Box, Flex, Spacer, Stack, StackDivider } from '@chakra-ui/layout';

export default {
  component: TextPairing,
  title: 'Components/Primitives/TextPairing',
  argTypes: {
    variant: {
      options: textPairingVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

interface Props {
  label: string;
  subLabel: string;
}
const AllTemplate = ({ label, subLabel }: Props) => (
  <Stack
    bg="white"
    spacing="2rem"
    py="2rem"
    divider={<StackDivider borderColor="#888" />}
  >
    {textPairingVariants.map((variant) => (
      <Flex key={variant} px="1rem">
        <Box>
          <Text variant="font-body-display-S">{variant}</Text>
        </Box>
        <Spacer />
        <Box>
          <TextPairing variant={variant} label={label} subLabel={subLabel} />
        </Box>
      </Flex>
    ))}
  </Stack>
);
export const All = AllTemplate.bind({});
All.args = {
  label: 'Composer rocks',
  subLabel: 'Oh, yeah!',
};

const Template = (args) => (
  <Box bg="white" py="2rem">
    <TextPairing {...args} />
  </Box>
);
export const Playground = Template.bind({});
Playground.args = {
  variant: textPairingVariants[0],
  label: 'Label',
  subLabel: 'SubLabel',
};
