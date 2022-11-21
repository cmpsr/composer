import React from 'react';
import { Flex, Spinner } from '@cmpsr/components';

export const Loading = () => (
  <Flex justifyContent="center" alignItems="center" backgroundColor="background-dark" width="100%" height="100vh">
    <Spinner size="s" />
  </Flex>
);
