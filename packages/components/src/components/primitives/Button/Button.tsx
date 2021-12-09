import React, { FC } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = (props) => <ChakraButton {...props} />;
