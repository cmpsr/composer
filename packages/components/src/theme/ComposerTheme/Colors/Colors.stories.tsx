import React from 'react';
import { Meta } from '@storybook/react';
import { defaultColors } from '.';
import {
  Center,
  Grid,
  Flex,
  Heading,
  Square,
  Text,
  Box,
} from '@chakra-ui/react';

interface Props {
  token: string;
  color: string;
  borderColor: string;
}

const Component = ({ token, color, borderColor }: Props) => (
  <Flex>
    <Square bg={color} size="6rem" borderColor={borderColor} borderWidth={4} />
    <Center px="1rem">
      <Flex direction="column">
        <Heading size="md">{token}</Heading>
        <Text>{color}</Text>
      </Flex>
    </Center>
  </Flex>
);

export default {
  component: Component,
  title: 'Theme/Colors',
} as Meta;

const Template = ({ borderColor }: { borderColor: string }) => {
  const categorizedColor: any = {};
  const sortedColorsKeys = Object.keys(defaultColors).sort();
  sortedColorsKeys.forEach((key) => {
    const category = key.split('-')[0];
    if (!categorizedColor[category]) {
      categorizedColor[category] = [];
    }
    categorizedColor[category].push({
      token: key,
      color: defaultColors[key],
    });
  });

  return (
    <Box>
      {Object.keys(categorizedColor)
        .sort()
        .map((category) => (
          <Box paddingTop="2rem" key={category}>
            <Heading>{category.toUpperCase()}</Heading>
            <Grid padding="1rem" templateColumns="repeat(2, 1fr)" gap={6}>
              {categorizedColor[category].map(({ token, color }) => (
                <Component
                  key={token}
                  token={token}
                  color={color}
                  borderColor={borderColor}
                />
              ))}
            </Grid>
          </Box>
        ))}
    </Box>
  );
};

export const Colors = Template.bind({});
Colors.args = {
  borderColor: '#888',
};
