import React from 'react';
import { Meta } from '@storybook/react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex } from '@chakra-ui/react';

import { defaultShadows } from '.';
import { getFigmaDesignLink } from '@components/figmaLinks';

export default {
  title: 'Theme/Shadows',
  parameters: getFigmaDesignLink('shadows'),
} as Meta;

export const Shadows = () => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Shadows</Th>
          <Th>Token</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(defaultShadows).map(([key, value]) => (
          <Tr key={key}>
            <Td>
              <Flex alignItems="center">
                <Box backgroundColor="white" width="auto" p="20px">
                  <Box
                    width="60px"
                    height="60px"
                    bgColor="text-link-primary-hover"
                    boxShadow={value}
                    borderRadius="radii-1"
                  />
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
