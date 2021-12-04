import React from 'react';
import { Meta } from '@storybook/react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex } from '@chakra-ui/react';

import { defaultRadius } from '.';

export default {
  title: 'Theme/Radius',
} as Meta;

export const Radius = () => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Radius</Th>
          <Th>Token</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(defaultRadius).map(([key, value]) => (
          <Tr key={key}>
            <Td>
              <Flex alignItems="center">
                <Box
                  width="60px"
                  height="60px"
                  bgColor="text-link-primary-ui-hover"
                  mr="spacer-3"
                  borderRadius={value}
                />
                <Box
                  backgroundColor="text-primary"
                  color="white"
                  width="auto"
                  py="spacer-1"
                  px="spacer-2"
                  borderRadius="3px"
                >
                  {value}
                </Box>
              </Flex>
            </Td>
            <Td>
              <Box
                backgroundColor="text-primary"
                color="white"
                width="auto"
                py="spacer-1"
                px="spacer-2"
                borderRadius="3px"
                display="inline-block"
              >
                {key}
              </Box>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
