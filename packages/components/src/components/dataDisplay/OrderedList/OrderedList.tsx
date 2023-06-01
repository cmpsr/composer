import React, { FC } from 'react';
import { ListItem, OrderedList as ChakraOrderedList } from '@chakra-ui/react';
import { OrderedListProps, OrderedListStaticMembers } from './types';

export const OrderedList: FC<OrderedListProps> & OrderedListStaticMembers = (props) => (
  <ChakraOrderedList listStylePosition="inside" {...props} />
);

OrderedList.Item = ListItem;
