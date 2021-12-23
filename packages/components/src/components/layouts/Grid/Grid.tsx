import React, { FC } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { GridProps } from './types';

export const Grid: FC<GridProps> = (props) => <SimpleGrid {...props} />;
