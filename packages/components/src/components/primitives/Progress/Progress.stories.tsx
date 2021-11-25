import React from 'react';
import { Meta } from '@storybook/react';
import { Progress } from './Progress';
import { StackDivider, HStack, VStack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { SIZES } from '../../../theme/types';

export default {
  component: Progress,
  title: 'Components/Primitives/Progress',
} as Meta;

const AllTemplate = () => (
  <HStack spacing={2}>
    <VStack spacing={4} w="100%">
      {SIZES.map((size) => (
        <HStack
          key={size}
          w="100%"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Box w="5%" color="gray">
            {size}
          </Box>
          <Box w="40%">
            <Progress value={80} size={size} />
          </Box>
          <Box w="40%">
            <Progress value={80} size={size} isIndeterminate />
          </Box>
        </HStack>
      ))}
    </VStack>

    <VStack spacing={4} w="100%">
      {SIZES.map((size) => (
        <HStack
          key={size}
          w="100%"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Box w="5%" color="gray">
            {size}
          </Box>
          <Box w="40%">
            <Progress value={20} size={size} />
          </Box>
          <Box w="40%">
            <Progress value={20} size={size} isIndeterminate />
          </Box>
        </HStack>
      ))}
    </VStack>
  </HStack>
);

export const All = AllTemplate.bind({});
