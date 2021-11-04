import React, { FunctionComponent } from 'react';

interface Props {
  children: React.ReactNode;
}

export const TestComponent: FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>;
};
