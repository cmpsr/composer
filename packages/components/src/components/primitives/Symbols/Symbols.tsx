import React, { FC } from 'react';
import { Kbd, KbdProps, useStyleConfig } from '@chakra-ui/react';

export const Symbols: FC<KbdProps> = (props) => {
  const styles = useStyleConfig('Symbols');

  return <Kbd {...props} {...(styles as KbdProps)} />;
};
