import React, { FC } from 'react';
import { Image as ChakraImage } from '@chakra-ui/react';
import { ImageProps } from './types';

export const Image: FC<ImageProps> = (props) => <ChakraImage {...props} />;
