import { ResponsiveValue } from '@chakra-ui/react';
import { LinkSize } from '../types';

export const getIconSize = (size: ResponsiveValue<LinkSize>) => {
  if (typeof size === 'string') {
    return size === 'l' ? 'm' : size;
  }
  if (Array.isArray(size)) {
    return size.map(getIconSize);
  }
  if (typeof size === 'object') {
    return Object.keys(size).reduce((acc, key) => ({ ...acc, [key]: getIconSize(size[key]) }), {});
  }
};
