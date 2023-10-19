import React from 'react';
import { Meta } from '@storybook/react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex } from '@chakra-ui/react';

import { theme } from '../theme';

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
        {Object.entries(theme.space).map(([key, value]) => (
          <Tr key={key}>
            <Td>
              <Flex alignItems="center">
                <Box width={value} height="16px" bgColor="text-link-primary-hover" mr="spacer-3" />
                <Box
                  backgroundColor="text-primary"
                  color="white"
                  width="auto"
                  py="spacer-1"
                  px="spacer-2"
                  borderRadius="3px"
                >
                  {value}/{+value.substring(0, value.length - 3) * 16}px
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
