import React, { FC } from 'react';
import {
  OrderedList as ChakraOrderedList,
  ListItem,
} from "@chakra-ui/react";
import { OrderedListProps, OrderedListStaticMembers } from './types';

export const OrderedList: FC<OrderedListProps> & OrderedListStaticMembers = (props) => <ChakraOrderedList listStylePosition="inside" {...props} />;

OrderedList.ListItem = ListItem;
