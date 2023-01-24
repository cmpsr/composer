import React, { FC } from 'react';
import { Box as ChakraBox, useStyleConfig } from '@chakra-ui/react';
import { CardProps, CardStyle } from './types';

export const Card: FC<CardProps> = ({ filled, elevated, outlined, ...props }) => {
  const styles = useStyleConfig('Card') as CardStyle;
  return (
    <ChakraBox
      {...(filled && { bg: 'background-card' })}
      {...(elevated && { boxShadow: 'elevation-interactive' })}
      {...(outlined && {
        borderWidth: '0.0625rem',
        borderColor: 'ui-element-outline-default',
      })}
      {...styles}
      {...props}
    />
  );
};
