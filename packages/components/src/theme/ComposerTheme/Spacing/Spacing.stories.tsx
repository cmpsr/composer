import React from 'react';
import { Meta } from '@storybook/react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex } from '@chakra-ui/react';

import { defaultSpacing } from '.';

export default {
  title: 'Theme/Spacing',
} as Meta;

export const Spacing = () => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Spacer</Th>
          <Th>Token</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(defaultSpacing).map(([key, value]) => (
          <Tr key={key}>
            <Td>
              <Flex alignItems="center">
                <Box
                  width={value}
                  height="16px"
                  bgColor="text-secondary-ui-hover"
                  mr="spacer-3"
                />
                <Box
                  backgroundColor="text-secondary"
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
                backgroundColor="text-secondary"
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
