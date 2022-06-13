import React from 'react';
import { Meta } from '@storybook/react';
import { TextPairing, textPairingVariants, textPairingTextAlignments } from '.';
import { Text } from '@components';
import { Box, Flex, Spacer, Stack, StackDivider } from '@chakra-ui/layout';
import { defaultColors } from '@theme/ComposerTheme/Colors';

export default {
  component: TextPairing,
  title: 'Components/Primitives/TextPairing',
  argTypes: {
    variant: {
      options: textPairingVariants,
      control: { type: 'select' },
    },
    labelColor: {
      options: defaultColors,
      control: { type: 'select' },
    },
    subLabelColor: {
      options: defaultColors,
      control: { type: 'select' },
    },
    textAlign: {
      options: textPairingTextAlignments,
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
          <TextPairing
            variant={variant}
            labelProps={{ children: label }}
            subLabelProps={{ children: subLabel }}
            textAlign={textAlign}
          />
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
      labelProps={{ children: 'Label' }}
      subLabelProps={{ children: 'SubLabel' }}
      variant={{
        base: 'textpairing-body-bold',
        md: 'textpairing-header-L',
        lg: 'textpairing-header-4XL',
      }}
    />
  </Box>
);
export const ResponsiveVariant = ResponsiveTemplate.bind({});

const Template = ({ label, subLabel, variant, textAlign, otherLabelProps = {}, otherSubLabelProps = {} }) => (
  <Box py="2rem">
    <TextPairing
      labelProps={{ children: label, ...otherLabelProps }}
      subLabelProps={{ children: subLabel, ...otherSubLabelProps }}
      variant={variant}
      textAlign={textAlign}
    />
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
