import React, { FunctionComponent } from 'react';
import { Button } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export const TestComponent: FunctionComponent<Props> = ({ children }) => {
  return <Button>{children}</Button>;
};
