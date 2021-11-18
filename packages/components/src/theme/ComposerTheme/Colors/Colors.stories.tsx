import React from 'react';
import { Meta } from '@storybook/react';
import { defaultColors } from '.';
import { Center, Grid, Flex, Heading, Square, Box } from '@chakra-ui/react';

interface Props {
  token: string;
  color: string;
  borderColor: string;
}

const Component = ({ token, color, borderColor }: Props) => (
  <Flex>
    <Square
      bg={color}
      width="60px"
      height="60px"
      borderColor={borderColor}
      borderWidth={2}
      borderRadius="radii-1"
    />
    <Center px="1rem">
      <Flex direction="column">
        <Heading size="md" color="text-primary">
          {token}
        </Heading>
        <Box
          backgroundColor="text-secondary"
          color="white"
          width="auto"
          py="spacer-1"
          px="spacer-2"
          borderRadius="3px"
          display="inline-block"
        >
          {color}
        </Box>
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
            <Heading color="text-primary">{category.toUpperCase()}</Heading>
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
