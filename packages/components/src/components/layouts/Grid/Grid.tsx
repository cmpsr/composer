import React, { FC } from 'react';
import { SimpleGrid, forwardRef } from '@chakra-ui/react';
import { GridProps } from './types';

export const Grid = forwardRef<GridProps, typeof SimpleGrid>((props, ref) => <SimpleGrid ref={ref} {...props} />);
