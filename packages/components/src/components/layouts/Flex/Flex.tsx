import React, { FC } from 'react';
import { Flex as ChakraFlex } from '@chakra-ui/react';
import { FlexProps } from './types';

export const Flex: FC<FlexProps> = (props) => <ChakraFlex {...props} />;
