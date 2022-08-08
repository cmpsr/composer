import React from 'react';
import { Meta } from '@storybook/react';
import { Box, Flex, Spacer, Stack, StackDivider } from '@chakra-ui/layout';
import { Text } from '@components';
import { TextPairing, textPairingVariants } from '.';

export default {
  component: TextPairing,
  title: 'Components/Primitives/TextPairing',
  argTypes: {
    variant: {
      options: textPairingVariants,
      control: { type: 'select' },
    },
    textAlign: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = ({ label, subLabel, textAlign }) => (
  <Stack spacing="2rem" py="2rem" divider={<StackDivider borderColor="#888" />}>
    {textPairingVariants.map((variant) => (
      <Flex key={variant} px="1rem">
        <Box>
          <Text variant="text-body-display-S">{variant}</Text>
        </Box>
        <Spacer />
        <Box>
          <TextPairing variant={variant} textAlign={textAlign}>
            <TextPairing.Label>{label}</TextPairing.Label>
            <TextPairing.SubLabel>{subLabel}</TextPairing.SubLabel>
          </TextPairing>
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

const ResponsiveTemplate = () => (
  <Box py="2rem">
    <TextPairing
      variant={{
        base: 'textpairing-body-bold',
        md: 'textpairing-header-L',
        lg: 'textpairing-header-4XL',
      }}
    >
      <TextPairing.Label>Label</TextPairing.Label>
      <TextPairing.SubLabel>SubLabel</TextPairing.SubLabel>
    </TextPairing>
  </Box>
);
export const ResponsiveVariant = ResponsiveTemplate.bind({});

const Template = ({ label, subLabel, variant, textAlign, otherLabelProps = {}, otherSubLabelProps = {} }) => (
  <Box py="2rem">
    <TextPairing variant={variant} textAlign={textAlign}>
      <TextPairing.Label children={label} {...otherLabelProps} />
      <TextPairing.SubLabel children={subLabel} {...otherSubLabelProps} />
    </TextPairing>
  </Box>
);
export const Playground = Template.bind({});
Playground.args = {
  variant: textPairingVariants[0],
  label: 'Label',
  subLabel: 'SubLabel',
  otherLabelProps: { color: 'text-primary' },
  otherSubLabelProps: { color: 'text-primary' },
  textAlign: 'start',
};
